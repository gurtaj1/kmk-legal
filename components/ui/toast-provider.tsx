"use client";

import { Toaster } from "sonner";

export function ToastProvider() {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        style: {
          background: "white",
          color: "#333",
          border: "1px solid #e2e8f0",
        },
        className: "font-sans",
      }}
    />
  );
}
