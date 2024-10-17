import { type BuildOptions } from 'esbuild';
import { cwd } from 'process';
import { loadConfig } from 'tsconfig-paths';

function getPathsMatcher(cwd: string): RegExp | null {
  try {
    const pathsResult = loadConfig(cwd);
    if (pathsResult.resultType !== 'success') return null;

    const pathMatchers = Object.keys(pathsResult.paths).map((path) =>
      path.replace(/\*/, '.*'),
    );
    if (!pathMatchers.length) return null;

    return new RegExp(`^(?:${pathMatchers.join('|')})$`);
  } catch {
    return null;
  }
}

export default function (defaults: BuildOptions) {
  const pathMatcher = getPathsMatcher(cwd());
  return {
    ...defaults,
    // logLevel: 'verbose',
    plugins: [
      {
        name: 'external-node_modules',
        setup(build) {
          build.onResolve(
            {
              // don't bundle anything that is NOT a relative import
              //   WARNING: we can't use a negative lookahead/lookbehind because esbuild uses Go
              filter: /(?:^[^.])|(?:^\.[^/.])|(?:^\.\.[^/])/,
            },
            ({ path }) => {
              if (pathMatcher?.test(path)) return;
              return { external: true, path };
            },
          );
        },
      },
    ],
  };
}
