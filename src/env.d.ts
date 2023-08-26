/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_API_ROBOTS_URL: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
