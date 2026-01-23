"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isGithubLoading, setIsGithubLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // TODO: Implement email/password authentication with your backend
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Login attempted with:", formData);
      alert("Email/password login will be connected to backend soon!");
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsGoogleLoading(true);
    try {
      await signIn("google", { callbackUrl: "/dashboard" });
    } catch (error) {
      console.error("Google login error:", error);
    } finally {
      setIsGoogleLoading(false);
    }
  };

  const handleGithubLogin = async () => {
    setIsGithubLoading(true);
    try {
      await signIn("github", { callbackUrl: "/dashboard" });
    } catch (error) {
      console.error("GitHub login error:", error);
    } finally {
      setIsGithubLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black">
        {/* Gradient orbs */}
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[rgb(251,73,48)]/20 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[rgb(251,73,48)]/10 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-purple-900/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        {/* Logo */}
        <Link href="/" className="flex justify-center mb-8">
          <svg
            className="w-12 h-12"
            viewBox="0 0 56 47.6"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M 20.959 0 L 54.98 0 L 44.941 5.444 L 10.919 5.444 Z" />
            <path d="M 0.179 0.179 C 0.278 0.08 0.438 0.08 0.537 0.179 L 11.813 11.468 C 11.912 11.567 11.912 11.727 11.813 11.826 L 11.813 11.826 C 11.714 11.925 11.554 11.925 11.455 11.826 L 0.179 0.538 C 0.08 0.439 0.08 0.278 0.179 0.179 Z" transform="translate(44.314 4.955) rotate(2 6 6)" />
            <path d="M 0.179 0.179 C 0.278 0.08 0.438 0.08 0.537 0.179 L 11.813 11.468 C 11.912 11.567 11.912 11.727 11.813 11.826 L 11.813 11.826 C 11.714 11.925 11.554 11.925 11.455 11.826 L 0.179 0.538 C 0.08 0.439 0.08 0.278 0.179 0.179 Z" transform="translate(-0.305 30.64) rotate(2 6 6)" />
            <g transform="translate(12.349 4.714)">
              <path d="M 0.261 0.258 C 0.406 0.115 0.639 0.115 0.784 0.258 L 17.171 16.442 C 17.315 16.584 17.315 16.816 17.171 16.958 L 17.171 16.958 C 17.026 17.101 16.793 17.101 16.649 16.958 L 0.261 0.774 C 0.117 0.632 0.117 0.4 0.261 0.258 Z" transform="translate(-0.296 -0.009) rotate(1 8.75 8.5)" />
              <path d="M 13.996 0.899 L 30.227 0 L 29.819 7.475 L 0 9.127 Z" transform="translate(10.974 17.328) rotate(49 15 4.5)" />
            </g>
            <g transform="translate(4.854 6.212) rotate(179 19.75 18.5)">
              <path d="M 0.271 0.277 C 0.42 0.125 0.664 0.125 0.813 0.278 L 17.855 17.733 C 18.006 17.887 18.006 18.134 17.855 18.288 L 17.855 18.288 C 17.707 18.44 17.462 18.44 17.313 18.288 L 0.271 0.832 C 0.12 0.678 0.12 0.432 0.271 0.277 Z" transform="translate(-0.312 -0.016) rotate(1 9 9.25)" />
              <path d="M 13.764 0.352 L 30.013 0 L 29.853 7.414 L 0 8.062 Z" transform="translate(11.397 19.401) rotate(49 15 4)" />
            </g>
            <path d="M 10.78 42.156 L 50.242 42.156 L 40.2 47.6 L 0.88 47.6 Z" />
          </svg>
        </Link>

        <Card className="border-white/10 bg-black/60 backdrop-blur-xl shadow-2xl">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold text-white">
              Welcome back
            </CardTitle>
            <CardDescription className="text-white/60">
              Sign in to your Sentinel AI account
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            {/* Social Login Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={handleGoogleLogin}
                disabled={isGoogleLoading || isGithubLoading}
                className="bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white disabled:opacity-50"
              >
                {isGoogleLoading ? (
                  <svg className="animate-spin h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                )}
                Google
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleGithubLogin}
                disabled={isGoogleLoading || isGithubLoading}
                className="bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white disabled:opacity-50"
              >
                {isGithubLoading ? (
                  <svg className="animate-spin h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                )}
                GitHub
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full bg-white/10" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-black/60 px-2 text-white/40">
                  Or continue with email
                </span>
              </div>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white/80">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:border-[rgb(251,73,48)] focus-visible:ring-[rgb(251,73,48)]/20"
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p className="text-sm text-red-400">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-white/80">
                    Password
                  </Label>
                  <Link
                    href="/forgot-password"
                    className="text-sm text-[rgb(251,73,48)] hover:text-[rgb(231,53,28)] transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:border-[rgb(251,73,48)] focus-visible:ring-[rgb(251,73,48)]/20"
                  aria-invalid={!!errors.password}
                />
                {errors.password && (
                  <p className="text-sm text-red-400">{errors.password}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[rgb(251,73,48)] hover:bg-[rgb(231,53,28)] text-white font-medium"
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Signing in...
                  </>
                ) : (
                  "Sign in"
                )}
              </Button>
            </form>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4">
            <p className="text-center text-sm text-white/60">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="text-[rgb(251,73,48)] hover:text-[rgb(231,53,28)] font-medium transition-colors"
              >
                Sign up
              </Link>
            </p>
            <p className="text-center text-xs text-white/40">
              By signing in, you agree to our{" "}
              <Link href="/terms" className="text-white/60 hover:text-white underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-white/60 hover:text-white underline">
                Privacy Policy
              </Link>
            </p>
          </CardFooter>
        </Card>

        {/* Back to home link */}
        <p className="text-center mt-6">
          <Link
            href="/"
            className="text-sm text-white/40 hover:text-white/60 transition-colors inline-flex items-center gap-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to home
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
