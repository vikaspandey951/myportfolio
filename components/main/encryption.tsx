"use client";

import { motion } from "framer-motion";

import { slideInFromTop } from "@/lib/motion";

export const Encryption = () => {
  return (
    <section
      id="experience"
      className="relative flex min-h-screen h-full w-full flex-row items-center justify-center overflow-hidden px-6"
    >
      <div className="absolute top-14 z-[5] w-auto h-auto">
        <motion.div
          variants={slideInFromTop}
          className="text-center text-[40px] font-medium text-gray-200"
        >
          Experience &{" "}
          <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            leadership
          </span>
        </motion.div>
      </div>

      <div className="z-20 mt-28 w-full max-w-4xl space-y-6">
        <motion.div
          variants={slideInFromTop}
          className="rounded-2xl border border-[#7042F88B] bg-[#030014]/75 p-7 shadow-xl shadow-[#2A0E61]/40 backdrop-blur-sm"
        >
          <p className="text-center text-lg font-semibold text-white">
            Machine Learning Intern · DrsMinds TruSignal Pvt Ltd
          </p>
          <p className="mt-1 text-center text-sm text-[#b49bff]">
            Nov 2025 — Mar 2026
          </p>
          <ul className="mt-6 space-y-3 text-gray-200">
            <li>Engineered automated AI workflows for Hospital Management Systems.</li>
            <li>Integrated AI models with backend services using Python and FastAPI.</li>
            <li>Built OCR and NLP pipelines for medical-report text extraction.</li>
            <li>Supported model validation, testing, and deployment of healthcare AI applications.</li>
          </ul>
        </motion.div>

        <motion.div
          variants={slideInFromTop}
          className="rounded-2xl border border-[#7042F88B] bg-[#030014]/75 p-7 shadow-xl shadow-[#2A0E61]/40 backdrop-blur-sm"
        >
          <p className="text-center text-lg font-semibold text-white">
            Leadership
          </p>
          <ul className="mt-4 space-y-3 text-gray-200">
            <li>Treasurer — PACS Central Committee (budget planning, expense tracking, event coordination).</li>
            <li>Convener — Sports Committee (event execution, scheduling, and volunteer coordination).</li>
          </ul>
          <div className="mt-6 text-center text-sm text-gray-400">
            B.Tech in Artificial Intelligence and Machine Learning · Completed June 2026
          </div>
        </motion.div>
      </div>

      <div className="absolute flex w-full items-start justify-center opacity-40">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
        >
          <source src="/videos/encryption-bg.webm" type="video/webm" />
        </video>
      </div>
    </section>
  );
};
