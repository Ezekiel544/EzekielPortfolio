"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Piptracker from '../img/piptracker.png'
import Vetpredict from '../img/vetpredict.png'
import Tokicard from '../img/tokicard.png'
import Covapadi from '../img/covapadi.png'
import Phexara from '../img/phexara.png'
import Flibber from '../img/flibber.png'
import Max from '../img/max.jpg'

const projects = [
  {
    title: "PHEXARA.WEB",
    description:
      "PHEXARA is a technology company that builds AI-powered software, cybersecurity solutions, and smart digital infrastructure to help organizations grow, adapt, and stay secure.",
    image: Phexara,
    technologies: ["Next.js", "PostgreSQL", "Tailwind"],
    status: "LIVE",
    github: "https://phexara.co.uk",
    demo: "https://phexara.co.uk",
  },
  {
    title: "PIP TRACKER.WEB",
    description:
      "A powerful trading analytics platform designed to help traders track performance, analyze strategies, and make data-driven decisions with real-time insights and professional-grade metrics.",
    image: Piptracker,
    technologies: ["React", "Node.js", "Firebase", "Express"],
    status: "LIVE",
    github: "https://github.com/Ezekiel544/Pip-tracker",
    demo: "https://pip-tracker-p.vercel.app",
  },
  {
    title: "COVAPADI.WEB",
    description:
      "A gadget protection platform that partners with licensed insurance companies to provide users with simple, accessible, and user-friendly device protection services.",
    image: Covapadi,
    technologies: ["React.js", "EmailJS", "Tailwind", "Redux"],
    status: "DEVELOPMENT",
    github: "https://covapadi.vercel.app",
    demo: "https://covapadi.vercel.app",
  },
  {
    title: "Vetpredict.WEB",
    description:
      "The first prediction market platform on the VeChain blockchain. Designed and built a decentralized application enabling users to create and participate in prediction markets.",
    image: Vetpredict,
    technologies: ["Next.js", "Express.js", "Tailwind", "solidity"],
    status: "LIVE",
    github: "https://github.com/Ezekiel544/vetpredict-frontend",
    demo: "https://vetpredict-frontend.vercel.app",
  },
  {
    title: "Tokicard.APP",
    description:
      "A virtual dollar card used and managed through an app. It allows users to make online purchases, track spending, and manage their finances with ease.",
    image: Tokicard,
    technologies: ["React", "TailwindCSS"],
    status: "BETA",
    github: "https://tokicardai.com",
    demo: "https://tokicardai.com",
  },
  {
    title: "FLIBBER.WEB",
    description: "Flibber&apos;s Slotting Mechanism is a system that enables predictable and controlled movement of value between different blockchains, traditional currencies, and digital markets.",
    image: Flibber,
    technologies: ["Solidity", "Next.js", "Supabase", "Web3modal"],
    status: "LIVE",
    github: "https://flibber.xyz/",
    demo: "https://flibber.xyz/",
  },
  {
    title: "MAX.BOT",
    description: "A Telegram-based tap-to-earn bot built on the WAX blockchain, allowing users to earn rewards through interactive gameplay mechanics.",
    image: Max,
    technologies: ["Python", "Telegram Bot API", "Firebase", "Webhooks"],
    status: "LIVE",
    github: "https://github.com/Ezekiel544/tgbot.git",
    demo: "https://t.me/firthtum_bot",
  },
]

const statusColors: Record<string, string> = {
  LIVE: "bg-accent text-accent-foreground",
  BETA: "bg-amber-500 text-white",
  DEVELOPMENT: "bg-blue-500 text-white",
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [filter, setFilter] = useState<string | null>(null)

  const filteredProjects = filter
    ? projects.filter((p) => p.status === filter)
    : projects

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12">
            <h2 className="font-mono font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-3 sm:mb-4">
              Selected Work
            </h2>
            <div className="w-12 sm:w-16 h-1 bg-accent mx-auto mb-6 sm:mb-8" />
            <p className="font-mono text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
              A collection of projects showcasing different aspects of modern web
              development, from user interfaces to backend architecture.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
          >
            <Button
              variant={filter === null ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(null)}
              className="font-mono text-[10px] sm:text-xs"
            >
              ALL
            </Button>
            {["LIVE", "BETA", "DEVELOPMENT"].map((status) => (
              <Button
                key={status}
                variant={filter === status ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(status)}
                className="font-mono text-[10px] sm:text-xs"
              >
                {status}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                layout
                className="group border border-border bg-card overflow-hidden hover:border-foreground transition-colors"
              >
                {/* Project Image */}
                <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
                    <span
                      className={`font-mono text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 ${statusColors[project.status]}`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Content */}
                <div className="p-4 sm:p-6">
                  <h3 className="font-mono font-bold text-sm sm:text-base md:text-lg mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 sm:gap-3">
                    <Button asChild className="flex-1 font-mono text-[10px] sm:text-xs" size="sm">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        CODE
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1 font-mono text-[10px] sm:text-xs"
                      size="sm"
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        DEMO
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}