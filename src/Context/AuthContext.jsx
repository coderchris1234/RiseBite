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

      console.log("Login API response:", res.data)

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
       const dashboardData =  await getDashboard();
       console.log("Dashboard API response:", dashboardData)
        localStorage.setItem("user", JSON.stringify(res.data.data));
        setUser(res.data.data);
        toast.success("✅ Login successful")
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

  const getDashboard = async () =>{
    try {
      const token = localStorage.getItem('token');
      if(!token) return null;

      const res = await axios.get(`${API_URL}/api/risebite/dashboard`, {
         headers: {
          Authorization: `Bearer ${token}`,
         },
      });

      if(res.status === 200 && res.data.data){
        setUser(res.data.data);
        localStorage.setItem('user', JSON.stringify(res.data.data));
        return res.data.data;
      }


    } catch (error) {
      toast.error("Dashboard fetch failed:", error.response?.data || error.message );
      signout();
      return null
      
    }
  }

  // 🔹 SIGNOUT
  const signout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    toast.info("🚪 Logged out")
  };

useEffect(() => {
  const token = localStorage.getItem("token");
  const savedUser = localStorage.getItem("user");

  if (savedUser && savedUser !== "undefined") {
    try {
      setUser(JSON.parse(savedUser)); // immediately restore user
    } catch (err) {
      console.error("Failed to parse savedUser:", err);
      localStorage.removeItem("user"); // cleanup bad value
    }
  }

  if (token) {
    getDashboard(); // refresh from backend
  }
}, []);



  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     // optionally, decode token or call backend to fetch user info
  //     const savedUser = JSON.parse(localStorage.getItem("user"));
  //     if (savedUser) setUser(savedUser);
  //   }
  // }, []);

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
