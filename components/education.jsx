"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, GraduationCap, Award } from "lucide-react";
import AnimatedSection from "@/components/animated-section";
import { motion } from "framer-motion";

export default function Education() {
  const educationHistory = [
    {
      degree:
        "Bachelor of Science in Artificial Intelligence & Machine Learning",
      institution: "Massachusetts Institute of Technology",
      location: "Navi Mumbai,Maharashtra",
      period: "2021 - 2024",
      description:
        "I hold a degree in Computer Science, which provided me with a strong foundation in programming, data structures, algorithms, and software development principles.",
    },
    {
      degree: "MERN Stack Developer Course",
      institution: "Quality Software Technologies",
      location: "Thane, Maharashtra",
      period: "June 2024 - February 2025",
      description:
        "I have completed an 8-month intensive MERN stack course, gaining hands-on experience in building full-stack web applications using MongoDB, Express.js, React, and Node.js. The course focused on real-world projects, best practices, and deployment strategies.",
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="container px-4 md:px-6">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Education
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                My academic background and qualifications
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="mt-16 space-y-8">
          {educationHistory.map((edu, index) => (
            <AnimatedSection key={index} delay={0.1 * index}>
              <motion.div
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <CardTitle className="flex items-center gap-2">
                          <GraduationCap className="h-5 w-5 text-primary" />
                          {edu.degree}
                        </CardTitle>
                        <p className="text-lg font-medium">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground">
                          {edu.location}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1"
                      >
                        <CalendarDays className="h-3 w-3" />
                        {edu.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {edu.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
