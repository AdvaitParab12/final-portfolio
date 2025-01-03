"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Globe } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaBoxOpen,
  FaGitAlt,
  FaFigma,
  FaPhoneAlt,
} from "react-icons/fa";
import { RiNextjsFill, RiNotionFill } from "react-icons/ri";
import { IoMdMailUnread } from "react-icons/io";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandVite } from "react-icons/tb";
import { SiShadcnui } from "react-icons/si";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Button } from "@/components/ui/button";

const skills = {
  frontend: [
    { name: "ReactJs", icon: FaReact },
    { name: "JavaScript", icon: IoLogoJavascript },
    { name: "HTML/CSS", icon: Globe },
    { name: "Tailwind CSS", icon: RiTailwindCssFill },
    { name: "Shadcn/ui", icon: SiShadcnui },

    { name: "TypeScript", icon: BiLogoTypescript },
  ],
  backend: [
    { name: "Node.js", icon: FaNodeJs },
    { name: "NextJs", icon: RiNextjsFill },
  ],
  tools: [
    { name: "Git", icon: FaGitAlt },
    { name: "Figma", icon: FaFigma },
    { name: "Notion", icon: RiNotionFill },
    { name: "Github", icon: FiGithub },
    { name: "Parcel", icon: FaBoxOpen },
    { name: "Vite", icon: TbBrandVite },
  ],
};

const projects = [
  {
    title: "RPSLS-Showdown",
    description:
      "Rock, Paper, Scissors, Lizard, Spock Overview: Rock, Paper, Scissors, Lizard, Spock is an extended version of the classic game that adds more complexity and options. This game introduces two additional moves—Lizard and Spock—allowing for a greater variety of outcomes and strategies.",
    technologies: ["HTML", "CSS", "JavaScript", "TailwindCSS", "Parcel"],
    demoLink: "https://rpsls-showdown.pages.dev/",
    githubLink: "https://github.com/AdvaitParab12/RPSLS-Showdown/",
  },
  {
    title: "Auto-Persona",
    description:
      "This project is an interactive car configurator built with React and Next.js, allowing users to customize and preview various car features including exterior colors, wheels, interior colors, and seat designs.",
    technologies: ["React.js", "NextJs", "TailwindCSS", "DaisyUI", "CSS"],
    demoLink: "https://auto-persona.vercel.app/",
    githubLink: "https://github.com/AdvaitParab12/Auto-Persona",
  },
  {
    title: "Prioritask",
    description:
      "Prioritask is a simple task management web application built with vanilla JavaScript, designed to help users add, prioritize, and toggle the completion status of tasks. The app also supports clearing all tasks at once and stores tasks in the browser's local storage to persist data between sessions.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "TailwindCSS",
      "DaisyUI",
      "Vite",
    ],
    demoLink: "https://prioritask-v2.pages.dev/",
    githubLink: "https://github.com/AdvaitParab12/Prioritask-v2/",
  },
  {
    title: "Untitled",
    description:
      "This React-based web application features a responsive design using Tailwind CSS and provides multiple pages for user interaction. The Home Page includes a header, a form section, and an optional sidebar for larger screens. The Submissions Page displays a success message with dynamic user details and a link to view submissions, while the Error Page notifies users of flagged form submissions with an option to retry. A minimal NotFound Page serves as a placeholder for 404 errors. The application leverages react-router-dom for navigation and integrates a utility library for handling dynamic URLs.",
    technologies: ["HTML", "CSS", "JavaScript", "TailwindCSS", "Vite"],
    demoLink: "https://untitled-cz5.pages.dev/",
    githubLink: "https://github.com/AdvaitParab12/Untitled/",
  },
];

const SkillCard = ({ category, skills }) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-xl border-2 border-primary bg-background p-6 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="mb-6 text-center text-2xl font-semibold capitalize text-primary">
        {category}
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {skills.map(({ name, icon: Icon }) => (
          <motion.div
            key={name}
            className="group flex items-center rounded-md p-2 transition-all duration-300 hover:bg-primary/10"
            whileHover={{ scale: 1.05 }}
          >
            <div className="mr-3 rounded-full bg-primary/20 p-2 transition-colors duration-300 group-hover:bg-primary/30">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <span className="text-sm font-medium text-foreground transition-colors duration-300 group-hover:text-primary">
              {name}
            </span>
          </motion.div>
        ))}
      </div>
      <div className="absolute -bottom-2 -right-2 h-24 w-24 rounded-full bg-primary/10 blur-2xl"></div>
    </motion.div>
  );
};

export default function Home() {
  return (
    <div className="relative">
      <section className="flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-br from-background via-background to-primary/10 p-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-center text-4xl font-bold text-transparent md:text-6xl animate-gradient-move"
        >
          Hi, I'm Advait Parab
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8 max-w-2xl text-center text-xl text-muted-foreground md:text-2xl "
        >
          Full Stack Developer building accessible, performant web applications
          with modern technologies.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        ></motion.div>
      </section>

      <section id="about" className="bg-background py-20 text-foreground">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold">About Me</h2>
          <p className="mb-6 text-lg">
            Hey there! My name is Advait Parab. I have recently completed my
            Bachelor of Engineering (BE) specialized in Artificial Intelligence
            & Machine Learning from University of Mumbai in 2024.I am a fast
            learner and I am always up for new challenges and i can adapt to
            changes quickly.
          </p>
          <p className="text-lg">
            I am interested in Full Stack Web Development and I am familiar with
            technologies like HTML, CSS, SCSS, Javascript, Typescript. Over the
            last few months I have developed multiple projects and
            certifications. Keep scrolling to learn more about them.
          </p>
        </div>
      </section>

      <section
        id="skills"
        className="relative overflow-hidden bg-secondary py-20 text-secondary-foreground"
      >
        <div className="container relative z-10 mx-auto px-4">
          <h2 className="mb-12 text-3xl font-bold underline">Skills</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {Object.entries(skills).map(([category, categorySkills]) => (
              <SkillCard
                key={category}
                category={category}
                skills={categorySkills}
              />
            ))}
          </div>
        </div>
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-br from-primary/5 to-transparent"></div>
      </section>

      <section id="projects" className="bg-background py-20 text-foreground">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-3xl font-bold">Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="transform overflow-hidden rounded-lg border bg-card shadow-lg transition-all duration-300 hover:scale-105 dark:border-zinc-700"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex h-full flex-col p-6">
                  <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                  <p className="mb-4 flex-grow text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-primary/10 px-2 py-1 text-sm text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Button
                      asChild
                      size="sm"
                      className="flex-1 border dark:border-zinc-700 dark:bg-black dark:hover:bg-zinc-700"
                    >
                      <Link
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <FiExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className="flex-1 dark:hover:bg-zinc-700"
                    >
                      <Link
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center border dark:border-zinc-700 dark:bg-black"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="bg-secondary py-20 text-secondary-foreground"
      >
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-3xl font-bold underline">Contact</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div className="flex items-center space-x-4 rounded-lg border-2 bg-background p-6 shadow-lg">
              <IoMdMailUnread className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold text-foreground">Email</h3>
                <p className="text-muted-foreground">advait0012@proton.me</p>
              </div>
            </motion.div>
            <motion.div className="flex items-center space-x-4 rounded-lg border-2 bg-background p-6 shadow-lg">
              <FaPhoneAlt className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold text-foreground">Phone</h3>
                <p className="text-muted-foreground">+91 8879887449</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
