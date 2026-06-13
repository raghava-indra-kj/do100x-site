/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DEVELOPER_NAME: string
  readonly VITE_DEVELOPER_EMAIL: string
  readonly VITE_DEVELOPER_LINKEDIN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
