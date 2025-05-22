import React from "react";
import { Link } from "react-router-dom";
import wave from "../../assets/videofront.mp4";
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
    link: "/Bubble",
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

    img: "https://images.upsplash.com/photo-1506748686214-e9df14d4d9d0",
    aosDelay: "700",
    link: "https://youtube.com/playlist?list=PLWlTX25IDqIz4Ad4_ZvTQ_rM07Lkr7g-4&si=tEy9dzygmcYuXWM0",
  },
];

// HeroCard component to render the service cards
const HeroCard = ({ onCardClick }) => {
  const user = useSelector((store) => store.app.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Logout handler function
  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`);
      if (res.data.success) {
        toast.success(res.data.message);
      }
      dispatch(setUser(null)); // Reset user state in Redux
      navigate("/"); // Navigate to home page
    } catch (error) {
      toast.error("An error occurred during logout");
      console.log(error);
    }
  };

  return (
    <section className="bg-blue-500 relative">
      {/* Navbar and Header components */}
      <div className="fixed top-0 left-0 w-full ">
        {user && (
          <div className="absolute flex w-[100vw] items-center justify-between px-6 bg-gradient-to-b from-black">
            <div className="flex justify-center items-center">
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

      <div className="container  px-4 sm:px-0 pt-[120px]">
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          style={box}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {ServiceData.map((data, index) => (
              <Link
                key={index}
                to={data.link}
                onClick={onCardClick}
                data-aos-delay={data.aosDelay}
                className="cursor-pointer min-h-[300px] flex flex-col justify-center items-center rounded-xl gap-4 bg-sky-900/70 backdrop-blur-sm text-white text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto"
              >
                <img
                  src={data.img}
                  alt={data.title}
                  className="object-cover rounded-md w-full h-[200px] mb-4"
                />

                <h1 className="text-2xl font-semibold">{data.title}</h1>
                <p>{data.content}</p>
                <p className="text-sm">{data.description}</p>
              </Link>
            ))}
          </div>
        </motion.div>

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
