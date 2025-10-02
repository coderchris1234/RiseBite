// src/context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // test API endpoint
  const API_URL = "https://superinsistent-ying-awhirl.ngrok-free.dev";

  // 🔹 SIGNUP
  const signup = async (formData) => {
    try {
      setLoading(true);
      setError(null);

      const res = await axios.post(
        `${API_URL}/api/risebite/register`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (res.data.success) {
        localStorage.setItem("signupEmail", formData.email);
        // setUser({ email: formData.email });
        // save token in localStorage for later requests
        // localStorage.setItem("token", res.data.token);
        // setUser(res.data.user);

        return true;
      }
    } catch (err) {
      const message = err.response?.data?.message || "Signup failed";
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 SIGNIN
  const signin = async (formData) => {
    try {
      setLoading(true);
      setError(null);

      const res = await axios.post(
        `${API_URL}/api/risebite/login
`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (res.data.success === true || res.data.success === "true") {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setUser(res.data.user);

        return true;
      }
    } catch (err) {
      setError(err.response?.data?.message || "Invalid email or password");
      console.error("Signin failed:", err.response?.data || err.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  // 🔹 SIGNOUT
  const signout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // optionally, decode token or call backend to fetch user info
      const savedUser = JSON.parse(localStorage.getItem("user"));
      if (savedUser) setUser(savedUser);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, loading, error, signup, signin, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
