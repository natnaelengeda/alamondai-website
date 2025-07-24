import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Data
import projects from "@/data/projects"

export default function FeaturedProjects() {
  return (
    <section className="w-full py-12 bg-white md:py-24 lg:py-28">
      <div className="container w-full px-4 mx-auto md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block px-3 py-1 text-sm bg-gray-100 rounded-lg">Portfolio</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore some of our recent work that showcases our expertise and creativity.
            </p>
          </div>
        </div>

        <div className="grid max-w-5xl grid-cols-1 gap-8 mx-auto mt-12 md:gap-12 lg:gap-16">
          {projects.map((project) => {
            if (project.featured && project.featured == true) {
              return (
                <div
                  key={project.id}
                  className="relative overflow-hidden transition-all rounded-lg shadow-lg group hover:shadow-xl">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="relative h-64 md:h-[15.5rem] overflow-hidden rounded-lg">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col justify-center p-6">
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <p className="mt-2 text-gray-500">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-6">
                        <Button asChild variant="outline">
                          <Link href={project.link}>
                            View Project <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
          })}
        </div>

        <div className="flex justify-center mt-12">
          <Button
            asChild
            className="h-12 px-5">
            <Link href="/portfolio">
              View All Projects <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

