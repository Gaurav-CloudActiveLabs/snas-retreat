/** @jsxRuntime classic */
/** @jsx jsx */
import TextEditor from '@/Components/text-editor';
import { controller } from '@keystone-6/core/fields/types/text/views';
import { FieldProps } from '@keystone-6/core/types';
import { Stack, jsx } from '@keystone-ui/core';


export const Field = ({
  onChange,
  field,
  value,
}: FieldProps<typeof controller>) => {
  
 
  return (
    <div
      css={{
        gridColumn: '1/3',
      }}
      style={{marginBottom: '40px'}}
    >
      <div>
        <label
          htmlFor="Body"
          style={{
            color: '#374151',
            display: 'block',
            fontWeight: '600',
            marginBottom: '4px',
           
          }}
        >
          Content
        </label>
        <div className='mb-5'>
       <TextEditor value={value} onChange={onChange} />
        </div>
      </div>
    </div>
  );
};
