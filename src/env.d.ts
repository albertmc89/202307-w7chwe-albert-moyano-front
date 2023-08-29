/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_API_ROBOTS_URL: string;
  VITE_FIREBASE_API_APIKEY: string;
  VITE_FIREBASE_API_AUTHDOMAIN: string;
  VITE_FIREBASE_API_PROJECTID: string;
  VITE_FIREBASE_API_STORAGEBUCKET: string;
  VITE_FIREBASE_API_MESSAGINGSENDERID: string;
  VITE_FIREBASE_API_APPID: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
