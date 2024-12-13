import { Editor } from "@monaco-editor/react";
import * as monaco from "monaco-editor";
import React from "react";
import { useCodeStore } from "../state/useCodeState.ts";

interface CodeEditorProps {
  onMount: (editor: monaco.editor.IStandaloneCodeEditor) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ onMount }) => {
  const language = useCodeStore((state) => state.language);
  return <Editor height={500} language={language} onMount={onMount} />;
};

export default CodeEditor;
