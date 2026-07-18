"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">AI/ML Engineer Portfolio</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Vikas Pandey — building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              intelligent AI
            </span>{" "}
            systems.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          AI/ML Engineering student focused on building practical AI products
          with FastAPI, NLP, LLM workflows, RAG pipelines, and automation for
          real-world use cases.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(0.9)}
          className="flex flex-wrap gap-4"
        >
          <motion.a
            href="#experience"
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg w-[200px]"
          >
            Explore my work
          </motion.a>
          <motion.a
            href="/Vikas_Pandey_Resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
            className="py-2 text-center text-white cursor-pointer rounded-lg w-[200px] border border-[#7042f88b] hover:border-[#a68bff] transition"
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
