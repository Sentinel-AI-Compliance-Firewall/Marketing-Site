"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthCallback() {
  const router = useRouter();
  const [status, setStatus] = useState<"loading" | "error" | "no-backend">("loading");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    async function exchangeToken() {
      try {
        const res = await fetch("/api/dashboard-login", {
          method: "POST",
        });

        if (res.ok) {
          const data = await res.json();
          // Store session token and user data for dashboard
          localStorage.setItem("dashboard_session_token", data.session_token);
          if (data.user) {
            localStorage.setItem("dashboard_user", JSON.stringify(data.user));
          }
          // Redirect to dashboard
          window.location.href = `${process.env.NEXT_PUBLIC_DASHBOARD_URL || "http://localhost:8000"}/dashboard?token=${data.session_token}`;
        } else if (res.status === 502) {
          // Backend not running
          setStatus("no-backend");
        } else {
          const errData = await res.json();
          setStatus("error");
          setErrorMsg(errData.error || "Login failed");
        }
      } catch {
        setStatus("no-backend");
      }
    }

    exchangeToken();
  }, [router]);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-black"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      <div className="text-center max-w-md mx-auto p-8">
        {status === "loading" && (
          <>
            <div className="w-12 h-12 mx-auto mb-6 border-2 border-[rgb(251,73,48)] border-t-transparent rounded-full animate-spin" />
            <h2
              className="text-2xl font-bold text-white uppercase tracking-tight mb-2"
              style={{ fontFamily: '"Anton", sans-serif' }}
            >
              Connecting to Dashboard
            </h2>
            <p className="text-white/60 text-sm">
              Authenticating with your account...
            </p>
          </>
        )}

        {status === "no-backend" && (
          <>
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-yellow-500/20 flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgb(234,179,8)" strokeWidth="2">
                <path d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2
              className="text-2xl font-bold text-white uppercase tracking-tight mb-2"
              style={{ fontFamily: '"Anton", sans-serif' }}
            >
              Dashboard Offline
            </h2>
            <p className="text-white/60 text-sm mb-6">
              The dashboard backend is not running. Make sure the backend server is running on localhost:8000.
            </p>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => {
                  setStatus("loading");
                  window.location.reload();
                }}
                className="w-full py-3 bg-[rgb(251,73,48)] text-white font-medium uppercase tracking-wider hover:bg-[rgb(251,73,48)]/90 transition-colors"
              >
                Retry Connection
              </button>
              <button
                onClick={() => router.push("/")}
                className="w-full py-3 bg-white/10 text-white font-medium uppercase tracking-wider hover:bg-white/20 transition-colors"
              >
                Back to Home
              </button>
            </div>
          </>
        )}

        {status === "error" && (
          <>
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-500/20 flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgb(239,68,68)" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </div>
            <h2
              className="text-2xl font-bold text-white uppercase tracking-tight mb-2"
              style={{ fontFamily: '"Anton", sans-serif' }}
            >
              Login Failed
            </h2>
            <p className="text-white/60 text-sm mb-6">
              {errorMsg}
            </p>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => router.push("/login")}
                className="w-full py-3 bg-[rgb(251,73,48)] text-white font-medium uppercase tracking-wider hover:bg-[rgb(251,73,48)]/90 transition-colors"
              >
                Try Again
              </button>
              <button
                onClick={() => router.push("/")}
                className="w-full py-3 bg-white/10 text-white font-medium uppercase tracking-wider hover:bg-white/20 transition-colors"
              >
                Back to Home
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
