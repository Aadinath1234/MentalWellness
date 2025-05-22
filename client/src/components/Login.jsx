import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setLoading } from "../redux/userSlice.jsx";

// Define or import API_END_POINT
const API_END_POINT = 'https://mentalwellness-backend.onrender.com/api/v1/user'; // Make sure to replace this with your actual API endpoint

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoading = useSelector((store) => store.app.isLoading);

  const loginHandler = async () => {
    setIsLogin(true);
    console.log("Login Clicked !!");
  };

  const getInputData = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));

    const user = isLogin ? { email, password } : { fullName, email, password };
    const apiUrl = isLogin
      ? `${API_END_POINT}/login`
      : `${API_END_POINT}/register`;

    try {
      const res = await axios.post(apiUrl, user, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      if (res && res.data) {
        toast.success(res.data.message);
        if (isLogin) {
          dispatch(setUser(res.data.user));
          console.log(res.data.user);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          navigate("/HeroCard");
        } else {
          setIsLogin(true);
        }
      } else {
        throw new Error("Unexpected response format");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
      console.log(error);
    } finally {
      dispatch(setLoading(false));
      setFullName("");
      setEmail("");
      setPassword("");
    }
  };

  
    useEffect(() => {
      const storedUser = localStorage.getItem("user");
  
      if (storedUser) {
        navigate("/HeroCard"); // Redirect to dashboard or home
      } else {
        navigate("/login"); // Redirect to login if not authenticated
      }
    }, [navigate]);
  

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-[100vw] h-[100vh]"
          src="https://cdn.pixabay.com/photo/2022/07/15/18/27/mental-health-7323725_640.png"
          alt="background"
        />
      </div>
      <form
        onSubmit={getInputData}
        className="flex flex-col w-3/12 max-md:w-full  p-12 my-36 max-lg:justify-center max-lg:items-center left-0 right-0 mx-auto items-center justify-center   absolute rounded-md  opacity-90"
      >
        <fieldset className="fieldset w-xs max-md:mb-20 bg-black border border-base-300 p-4 rounded-box">
          {/* <legend className="fieldset-legend text-3xl text-white mb-5 font-bold">
            {isLogin ? 'Login' : 'Signup'}
          </legend> */}

          {!isLogin && (
            <div>
              <label className="fieldset-label text-white">Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full Name"
                className="input mb-2"
              />
            </div>
          )}

          <div>
            <label className="fieldset-label text-white">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="input mb-2"
            />
          </div>

          <div>
            <label className="fieldset-label text-white">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="input mb-4"
            />
          </div>

          <button onClick={()=>setIsLogin(!isLogin)} type="submit" className="btn btn-neutral mt-4">
            {isLoading ? "Loading..." : isLogin ? "Login" : "Signup"}
          </button>

          <p className="text-white mt-2">
            {isLogin ? "New to M'wellness?" : "Already have an account?"}
            <span
              onClick={loginHandler}
              className="ml-1 text-blue-900 font-medium cursor-pointer"
            >
              {isLogin ? "Signup" : "Login"}
            </span>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
