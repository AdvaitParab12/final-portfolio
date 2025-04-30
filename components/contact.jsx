"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/animated-section";
import { motion } from "framer-motion";

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      value: "advait0012@proton.me",
      link: "mailto:advait0012@proton.me",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      value: "+91 8879887449",
      link: "tel:+91 8879887449",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      value: "Powai, Mumbai",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      title: "GitHub",
      value: "@AdvaitParab12",
      link: "https://github.com/AdvaitParab12",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      title: "LinkedIn",
      value: "Advait Parab",
      link: "https://www.linkedin.com/in/advaitparab12",
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      title: "Instagram",
      value: "@advait.parab",
      link: "https://www.instagram.com/advait.parab/",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Get In Touch
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Have a question or want to work together? Feel free to contact
                me!
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="mt-16 max-w-3xl mx-auto">
          <AnimatedSection delay={0.2}>
            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-center">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5 }}
                      className="flex flex-col items-center text-center space-y-2 p-4 rounded-lg hover:bg-muted transition-colors"
                    >
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        {info.icon}
                      </div>
                      <h3 className="font-medium">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12">
                  <h3 className="text-center font-medium text-lg mb-6">
                    Connect With Me
                  </h3>
                  <div className="flex justify-center gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.div key={index} whileHover={{ y: -5 }}>
                        <Button
                          asChild
                          variant="outline"
                          size="icon"
                          className="rounded-full h-12 w-12 border-2"
                        >
                          <a
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.title}
                          >
                            {social.icon}
                          </a>
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
