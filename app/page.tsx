/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  CodepenIcon as ReactIcon,
  GitBranchIcon,
  DatabaseIcon,
  CodeIcon,
  BoxIcon,
  ServerIcon,
  BeakerIcon as TestingBeakerIcon,
  GanttChartIcon,
  Mail,
  Phone,
  ExternalLink,
  Github,
} from "lucide-react";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaGitAlt,
  FaBootstrap,
  FaGithub,
  FaReact,
  FaNodeJs,
  FaBox,
} from "react-icons/fa";
import { SiVite, SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { Button } from "@/components/ui/button";

const skills = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "SCSS", icon: FaSass },
  { name: "Bootstrap", icon: FaBootstrap },
  { name: "JavaScript", icon: IoLogoJavascript },
  { name: "Git", icon: FaGitAlt },
  { name: "Github", icon: FaGithub },
  { name: "Vite", icon: SiVite },
  { name: "Parcel", icon: FaBox },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: FaNodeJs },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: RiNextjsFill },
];

const projects = [
  {
    title: "RPSLS-Showdown",
    description:
      "Rock, Paper, Scissors, Lizard, Spock Overview: Rock, Paper, Scissors, Lizard, Spock is an extended version of the classic game that adds more complexity and options. This game introduces two additional moves—Lizard and Spock—allowing for a greater variety of outcomes and strategies.",
    technologies: ["HTML", "CSS", "JavaScript", "TailwindCSS", "Parcel"],
    demoLink: "https://rpsls-showdown.pages.dev/",
    githubLink: "https://github.com/AdvaitParab12/RPSLS-Showdown",
  },
  {
    title: "Auto-Persona",
    description:
      "This project is an interactive car configurator built with React and Next.js, allowing users to customize and preview various car features including exterior colors, wheels, interior colors, and seat designs.",
    technologies: [
      "NextJs",
      "React",
      "TailwindCSS",
      "DaisyUI",
      "JavaScript",
      "CSS",
    ],
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
    githubLink: "https://github.com/AdvaitParab12/Prioritask-v2",
  },
  {
    title: "Untitled",
    description:
      "This React-based web application features a responsive design using Tailwind CSS and provides multiple pages for user interaction. The Home Page includes a header, a form section, and an optional sidebar for larger screens. The Submissions Page displays a success message with dynamic user details and a link to view submissions, while the Error Page notifies users of flagged form submissions with an option to retry. A minimal NotFound Page serves as a placeholder for 404 errors. The application leverages react-router-dom for navigation and integrates a utility library for handling dynamic URLs.",
    technologies: ["HTML", "CSS", "JavaScript", "TailwindCSS", "React", "Vite"],
    demoLink: "https://untitled-react-app.vercel.app/",
    githubLink: "https://github.com/AdvaitParab12/Untitled-React-App",
  },
];

export default function Home() {
  return (
    <div className="relative">
      <section className="w-full min-h-screen flex flex-col justify-center items-center p-4 bg-gradient-to-br from-background via-background to-primary/10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-center mb-6 text-foreground"
        >
          Hi, I'm Advait Parab
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-center mb-8 max-w-2xl text-zinc-500"
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

      <section id="about" className="py-20 bg-background text-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-lg mb-6">
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
        className="py-20 bg-secondary text-secondary-foreground"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skills.map(({ name, icon: Icon }) => (
              <motion.div
                key={name}
                className="flex flex-col items-center justify-center p-6 bg-background rounded-lg shadow-lg transform transition-all duration-300 "
                whileHover={{
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <Icon className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">
                  {name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-background text-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-card rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 border dark:border  dark:dark:border-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold mb-2 underline">
                    {project.title}
                  </h3>
                  <p className="text-zinc-500 mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary text-sm rounded-full dark:border  dark:dark:border-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Button
                      asChild
                      variant="default"
                      size="sm"
                      className="flex-1 text-white"
                    >
                      <Link
                        href={project.demoLink}
                        target="_blank"
                        // rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1"
                    >
                      <Link
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <Github className="w-4 h-4 mr-2" />
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
        className="py-20 bg-secondary text-secondary-foreground"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Contact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div className="flex items-center space-x-4 p-6 bg-background rounded-lg shadow-lg dark:border-2">
              <Mail className="w-8 h-8 text-primary" />
              <div>
                <h3 className="font-semibold text-foreground">Email</h3>
                <p className="text-zinc-500">advait.parab24@gmail.com</p>
              </div>
            </motion.div>
            <motion.div className="flex items-center space-x-4 p-6 bg-background rounded-lg shadow-lg dark:border-2">
              <Phone className="w-8 h-8 text-primary" />
              <div>
                <h3 className="font-semibold text-foreground">Phone</h3>
                <p className="text-zinc-500">+91 8879877449</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
