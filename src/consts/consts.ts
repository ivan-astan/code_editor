export const LANGUAGE_VERSIONS = {
    'javascript': '18.15.30',
    'typescript': '5.0.3',
    'python': '3.10.0',
    'go': '1.16.2',
} as const
export type Language = keyof typeof LANGUAGE_VERSIONS;
export type Version = typeof LANGUAGE_VERSIONS[Language];;
export type APIResponse = {
    language: Language,
      script: string,
      version: Version,
      success: boolean,
      message: string,
}