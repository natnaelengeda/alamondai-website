"use client";
import React, { useState } from "react"

import Link from "next/link"
import Image from "next/image"

// Components
import { Button } from "@/components/ui/button"

// Data
import projects from "@/data/projects"

// Icons
import { ArrowRight } from "lucide-react"

export default function PortfolioSection() {
  const categories = [...new Set(projects.map((project) => project.category))]
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="w-full mx-auto container px-4 md:px-6">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <Button
            onClick={() => setSelectedCategory("all")}
            variant="outline"
            className={`rounded-full ${selectedCategory === "all" ? "bg-third text-white" : ""}`}>
            All
          </Button>
          {
            categories.map((category, index) => (
              <Button
                key={index}
                onClick={() => setSelectedCategory(category)}
                variant="outline"
                className={`rounded-full hover:bg-third hover:opacity-90 hover:text-white ${selectedCategory === category ? "bg-third text-white" : ""}`}>
                {category}
              </Button>
            ))
          }
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {
            projects.map((project) => {
              if (selectedCategory !== "all" && project.category !== selectedCategory) {
                return null;
              }
              return (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
                  <div
                    className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-2.5 py-0.5 text-xs font-medium text-white">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-sm text-slate-500 mb-1">{project.category}</div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="mt-2 text-gray-500 line-clamp-2">{project.description}</p>
                    <div className="mt-4">
                      <Button
                        asChild
                        variant="outline"
                        size="sm">
                        <Link
                          target="_blank"
                          href={project.link}>
                          View Project <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>);
            }
            )}
        </div>
      </div>
    </section>
  )
}
