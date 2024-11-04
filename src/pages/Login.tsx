import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Plane } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would validate credentials here
    toast.success("Successfully logged in!");
    navigate("/calendar");
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key && e.key.toLowerCase() === "enter") {
      const form = document.querySelector("form");
      if (form) {
        form.requestSubmit();
      }
    }
  };

  // Add event listener on mount and remove it on unmount
  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-secondary flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md animate-fade-up">
        <div className="flex items-center justify-center mb-8">
          <Plane className="h-12 w-12 text-secondary" />
        </div>
        <h1 className="text-2xl font-bold text-center mb-8 text-primary">Welcome Back</h1>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
              required
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full"
              required
            />
          </div>
          <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90">
            Sign In
          </Button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-secondary hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;