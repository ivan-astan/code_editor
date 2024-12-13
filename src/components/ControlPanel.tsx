import React from "react";
import { useCodeStore } from "../state/useCodeState.ts";

interface ControlPanelProps {
  onRunCode: () => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ onRunCode }) => {
  const isErrorMode = useCodeStore((state) => state.isErrorMode);
  const setErrorMode = useCodeStore((state) => state.setErrorMode);
  const handleSwitchMode = () => setErrorMode(!isErrorMode)
  return (
    <div className="d-flex justify-content-between mt-3">
      <button className="btn btn-primary" onClick={onRunCode}>
        Run Code
      </button>
      <button className="btn btn-warning" onClick={handleSwitchMode}>
        {isErrorMode ? "Switch to Success Mode" : "Switch to Error Mode"}
      </button>
    </div>
  );
};

export default ControlPanel;
