import { graphql } from '@keystone-6/core';
import {
  type BaseListTypeInfo,
  type CommonFieldConfig,
  type FieldTypeFunc,
  fieldType,
  orderDirectionEnum,
} from '@keystone-6/core/types';

type TextFieldConfig<ListTypeInfo extends BaseListTypeInfo> =
  CommonFieldConfig<ListTypeInfo> & {
    isIndexed?: boolean | 'unique';
  };

export function Color<ListTypeInfo extends BaseListTypeInfo>({
  isIndexed,
  ...config
}: TextFieldConfig<ListTypeInfo> = {}): FieldTypeFunc<ListTypeInfo> {
  return (meta) =>
    fieldType({
      kind: 'scalar',
      mode: 'optional',
      scalar: 'String',
      index: isIndexed === true ? 'index' : isIndexed || undefined,
    })({
      ...config,
      input: {
        create: {
          arg: graphql.arg({ type: graphql.String }),
          resolve(value, context) {
            return value;
          },
        },
        update: { arg: graphql.arg({ type: graphql.String }) },
        orderBy: { arg: graphql.arg({ type: orderDirectionEnum }) },
      },
      output: graphql.field({
        type: graphql.String,
        resolve({ value, item }, args, context, info) {
          return value;
        },
      }),
      views: './color-picker/views',
      getAdminMeta() {
        return {};
      },
    });
}
