declare global {
  interface Window {
    electronAPI: {
      close: () => void;
    };
  }
}
export {};
