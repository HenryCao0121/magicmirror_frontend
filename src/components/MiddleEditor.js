// src/components/MiddleEditor.js
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const MiddleEditor = () => {
  const [text, setText] = useState('');

  return (
    <div className="middle-editor">
      <ReactQuill value={text} onChange={setText} />
    </div>
  );
};

export default MiddleEditor;
