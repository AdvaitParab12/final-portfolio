"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Image from "next/image";
import AnimatedSection from "@/components/animated-section";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "CSV Guard",
      description:
        "A robust CSV validation tool designed specifically for LinkedIn lead data. CSVGuard automatically detects CSV headers and allows you to define validation rules for each field, ensuring your lead data meets your quality standards.",
      image: "/npm.webp",
      tags: ["JavaScript", "Node.js", "Vitest"],
      liveUrl: "https://www.npmjs.com/package/csvguard",
      githubUrl: "https://github.com/AdvaitParab12/csvGuard",
    },
    {
      title: "Wakati API",
      description:
        "Wakati API is an advanced text intelligence platform designed to analyze and calculate text scores with AI modules.",
      image: "/Wakati.png",
      tags: ["Hono", "TypeScript", "Javascript", "CSS", "Vitest"],
      liveUrl: "https://api.wakati.tech/",
      githubUrl: "https://github.com/tiwakati/wakati",
    },
    {
      title: "Auto-Persona",
      description:
        "This project is an interactive car configurator built with React and Next.js, allowing users to customize and preview various car features including exterior colors, wheels, interior colors, and seat designs.",
      image: "/auto.png",
      tags: [
        "React.js",
        "Tailwind CSS",
        "Framer Motion",
        "NextJs",
        "DaisyUI",
        "CSS",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                My Projects
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Check out some of my recent work
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={index} delay={0.1 * index}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="h-full"
              >
                <Card className="overflow-hidden h-full flex flex-col border-2 hover:border-primary/50 transition-all duration-300 group">
                  <div className="relative">
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="pt-2 flex gap-3">
                    <Button
                      asChild
                      className="flex-1 gap-1 group/button relative overflow-hidden"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                        <span className="absolute inset-0 z-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 transition-opacity duration-300 group-hover/button:opacity-100"></span>
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1 gap-1 group/button"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <span>Code</span>
                        <Github className="h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="mt-12 text-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 group"
            >
              <a
                href="https://github.com/AdvaitParab12?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <span>View More Projects</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
