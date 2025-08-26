import { useRef } from "react";
import { Button } from "../components/ui/Button";
import { InputBox } from "../components/ui/InputBox";
import axios from "axios";
import { BACKEND_URl } from "../config";
import { useNavigate } from "react-router-dom";

export function Signin() {
  const usernameref = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  async function Singin() {
    const username = usernameref.current?.value.toString();
    const password = passwordRef.current?.value.toString();

    const respose = await axios.post(`${BACKEND_URl}/api/v1/signin`, {
      username,
      password,
    });
    const jwt = respose.data.token;
    localStorage.setItem("token", jwt);
    //redirect the user to the dashboard
    navigate("/dashboard");
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
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3">
            Welcome Back
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Sign in to continue organizing your ideas
          </p>
        </div>

        {/* Signin Form */}
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
                text="Sign In"
                size="lg"
                fullWidth
                onClick={Singin}
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
