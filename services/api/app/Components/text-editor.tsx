"use client"

import React, { useState , useEffect , useRef } from 'react';
import dynamic from 'next/dynamic'; 

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

import '../../styles/quill_style.css'

type Props = {
  value: any;
  onChange: any;
}


const TextEditor = ({value , onChange}: Props) => {
   
    const [content, setContent] = useState(
      value && value?.inner ? value?.inner?.value : ''
    );
    const editorRef = useRef(null);
  
    useEffect(() => {
      if (value) {
        setContent(value?.inner?.value);
      }
    }, [value]);
  
    const handleChange = (currentContent: any) => {
      if (!onChange) return;
      setContent(currentContent);
      onChange({
        ...value,
        inner: { kind: 'value', value: currentContent },
      });
    };

    
    
  
  return (
    <>
    <div className='max-h-[550px]'>
    <ReactQuill theme="snow" value={content} onChange={handleChange} style={{height:'400px' , resize:'both'}} />
    </div>
    </>
  )
}

export default TextEditor;