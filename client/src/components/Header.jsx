import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { API_END_POINT } from "../utils/constant";

const Header = () => {
  // const user = useSelector((store) => store.app.user);
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(user);

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`);
      if (res.data.success) {
        toast.success(res.data.message);
      }
      dispatch(setUser(null)); // Reset user state in Redux
      navigate("/");
    } catch (error) {
      toast.error("An error occurred during logout");
      console.log(error);
    }
  };
  const storedUser = localStorage.getItem("user");

  if (storedUser) {
    const user = JSON.parse(storedUser); // Parse JSON string to object
    console.log(user.fullName); // 👉 Access fullName field
  }
  return (
    <div className="absolute flex w-[100vw] items-center justify-between px-6 bg-gradient-to-b from-black">
      {user && (
        <div className="flex items-center">
          <IoIosArrowDropdown size="24px" color="white" />
          <h1 className="text-lg font-medium text-white">{user.fullName}</h1>
          <div className="ml-4">
            <button
              onClick={logoutHandler}
              className="bg-red-800 text-white px-4 py-2"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
