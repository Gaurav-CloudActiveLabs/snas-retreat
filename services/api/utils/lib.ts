import { configureTracking } from '@k6-contrib/list-plugins';
import { ListConfig } from '@keystone-6/core';
import { list as listOriginal } from '@keystone-6/core';
import { checkbox, text, timestamp } from '@keystone-6/core/fields';
import { BaseListTypeInfo } from '@keystone-6/core/types';
import { createId, init } from '@paralleldrive/cuid2';

import {
  canCreateItem,
  canDeleteItem,
  canQueryItems,
  canUpdateItem,
} from '../accessControl';

const slugHash = init({ length: 6 });

export const slug = ({
  from,
  name = 'slug',
  isIndexed = 'unique',
  makeUnique = true,
}: {
  from: string;
  name?: string;
  isIndexed?: true | 'unique';
  makeUnique?: boolean;
}) => {
  if (!name || !from) throw new Error('name and from is required');
  return text({
    ui: { createView: { fieldMode: 'hidden' } },
    isIndexed,
    hooks: {
      // @ts-ignore
      resolveInput({ operation, inputData, item }) {
        // check if input has slug value, do not create new
        if (inputData[name]) return inputData[name];

        if (operation === 'update' && item?.slug) return item.slug as string;

        const input = inputData[from] || 'new-item';
        const result =
          input
            .trim()
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w\-]+/g, '')
            .replace(/\-\-+/g, '-')
            .replace(/^-+/, '')
            .replace(/-+$/, '') ?? '';

        return `${result}${makeUnique ? `-${slugHash()}` : ''}`;
      },
    },
  });
};

export const composeResolvedInputHook =
  (originalHook: any, newHook: Function) => async (params: any) => {
    let { resolvedData } = params;
    if (originalHook && typeof originalHook === 'function') {
      resolvedData = await originalHook(params);
    }
    return newHook({ ...params, resolvedData });
  };

const listPrefixMap: Record<string, string> = {
  User: 'usr',
  Post: 'pst',
};

function makeCustomIdentifier(listKey: string) {
  // return `${listPrefixMap[listKey] || listKey.toUpperCase()}_${createId()}`;
  return `${listPrefixMap[listKey] || listKey.toUpperCase()}-${createId()}`;
}

const withTracking = configureTracking({
  atTrackingOptions: {
    isIndexed: true,
  },
});

/**
 * default list config with tracking and admin access only, use access to override it, by default every thing is orderable and filterable
 */
export function list<ListTypeInfo extends BaseListTypeInfo>(
  config: Omit<ListConfig<ListTypeInfo>, 'access'> & {
    access?: ListConfig<ListTypeInfo>['access'];
  },
) {
  return listOriginal(
    withTracking({
      defaultIsFilterable: true,
      defaultIsOrderable: true,
      access: {
        ...config.access,
      },
      ...(config as any),
      fields: {
        ...config.fields,
      },
      hooks: {
        ...config.hooks,
        resolveInput: composeResolvedInputHook(
          config.hooks?.resolveInput,
          async ({ listKey, operation, resolvedData }: any) => {
            return {
              ...resolvedData,
              ...(operation === 'create'
                ? { id: makeCustomIdentifier(listKey) }
                : {}),
            };
          },
        ),
      },
    }),
  );
}
