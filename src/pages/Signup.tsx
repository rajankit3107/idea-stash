import { useRef } from "react";
import { Button } from "../components/ui/Button";
import { InputBox } from "../components/ui/InputBox";
import { BACKEND_URl } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signup() {
  const usernameref = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  async function Signup() {
    const username = usernameref.current?.value.toString();
    const password = passwordRef.current?.value.toString();

    await axios.post(`${BACKEND_URl}/api/v1/signup`, {
      username,
      password,
    });
    navigate("/signin");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center p-6">
      <div className="w-full max-w-sm">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3">
            Create Account
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Join us and start organizing your ideas
          </p>
        </div>

        {/* Signup Form */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8">
          <div className="space-y-8">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Username
              </label>
              <InputBox placeholder="username" ref={usernameref} />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <InputBox placeholder="password" ref={passwordRef} />
            </div>

            <div className="pt-4">
              <Button
                variant="primary"
                text="Create Account"
                size="lg"
                fullWidth
                onClick={Signup}
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            By creating an account, you agree to our{" "}
            <a
              href="#"
              className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
            >
              Terms
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
