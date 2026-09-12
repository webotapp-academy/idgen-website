"use client";

import React, { useState } from "react";
import { LogOut, Loader2 } from "lucide-react";

interface AdminLogoutButtonProps {
  variant?: "compact" | "full";
  className?: string;
}

export function AdminLogoutButton({
  variant = "compact",
  className = "",
}: AdminLogoutButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleLogout = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (loading) return;

    try {
      setLoading(true);
      await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "logout" }),
      });
    } catch (err) {
      console.error("Logout error:", err);
    } finally {
      // Clear cookie client-side as fallback and hard redirect
      document.cookie =
        "idgen_admin_session=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      window.location.href = "/admin/login/";
    }
  };

  if (variant === "full") {
    return (
      <button
        type="button"
        onClick={handleLogout}
        disabled={loading}
        className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-rose-300 bg-rose-950/40 border border-rose-900/50 hover:bg-rose-900/50 hover:text-white transition shadow-sm disabled:opacity-50 ${className}`}
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin text-rose-400" />
        ) : (
          <LogOut className="h-4 w-4 text-rose-400" />
        )}
        <span>{loading ? "Signing Out..." : "Sign Out / Logout"}</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      disabled={loading}
      title="Sign Out / Logout"
      aria-label="Sign out of admin"
      className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-rose-400 hover:text-white hover:bg-rose-950/60 border border-transparent hover:border-rose-900/50 transition disabled:opacity-50 ${className}`}
    >
      {loading ? (
        <Loader2 className="h-3.5 w-3.5 animate-spin" />
      ) : (
        <LogOut className="h-3.5 w-3.5" />
      )}
      <span>{loading ? "..." : "Logout"}</span>
    </button>
  );
}
