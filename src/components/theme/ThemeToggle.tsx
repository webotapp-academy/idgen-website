"use client";

import React, { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot() {
  return typeof window !== "undefined";
}

function getServerSnapshot() {
  return false;
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isMounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (!isMounted) {
    return (
      <div className={`h-9 w-9 rounded-full border border-surface-border bg-surface ${className}`} />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`flex h-9 w-9 items-center justify-center rounded-full border border-surface-border bg-surface text-foreground transition hover:border-accent hover:text-accent hover:shadow-sm ${className}`}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4 text-slate-700 transition-transform hover:rotate-12" />
      ) : (
        <Sun className="h-4 w-4 text-amber-400 transition-transform hover:rotate-45" />
      )}
    </button>
  );
}
