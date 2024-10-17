import { configureTracking } from '@k6-contrib/list-plugins';
import { ListConfig } from '@keystone-6/core';
import { list as listOriginal } from '@keystone-6/core';
import { BaseListTypeInfo } from '@keystone-6/core/types';

export const composeResolvedInputHook =
  (originalHook: any, newHook: Function) => async (params: any) => {
    let { resolvedData } = params;
    if (originalHook && typeof originalHook === 'function') {
      resolvedData = await originalHook(params);
    }
    return newHook({ ...params, resolvedData });
  };

const withTracking = configureTracking({
  atTrackingOptions: {
    isIndexed: true,
  },
});

/**
 * default list config with tracking and admin access only, use access to override it, by default every thing is orderable and filterable
 */
export function list<
  __Unused extends any,
  ListTypeInfo extends BaseListTypeInfo,
>(
  config: Omit<ListConfig<ListTypeInfo>, 'access'> & {
    access?: ListConfig<ListTypeInfo>['access'];
  },
): ListConfig<ListTypeInfo> {
  return listOriginal(
    withTracking({
      defaultIsFilterable: true,
      defaultIsOrderable: true,
      ...(config as any),
      hooks: {
        ...config.hooks,
      },
    }),
  );
}
