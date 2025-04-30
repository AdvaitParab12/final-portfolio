"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Server, Wrench } from "lucide-react";
import AnimatedSection from "@/components/animated-section";
import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="h-6 w-6 text-primary" />,
      skills: [
        "HTML5",
        "CSS3/SASS",
        "JavaScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "ShadcnUI",
      ],
    },
    {
      title: "Backend",
      icon: <Server className="h-6 w-6 text-primary" />,
      skills: ["Node.js", "Express", "MongoDB","Hono"],
    },
    {
      title: "Tools & Others",
      icon: <Wrench className="h-6 w-6 text-primary" />,
      skills: [
        "Git/GitHub",
        "Jest",
        "Figma",
        "Vercel",
        "Notion",
        "Parcel",
        "Vite",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Skills
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Technologies and tools I work with
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={index} delay={0.1 * index}>
              <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {category.icon}
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.05 * i }}
                        viewport={{ once: true }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-primary/10 hover:bg-primary/20 text-primary transition-colors py-1.5 px-3 text-sm"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
