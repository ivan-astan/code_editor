import React from "react";
import { useCodeStore } from "../state/useCodeState.ts";
import { Language } from "../consts/consts.ts";

const LanguageSelector: React.FC = () => {
  const language = useCodeStore((state) => state.language);
  const changeLanguage = useCodeStore((state) => state.changeLanguage);

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    changeLanguage(event.target.value as Language);
  };

  return (
    <div className="mb-3">
      <label htmlFor="language-selector" className="form-label">
        Choose a language:
      </label>
      <select
        id="language-selector"
        className="form-select"
        value={language}
        onChange={handleLanguageChange}
      >
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="go">Go</option>
        <option value="typescript">TypeScript</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
