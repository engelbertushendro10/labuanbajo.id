"use client";
import { useState, useEffect } from "react";

export default function useToast() {
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
  };

  const ToastComponent = () => {
    if (!toast) return null;
    
    const bgColor = toast.type === "success" ? "bg-success" : "bg-danger";
    
    return (
      <div className={`fixed top-4 right-4 z-[9999] ${bgColor} text-white px-6 py-3 rounded-lg shadow-xl animate-bounce-short flex items-center gap-3`}>
        <span className="material-symbols-outlined">
          {toast.type === "success" ? "check_circle" : "error"}
        </span>
        <span className="font-bold text-sm">{toast.message}</span>
      </div>
    );
  };

  return { showToast, ToastComponent };
}
