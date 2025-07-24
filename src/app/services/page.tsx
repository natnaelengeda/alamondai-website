import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code, Layers, Zap, BarChart, Globe, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import AppAsset from "@/core/AppAsset"

const services = [
  {
    icon: <Code className="h-10 w-10 text-slate-900" />,
    title: "Web Development",
    description: "Custom websites built with the latest technologies for optimal performance and user experience.",
    features: [
      "Responsive design for all devices",
      "SEO optimization for better visibility",
      "Performance tuning for fast loading",
      "Accessibility compliance",
      "Content management systems",
      "E-commerce functionality",
    ],
    link: "/services/web-development",
  },
  {
    icon: <Layers className="h-10 w-10 text-slate-900" />,
    title: "UI/UX Design",
    description: "User-centered design that enhances engagement and conversions through intuitive interfaces.",
    features: [
      "User research and personas",
      "Wireframing and prototyping",
      "Usability testing",
      "Information architecture",
      "Visual design and branding",
      "Interaction design",
    ],
    link: "/services/ui-ux-design",
  },
  {
    icon: <Zap className="h-10 w-10 text-slate-900" />,
    title: "Digital Marketing",
    description: "Strategic marketing solutions to grow your online presence and reach your target audience.",
    features: [
      "SEO and content strategy",
      "Social media marketing",
      "Email marketing campaigns",
      "PPC advertising",
      "Analytics and reporting",
      "Conversion rate optimization",
    ],
    link: "/services/digital-marketing",
  },
  {
    icon: <BarChart className="h-10 w-10 text-slate-900" />,
    title: "Analytics & Optimization",
    description: "Data-driven insights to improve your website's performance and user engagement.",
    features: [
      "Website analytics setup",
      "User behavior analysis",
      "Conversion funnel optimization",
      "A/B testing",
      "Performance monitoring",
      "ROI tracking",
    ],
    link: "/services/analytics-optimization",
  },
  {
    icon: <Globe className="h-10 w-10 text-slate-900" />,
    title: "SEO Services",
    description: "Comprehensive search engine optimization to improve your visibility and organic traffic.",
    features: [
      "Keyword research and strategy",
      "On-page SEO optimization",
      "Technical SEO audits",
      "Link building",
      "Local SEO",
      "SEO reporting and analytics",
    ],
    link: "/services/seo-services",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-slate-900" />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    features: [
      "iOS and Android development",
      "Cross-platform solutions",
      "UI/UX design for mobile",
      "App store optimization",
      "Performance optimization",
      "Maintenance and support",
    ],
    link: "/services/mobile-app-development",
  },
]

export const metadata = {
  title: "Services",
  description:
    "Explore our comprehensive range of digital services including web development, UI/UX design, digital marketing, and more.",
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary to-secondary">
        <div className="w-full mx-auto container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                Our Services
              </h1>
              <p className="max-w-[600px] text-gray-300 md:text-xl">
                Comprehensive digital solutions tailored to your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="w-full mx-auto container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="flex flex-col h-full">
                <CardHeader>
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-slate-100">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <ArrowRight className="mr-2 h-4 w-4 text-slate-500 mt-1" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={service.link}>Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="w-full mx-auto container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Our Process</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How We Work</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our proven methodology ensures successful project delivery and client satisfaction.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We start by understanding your business goals, target audience, and project requirements.",
              },
              {
                step: "02",
                title: "Strategy",
                description: "We develop a comprehensive strategy and roadmap tailored to your specific needs.",
              },
              {
                step: "03",
                title: "Implementation",
                description: "Our team executes the plan with precision, keeping you informed throughout the process.",
              },
              {
                step: "04",
                title: "Optimization",
                description: "We continuously monitor and optimize to ensure long-term success and ROI.",
              },
            ].map((item, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                <div className={`flex h-20 w-20 items-center justify-center rounded-full ${index % 2 == 0 ? "bg-primary" : "bg-secondary"} text-white text-2xl font-bold mb-4`}>
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-500">{item.description}</p>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] border-t-2 border-dashed border-slate-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-third text-white">
        <div className="w-full mx-auto container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Start Your Project?
              </h2>
              <p className="mt-4 text-xl text-slate-300">
                {`Let's discuss how we can help your business grow with our tailored digital solutions.`}
              </p>
              <div className="mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-gray-200 h-12 text-lg">
                  <Link href="/contact">
                    Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src={AppAsset.ServicePageHeroImage}
                alt="Contact us"
                fill
                className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

