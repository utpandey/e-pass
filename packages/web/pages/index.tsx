import * as React from "react";
import Link from "next/link";
import { Text } from "@epass/components";
import { motion } from "framer-motion";

const springConfig = {
  type: "spring",
  stiffness: 200,
  damping: 13,
};

const containerConfig = {
  staggerChildren: 0.1,
  translateX: springConfig,
  opacity: "linear",
};

const containerVariants = {
  initial: {
    translateX: -1000,
    opacity: 0,
  },
  animate: {
    translateX: 0,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      ...containerConfig,
    },
  },
  exit: {
    translateX: 1000,
    opacity: 0,
    transition: {
      when: "afterChildren",
      ...containerConfig,
    },
  },
};

const itemTransition = {
  translateY: springConfig,
  opacity: "linear",
};

const itemVariants = {
  initial: {
    translateY: -50,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    translateY: 0,
    transition: itemTransition,
  },
  exit: {
    translateY: -10,
    opacity: 0,
    transition: itemTransition,
  },
};

const Home = () => {
  return (
    <div className="landing waves align-middle">
      <motion.div
        className="flex flex-col items-center pt-8 sm:pt-14 md:pt-36 xl:pt-40"
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl px-1 sm:px-0 sm:text-5xl md:text-6xl text-center text-palette-150"
        >
          Please select one from below
        </motion.h1>
        <div className="pt-8 sm:pt-16 md:pt-28 xl:pt-20 flex flex-col md:flex-row">
          <div className="bg-palette-200 transform transition duration-500 hover:scale-90 md:w-1/2 text-center align-middle px-2 py-10 sm:py-16 sm:px-6 mx-4 my-6 lg:py-16 lg:px-8 lg:mx-4 md:my-0 rounded-3xl shadow-2xl">
            <Link href="/login">
              <a
                href=""
                className="text-palette-50 text-3xl sm:text-4xl lg:text-5xl xl:leading-normal font-medium"
              >
                E-Pass web app
              </a>
            </Link>
          </div>
          <div className="bg-palette-200 transform transition duration-500 hover:scale-90 md:w-1/2 text-center align-middle px-2 py-10 sm:py-16 sm:px-6 mx-4 my-6 lg:py-16 lg:px-8 lg:mx-4 md:my-0 rounded-3xl shadow-2xl">
            <h1 className="text-palette-50 text-3xl sm:text-4xl lg:text-5xl xl:leading-normal font-medium">
              React-native e-pass app
            </h1>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// export const getServerSideProps = async () => {
//   const response = await fetch("http://localhost:3000/api/article");
//   const data = await response.json();

//   if (!data) return { props: {} };

//   return {
//     props: {
//       article: data,
//     },
//   };
// };

export default Home;
