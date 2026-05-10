/// <reference types="vite/client" />

interface Window {
  pixelId: string;
  gtag: (...args: unknown[]) => void;
}