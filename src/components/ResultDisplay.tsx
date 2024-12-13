import React from "react";
import { useCodeStore } from "../state/useCodeState.ts";

const ResultDisplay: React.FC = () => {
  const result = useCodeStore((state) => state.result);
  const isError = useCodeStore((state) => state.isError);
  
  if (!result) return null;

  return (
    <div
      className={`mt-3 p-3 border rounded ${
        isError ? "bg-danger text-white" : "bg-success text-white"
      }`}
    >
      <h3>{isError ? "Error:" : "Result:"}</h3>
      <pre>{result}</pre>
    </div>
  );
};

export default ResultDisplay;
