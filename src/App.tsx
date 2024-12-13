import React, { useRef } from "react";
import * as monaco from "monaco-editor";
import LanguageSelector from "./components/LanguageSelector.tsx"; 
import CodeEditor from "./components/CodeEditor.tsx"; 
import ControlPanel from "./components/ControlPanel.tsx"; 
import ResultDisplay from "./components/ResultDisplay.tsx"; 
import { useCodeStore } from "./state/useCodeState.ts"; 
import TaskDescription from "./components/TaskDescription.tsx";

function App() {
  const language = useCodeStore((state) => state.language);
  const runCode = useCodeStore((state) => state.runCode);
  const isErrorMode = useCodeStore((state) => state.isErrorMode)
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  
  const onMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const handleRunCode = async () => {
    if (editorRef.current) {
      await runCode(language, editorRef.current.getValue(), isErrorMode); 
    } else {
      console.error("Editor is not available.");
    }
  };

  return (
    <div className="container mt-4">
      <TaskDescription />
      <LanguageSelector />
      <CodeEditor onMount={onMount} />
      <ControlPanel 
        onRunCode={handleRunCode} 
      />
      <ResultDisplay />
    </div>
  );
}

export default App;