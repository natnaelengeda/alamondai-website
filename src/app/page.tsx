"use client";
import { useEffect } from "react"

import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import TestimonialCarousel from "@/components/testimonial-carousel"
import FeaturedProjects from "@/components/featured-projects"

// Firebase
import { firebase, analytics } from "@/lib/firebase"

// Data
import services from "@/data/services"
import Blogs from "@/components/ui/blogs"

// Icons
import { ArrowRight, CheckCircle } from "lucide-react"

// App Asset
import AppAsset from "@/core/AppAsset"


export default function Home() {

  // Initialize Firebase
  const InitializeFirebase = () => {
    try {
      firebase;
      analytics;
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    InitializeFirebase();
  }, []);

  return (
    <div className="w-full flex flex-col items-center mx-auto min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-32 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto md:px-6">
          <div className="flex flex-col gap-12 md:grid md:gap-6 lg:grid-cols-2 lg:gap-12 items-center overflow-hidden">

            {/* Left Side */}
            <div className="flex flex-col justify-center space-y-4 px-5 ">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                  Transforming Ideas Into Digital Excellence
                </h1>
                <p className="max-w-[600px] text-gray-300 md:text-xl">
                  We build high-performance websites and applications that drive business growth and deliver exceptional
                  user experiences.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-white h-12 text-slate-900 border hover:border-white hover:bg-transparent hover:text-white text-lg">
                  <Link href="/contact">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12 border-white bg-transparent text-white hover:bg-white hover:text-primary text-lg">
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="w-full relative lg:block mt-3 md:mt-0 px-3">
              <Image
                src={AppAsset.HomePageHeroimage}
                // width={600}
                height={700}
                alt="Hero Image"
                className="mx-auto w-full aspect-video overflow-hidden rounded-xl object-contain h- sm:w-full md:h-[27rem] lg:order-last bg-white"
                priority />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full mx-auto py-12 md:py-24 lg:py-12 bg-white" id="services">
        <div className="w-full mx-auto container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Services</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Expertise</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We offer a comprehensive range of services to help your business succeed in the digital landscape.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:gap-10 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {
              services.map((service, index) => {
                return (
                  <Card
                    key={index}>
                    <CardHeader className="pb-2">
                      <div
                        className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-primary to-secondary">
                        {service.icon}
                      </div>
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>
                        {service.description}.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm text-gray-500">

                      <ul className="space-y-2">
                        {
                          service.points.map((point, index) => {
                            return (
                              <li
                                key={index}
                                className="flex items-center">
                                <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                                <span>{point}</span>
                              </li>
                            );
                          })
                        }
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link href="/services/web-development">Learn More</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })
            }
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* Testimonials */}
      {/* <TestimonialCarousel /> */}

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="w-full mx-auto container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 mx-auto flex flex-col items-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="max-w-[600px] text-center text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {` Let's discuss how we can help your business grow with our tailored digital solutions.`}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mt-5">
              <Button
                asChild
                size="lg"
                className="bg-primary text-white hover:bg-secondary h-12">
                <Link
                  href="/contact"
                  className="">
                  Contact Us Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <Blogs />
    </div>
  )
}

