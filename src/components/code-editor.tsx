import MonacoEditor from '@monaco-editor/react';

import React from 'react';

const CodeEditor = () => {
  return (
    <MonacoEditor
      options={{
        wordWrap: 'on'
      }}
      theme='dark'
      language='javascript'
      height='500px'
    />
  );
};

export default CodeEditor;
