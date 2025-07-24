import Link from "next/link"

// Components
import { Button } from "@/components/ui/button"
import PortfolioSection from "@/components/portfolio-section"

// Icons
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Portfolio",
  description:
    "Explore our portfolio of web development, mobile app, and design projects that showcase our expertise and creativity.",
}

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary to-secondary">
        <div className="w-full mx-auto container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                Our Portfolio
              </h1>
              <p className="max-w-[600px] text-gray-300 md:text-xl">
                {`Explore our latest projects and see how we've helped businesses achieve their digital goals.`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="w-full mx-auto container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Start Your Project?
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {`Let's discuss how we can help your business grow with our tailored digital solutions.`}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mt-2">
              <Button
                asChild
                size="lg"
                className="bg-third text-white hover:bg-slate-800 h-12 text-lg">
                <Link href="/contact">
                  Contact Us Today <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

