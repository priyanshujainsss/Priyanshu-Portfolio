"use client";

import { useEffect } from "react";

const DevToolsBlocker = () => {
  useEffect(() => {
    const disableDevToolsShortcuts = (event) => {
      if (
        event.keyCode === 123 || // F12
        (event.ctrlKey && event.shiftKey && (event.keyCode === 73 || event.keyCode === 74)) || // Ctrl+Shift+I, Ctrl+Shift+J
        (event.ctrlKey && event.keyCode === 85) // Ctrl+U (View Source)
      ) {
        event.preventDefault();
        return false;
      }
    };

    const disableRightClick = (event) => {
      event.preventDefault();
      return false;
    };

    document.addEventListener("keydown", disableDevToolsShortcuts);
    document.addEventListener("contextmenu", disableRightClick);

    return () => {
      document.removeEventListener("keydown", disableDevToolsShortcuts);
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);

  return null;
};

export default DevToolsBlocker;
