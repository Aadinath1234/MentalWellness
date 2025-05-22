

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import wave from "../../assets/wave Gif.gif";
import Yoga from "../../assets/meditation.jpg";
// import Exercise from '../../assets/exercise.jpg';
import Games from "../../assets/games.jpg";
import Books from "../../assets/books.avif";
import Diary from "../../assets/diary.jpg";
import Video from "../../assets/video.jpeg";
import Navbar2 from "../../components/Navbar/Navbar.jsx";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice.jsx";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { API_END_POINT } from "../../utils/constant";
import { IoIosArrowDropdown } from "react-icons/io";
import Header from "../Header.jsx";
import * as motion from "motion/react-client";

const box = {
  borderRadius: 5,
};

// Service data array containing the details of each service
const ServiceData = [
  {
    title: "Breathing and Meditation",
    content: "Breathing technique",
    description:
      "Practicing mindful breathing and meditation helps reduce stress, enhance focus, and bring a sense of calm to daily life.",
    img: Yoga,
    aosDelay: "300",
    link: "/breathing",
  },

  {
    title: "Games for Fun",
    content: "Play games to release your stress",
    description:
      "Engaging in short, fun games offers a quick mental break and boosts creativity.",
    img: Games,
    aosDelay: "700",
    link: "https://poki.com/",
  },
  {
    title: "Books and Thoughts",
    content: "Read books to gain knowledge",
    description:
      "Reading expands perspectives and inspires thoughtful reflection.",
    img: Books,
    aosDelay: "700",
    link: "/books",
  },
  {
    title: "Diary",
    content: "Diary for mental health",
    description:
      "Writing in a diary provides a private space to express emotions and reflect.",
    img: Diary,
    aosDelay: "700",
    link: "https://repo-frontend-0ixl.onrender.com/",
  },
  {
    title: "Videos for Relief",
    content: "Watch videos to release stress",
    description: "Discover stress-relief techniques to bring calm and balance.",

    img: "data:image/jpeg;base64,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",
    aosDelay: "700",
    link: "https://youtube.com/playlist?list=PLWlTX25IDqIz4Ad4_ZvTQ_rM07Lkr7g-4&si=tEy9dzygmcYuXWM0",
  },
];

// HeroCard component to render the service cards
const HeroCard = ({ onCardClick }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Logout handler function
  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`);
      if (res.data.success) {
        toast.success(res.data.message);
        localStorage.removeItem('user')
      }
      dispatch(setUser(null)); // Reset user state in Redux
      navigate("/"); // Navigate to home page
    } catch (error) {
      toast.error("An error occurred during logout");
      console.log(error);
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
    <section className="bg-black relative">
      {/* Navbar and Header components */}
      <div className="fixed top-0 left-0 w-full ">
        {user && (
          <div className="absolute flex w-[100vw] items-center justify-between px-6 bg-gradient-to-b from-black">
            <div className="flex items-center">
              <IoIosArrowDropdown size="24px" color="white" />
              <h1 className="text-lg font-medium text-white">
                {user.fullName}
              </h1>
              <div className="ml-4">
                <button
                  onClick={logoutHandler}
                  className="bg-red-800 text-white px-4 py-2"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Main content section */}

      <div className="container py-16  px-4 sm:px-0 pt-[120px]">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {ServiceData.map((data, index) => (
            <Link
              key={index}
              to={data.link}
              onClick={onCardClick}
              data-aos-delay={data.aosDelay}
              className="cursor-pointer min-h-[300px] flex flex-col justify-center items-center rounded-4xl gap-4 bg-blue-100 opacity-50 text-black text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto"
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                style={box}
              >
                <img
                  src={data.img}
                  alt={data.title}
                  className="object-cover rounded-md w-full h-[200px] mb-4"
                />
              </motion.div>
              <h1 className="text-2xl font-semibold">{data.title}</h1>
              <p>{data.content}</p>
              <p className="text-sm">{data.description}</p>
            </Link>
          ))}
        </div>

        {/* Wave Effect */}
        <img
          src={wave}
          alt="Wave effect"
          className="h-[200px] w-full object-cover mix-blend-screen -translate-y-24 relative z-0"
        />
      </div>
    </section>
  );
};

export default HeroCard;
