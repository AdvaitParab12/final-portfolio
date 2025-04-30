"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowDown, Code, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const floatingShapes = [
    { icon: <Code className="h-6 w-6" />, delay: 0 },
    { icon: <Sparkles className="h-5 w-5" />, delay: 1.5 },
    { icon: <Code className="h-4 w-4" />, delay: 3 },
    { icon: <Sparkles className="h-7 w-7" />, delay: 4.5 },
  ]

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(var(--foreground-rgb),0.1),transparent)]" />

      {/* Floating shapes */}
      {floatingShapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute text-primary/30 dark:text-primary/20"
          initial={{
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
            opacity: 0.3,
          }}
          animate={{
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
            opacity: [0.3, 0.8, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            delay: shape.delay,
            ease: "easeInOut",
          }}
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
          }}
        >
          {shape.icon}
        </motion.div>
      ))}

      <div className="container px-4 md:px-6 z-10">
        <motion.div
          className="flex flex-col items-center justify-center space-y-8 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="space-y-2">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              <span className="animate-pulse">✨ Welcome to my portfolio</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
              Hi, I'm <span className="text-primary">Advait Parab</span>
            </h1>
            <div className="h-8 md:h-12 mt-2">
              <TypeAnimation
                sequence={["Frontend Developer", 2000, "Full Stack Developer", 2000]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
                className="text-xl md:text-2xl text-muted-foreground"
              />
            </div>
            <motion.p variants={itemVariants} className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
              A passionate web developer creating beautiful and functional digital experiences
            </motion.p>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="group relative overflow-hidden rounded-full px-8 transition-all duration-300 ease-out hover:bg-primary/90"
            >
              <Link
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("#projects")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }}
              >
                <span className="relative z-10">View My Work</span>
                <span className="absolute inset-0 z-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="rounded-full px-8 transition-all duration-300">
              <Link
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("#contact")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }}
              >
                Contact Me
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full animate-bounce"
          onClick={() => {
            document.querySelector("#about")?.scrollIntoView({
              behavior: "smooth",
            })
          }}
        >
          <ArrowDown className="h-6 w-6" />
          <span className="sr-only">Scroll down</span>
        </Button>
      </motion.div>
    </section>
  )
}
