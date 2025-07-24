"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useMobile } from "@/hooks/use-mobile"

const testimonials = [
  {
    quote:
      "Working with this agency transformed our online presence. Their team delivered a website that exceeded our expectations in both design and functionality.",
    author: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    quote:
      "The team's attention to detail and technical expertise helped us launch our e-commerce platform ahead of schedule. The results have been outstanding.",
    author: "Michael Chen",
    role: "Marketing Director, Retail Solutions",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    quote:
      "Their strategic approach to UX design significantly improved our conversion rates. I highly recommend their services to any business looking to grow online.",
    author: "Emma Rodriguez",
    role: "Product Manager, SaaS Platform",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const isMobile = useMobile()

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
          </div>
        </div>

        <div className="mx-auto max-w-4xl mt-12 relative">
          <div
            className="overflow-hidden"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="border-none shadow-lg">
                    <CardContent className="pt-6">
                      <div className="mb-4 flex justify-center">
                        <div className="rounded-full bg-slate-100 p-2">
                          <Quote className="h-6 w-6 text-slate-600" />
                        </div>
                      </div>
                      <p className="mb-6 text-center text-lg text-gray-700">{`"${testimonial.quote}"`}</p>
                      <div className="flex items-center justify-center space-x-4">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                          <AvatarFallback>
                            {testimonial.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.author}</p>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {!isMobile && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-white shadow-lg"
                onClick={prev}
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-white shadow-lg"
                onClick={next}
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next</span>
              </Button>
            </>
          )}

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full ${current === index ? "bg-slate-800" : "bg-slate-300"}`}
                onClick={() => setCurrent(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

