import axios from "axios";
import { APIResponse, Language, LANGUAGE_VERSIONS } from "../consts/consts.ts";

const instance = axios.create({
  baseURL: "http://localhost:3000/",
});

export const codeAPI = {
  runCode: async (language: Language, code: string, isErrorMode: boolean) => {
    const response = await instance.post<APIResponse>("results", {
      language: language,
      script: code,
      version: LANGUAGE_VERSIONS[language],
      success: !isErrorMode,
      message: isErrorMode ? "Code has syntax errors or runtime issues. Please check your code." :"Code executed successfully",
    });
    return response;
  },
};
