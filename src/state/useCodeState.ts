import { create } from "zustand";
import { Language } from "../consts/consts.ts";
import { codeAPI } from "../api/codeAPI.ts";

type Store = {
  language: Language;
  result: string;
  isErrorMode: boolean;
  isError: boolean;
  changeLanguage: (language: Language) => void;
  runCode: (language: Language, code: string, isErrorMode: boolean) => void;
  setErrorMode: (isErrorMode: boolean) => void;
};

export const useCodeStore = create<Store>((set) => ({
  language: 'javascript',
  result: '',
  isErrorMode: false,
  isError: false,
  
  changeLanguage: (language: Language) => {
    set(() => ({ language }));
  },
  
  runCode: async (language: Language, code: string, isErrorMode: boolean) => {   
    const response = await codeAPI.runCode(language, code, isErrorMode);
    set(() => ({result: response.data.message, isError: !response.data.success}))
  },

  setErrorMode: (isErrorMode: boolean) => {
    set(() => ({ isErrorMode }));
  },
}));