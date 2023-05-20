export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NG_APP_API_KEY: string;
    }
  }
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
  /**
   * Built-in environment variable.
   * @see Docs https://github.com/chihab/ngx-env#ng_app_env.
   */
  readonly NG_APP_API_KEY: string;
}
