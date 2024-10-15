import { CellContainer, CellLink } from '@keystone-6/core/admin-ui/components';
import {
  type CardValueComponent,
  type CellComponent,
  type FieldController,
  type FieldControllerConfig,
  type FieldProps,
} from '@keystone-6/core/types';
import {
  FieldContainer,
  FieldDescription,
  FieldLabel,
  TextInput,
} from '@keystone-ui/fields';
import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import reactCSS from 'reactcss';

export function Field({
  field,
  value,
  onChange,
  autoFocus,
}: FieldProps<typeof controller>) {
  const disabled = onChange === undefined;
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [color, setColor] = useState(value || 'rgba(241, 112, 19, 1)');

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChange = (color: any) => {
    const rgbaColor = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;
    setColor(rgbaColor);
    onChange(rgbaColor);
  };

  const styles = reactCSS({
    default: {
      color: {
        width: '36px',
        height: '14px',
        borderRadius: '2px',
        background: color,
      },
      swatch: {
        padding: '5px',
        background: '#fff',
        borderRadius: '1px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer',
      },
      popover: {
        position: 'absolute',
        zIndex: '50',
      },
      cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
    },
  });

  return (
    <FieldContainer as="fieldset">
      <FieldLabel>{field.label}</FieldLabel>
      <FieldDescription id={`${field.path}-description`}>
        {field.description}
      </FieldDescription>
      <div>
        <div>
          <div style={styles.swatch} onClick={handleClick}>
            <div style={styles.color} />
          </div>
          {displayColorPicker ? (
            <div style={styles.popover}>
              <div style={styles.cover} onClick={handleClose} />
              <SketchPicker color={color} onChange={handleChange} />
            </div>
          ) : null}
        </div>
      </div>
    </FieldContainer>
  );
}

export const Cell: CellComponent = ({ item, field, linkTo }) => {
  const value = item[field.path] + '';
  return linkTo ? (
    <CellLink {...linkTo}>{value}</CellLink>
  ) : (
    <CellContainer>{value}</CellContainer>
  );
};
Cell.supportsLinkTo = true;

export const CardValue: CardValueComponent = ({ item, field }) => {
  return (
    <FieldContainer>
      <FieldLabel>{field.label}</FieldLabel>
      {item[field.path]}
    </FieldContainer>
  );
};

export const controller = (
  config: FieldControllerConfig<{}>,
): FieldController<string | null, string> => {
  return {
    path: config.path,
    label: config.label,
    description: config.description,
    graphqlSelection: config.path,
    defaultValue: null,
    deserialize: (data) => {
      const value = data[config.path];
      return typeof value === 'string' ? value : null;
    },
    serialize: (value) => ({ [config.path]: value }),
  };
};
