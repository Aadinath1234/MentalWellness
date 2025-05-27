import React from "react";
import * as motion from "motion/react-client";

const box = {
  borderRadius: 5,
};

function Card() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-blue-500">
      {/* Card 1 */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        style={box}
      >
        <div className="bg-black text-white  font-serif  rounded-xl shadow-lg overflow-hidden">
          <img
            
            src="https://t3.ftcdn.net/jpg/13/37/34/90/240_F_1337349048_AQjGQU7UXMzD6jv3N8QTsRrOqbFdVZAZ.jpg"
            alt="Mental Health"
            className="w-full max-lg:h-90 lg:h-96  object-cover"
          />

          <div className="p-4 skeleton bg-black ">
            <p>
              Mental health is a crucial aspect of our overall well-being,
              influencing how we think, feel, and act. Understanding emotional
              balance, stress, and self-care helps build resilience.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Card 2 */}

      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        style={box}
      >
        <div className="bg-black text-white  font-serif  rounded-xl shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb"
            alt="Support"
            className="w-full h-96 object-cover"
          />
          <div className="p-4 skeleton bg-black">
            <p>
              Open conversations reduce stigma and encourage people to seek the
              help they need. Mental health support is key to thriving in life.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        style={box}
      >
        <div className="bg-black md:w-96 md:ml-40 lg:ml-0 lg:w-full text-white  font-serif rounded-xl shadow-lg overflow-hidden">
          <img
            
            src="https://t4.ftcdn.net/jpg/12/47/80/11/240_F_1247801105_0nF04SXP5pBPmzCaQ7a3GIYUs8LMwpIF.jpg"
            alt="Community"
            className="w-full h-96 object-cover"
          />
          <div className="p-4 skeleton bg-black">
            <p>
              Community support and awareness can create safe spaces for
              individuals to talk about their struggles and feel seen and heard.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Card;
