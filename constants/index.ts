import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { MdEmail, MdPhone } from "react-icons/md";

export const SKILL_DATA = [
  { skill_name: "Python", image: "python.svg", width: 72, height: 72 },
  { skill_name: "C++", image: "cplusplus.svg", width: 72, height: 72 },
  { skill_name: "SQL", image: "sqlite.svg", width: 72, height: 72 },
  { skill_name: "Git", image: "git.svg", width: 72, height: 72 },
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/vikaspandey951",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/vikaspandey-ai",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/vikas_pandey1202/",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com/vikas.pandey.846717/",
  },
  {
    name: "X",
    icon: FaXTwitter,
    link: "https://x.com/Vikas__tweets_",
  },
  {
    name: "Email",
    icon: MdEmail,
    link: "mailto:vikaspandey95180@gmail.com",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "Machine Learning",
    image: "scikitlearn.svg",
    width: 72,
    height: 72,
  },
  {
    skill_name: "Deep Learning",
    image: "pytorch.svg",
    width: 72,
    height: 72,
  },
  { skill_name: "NLP", image: "huggingface.svg", width: 72, height: 72 },
  {
    skill_name: "Computer Vision",
    image: "opencv.svg",
    width: 72,
    height: 72,
  },
] as const;

export const BACKEND_SKILL = [
  { skill_name: "FastAPI", image: "fastapi.svg", width: 72, height: 72 },
  { skill_name: "Django", image: "django.svg", width: 72, height: 72 },
  { skill_name: "Flask", image: "flask.svg", width: 72, height: 72 },
  { skill_name: "REST APIs", image: "openapi.svg", width: 72, height: 72 },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "TensorFlow",
    image: "tensorflow.svg",
    width: 72,
    height: 72,
  },
  { skill_name: "PyTorch", image: "pytorch.svg", width: 72, height: 72 },
  {
    skill_name: "Scikit-learn",
    image: "scikitlearn.svg",
    width: 72,
    height: 72,
  },
  {
    skill_name: "Hugging Face",
    image: "huggingface.svg",
    width: 72,
    height: 72,
  },
] as const;

export const OTHER_SKILL = [
  { skill_name: "MongoDB", image: "mongodb.svg", width: 72, height: 72 },
  { skill_name: "MySQL", image: "mysql.svg", width: 72, height: 72 },
  { skill_name: "Jupyter", image: "jupyter.svg", width: 72, height: 72 },
] as const;

export const PROJECTS = [
  {
    title: "DocMind AI",
    description:
      "Production-ready RAG backend with document ingestion (PDF, DOCX, TXT), extraction pipelines, rule-based classification, metadata framework, queue and worker architecture, and modular providers ready for Qdrant and LLM integration.",
    image: "/projects/doc-mind-ai.png",
    link: "https://github.com/vikaspandey951",
  },
  {
    title: "AI Health Assistant",
    description:
      "Voice-based multilingual health assistant with speech-to-text, disease prediction, AI-generated responses, and voice output using Flask, React, MongoDB, Vosk, gTTS, and Scikit-learn.",
    image: "/projects/doctor-ai.png",
    link: "https://github.com/vikaspandey951",
  },
  {
    title: "NLP Document Summarizer",
    description:
      "Document summarization system for PDF, DOCX, TXT, OCR, and screen-capture inputs, powered by Hugging Face Transformers, DistilBART, and Tesseract OCR.",
    image: "/projects/nlp-intelligent-bot.png",
    link: "https://github.com/vikaspandey951",
  },
  {
    title: "Django To-Do Application",
    description:
      "A responsive Django task-management application with user authentication, full CRUD operations, and an intuitive interface for organizing daily tasks.",
    image: "/projects/django-todo.png",
    link: "https://github.com/vikaspandey951",
  },
  {
    title: "Car Rental Management System",
    description:
      "Built in C++ with features for vehicle inventory, customer records, booking flow, and rental management operations.",
    image: "/projects/car-rental-system.png",
    link: "https://github.com/vikaspandey951",
  },
  {
    title: "Movie Ticket Booking System",
    description:
      "Built in C with core booking workflows, seat allocation logic, and ticket-management operations.",
    image: "/projects/movie-ticket-booking.png",
    link: "https://github.com/vikaspandey951",
  },
] as const;

export const CERTIFICATIONS = [
  {
    title: "Django & Flask",
    description: "Online course completion certificate.",
    file: "/certificates/django.pdf",
  },
  {
    title: "Generative AI",
    description: "Online course completion certificate.",
    file: "/certificates/gen-ai.pdf",
  },
  {
    title: "Introduction to Internet of Things",
    description: "Online course completion certificate.",
    file: "/certificates/introduction-to-internet-of-things.pdf",
  },
  {
    title: "Software Testing",
    description: "Online course completion certificate.",
    file: "/certificates/software-testing.pdf",
  },
  {
    title: "Cloud Computing",
    description: "Online course completion certificate.",
    file: "/certificates/cloud-computing.pdf",
  },
  {
    title: "Introduction to Machine Learning",
    description: "Online course completion certificate.",
    file: "/certificates/introduction-to-machine-learning.pdf",
  },
  {
    title: "Data Science",
    description: "Online course completion certificate.",
    file: "/certificates/data-science-certificate.pdf",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Connect",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/vikaspandey951",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/vikaspandey-ai",
      },
      {
        name: "Instagram",
        icon: FaInstagram,
        link: "https://www.instagram.com/vikas_pandey1202/",
      },
      {
        name: "Facebook",
        icon: FaFacebook,
        link: "https://www.facebook.com/vikas.pandey.846717/",
      },
      {
        name: "X",
        icon: FaXTwitter,
        link: "https://x.com/Vikas__tweets_",
      },
    ],
  },
  {
    title: "Contact",
    data: [
      {
        name: "vikaspandey95180@gmail.com",
        icon: MdEmail,
        link: "mailto:vikaspandey95180@gmail.com",
      },
      {
        name: "+91 95180 52421",
        icon: MdPhone,
        link: "tel:+919518052421",
      },
    ],
  },
  {
    title: "Location",
    data: [
      { name: "Uttar Pradesh, India", icon: null, link: "#about-me" },
      {
        name: "Available for AI/ML roles",
        icon: null,
        link: "mailto:vikaspandey95180@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  { title: "About", link: "#about-me" },
  { title: "Skills", link: "#skills" },
  { title: "Experience", link: "#experience" },
  { title: "Certifications", link: "#certifications" },
  { title: "Projects", link: "#projects" },
] as const;

export const LINKS = {
  github: "https://github.com/vikaspandey951",
};
