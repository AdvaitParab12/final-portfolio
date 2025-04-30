import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Globe } from "lucide-react";
import AnimatedSection from "@/components/animated-section";

export default function About() {
  const skills = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Web Development",
      description:
        "Proficient in building responsive and interactive web applications using modern frameworks and libraries.",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Full Stack",
      description:
        "Experience with both frontend and backend technologies to deliver complete solutions.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Me
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Get to know more about me and my skills
              </p>
            </div>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          <AnimatedSection delay={0.2}>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Who I Am</h3>
              <p className="text-muted-foreground">
                I'm a passionate web developer with a strong focus on creating
                clean, efficient, and user-friendly websites.
              </p>
              <p className="text-muted-foreground">
                My journey in web development started when I built my first
                website in college. Since then, I've been constantly learning
                and improving my skills to stay up-to-date with the latest
                technologies and best practices.
              </p>
              <p className="text-muted-foreground">
                When I’m not deep in code, I enjoy watching anime and staying
                physically active through cricket.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">My Skills</h3>
              <div className="grid gap-4">
                {skills.map((skill, index) => (
                  <Card key={index}>
                    <CardContent className="flex items-start p-6 gap-4">
                      <div className="mt-1">{skill.icon}</div>
                      <div>
                        <h4 className="font-bold">{skill.title}</h4>
                        <p className="text-muted-foreground">
                          {skill.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
