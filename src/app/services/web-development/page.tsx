import Link from "next/link"
import Image from "next/image"
import { CheckCircle } from 'lucide-react'

// Components
import { Button } from "@/components/ui/button"
import ServicesTitle from "@/components/services-title"
import UserExperienceCTA from "@/components/user-experience-cta"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// AppAsset
import AppAsset from "@/core/AppAsset"

export default function WebDevelopmentPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <ServicesTitle
        title="Web Development"
        subTitle="Custom websites built with the latest technologies for optimal performance and user experience."
        type="web-development" />

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Web Development
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Custom websites built with the latest technologies for optimal performance and user experience.
          </p>
          <div className="space-y-4">
            <p>
              Our web development team specializes in creating modern, responsive websites and web applications
              using React.js and Next.js. We leverage the latest features of Next.js 15, including improved
              performance, enhanced image optimization, and advanced routing capabilities.
            </p>
            <p>
              Whether you need a simple marketing website, a complex e-commerce platform, or a custom web
              application, our experienced developers can bring your vision to life with clean, maintainable code.
            </p>
          </div>
          <div className="mt-8">
            <Button
              size="lg"
              className="h-12 text-lg"
              asChild>
              <Link href="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden border">
          <Image
            src={AppAsset.WebServiceHero1}
            alt="Web Development"
            width={600}
            height={600}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Our Web Development Process</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border rounded-lg p-6">
            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-4">
              <span className="font-bold text-xl">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Discovery & Planning</h3>
            <p className="text-muted-foreground">
              We begin by understanding your business goals, target audience, and project requirements to create a
              comprehensive development plan.
            </p>
          </div>
          <div className="border rounded-lg p-6">
            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-4">
              <span className="font-bold text-xl">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Design & Development</h3>
            <p className="text-muted-foreground">
              Our designers and developers work together to create visually appealing interfaces and implement
              functionality using React.js and Next.js.
            </p>
          </div>
          <div className="border rounded-lg p-6">
            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-4">
              <span className="font-bold text-xl">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Testing & Deployment</h3>
            <p className="text-muted-foreground">
              We thoroughly test your website across devices and browsers before deploying to a fast, reliable
              hosting environment like Vercel.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Technologies We Use</h2>
        <Tabs defaultValue="frontend">
          <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-3 mb-8">
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="tools">Tools & Frameworks</TabsTrigger>
          </TabsList>
          <TabsContent value="frontend" className="border rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Core Technologies</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <span>React.js for interactive UIs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <span>Next.js for server-side rendering and static generation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <span>TypeScript for type safety</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <span>HTML5/CSS3 for structure and styling</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">UI Libraries</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <span>Tailwind CSS for utility-first styling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <span>shadcn/ui for accessible components</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <span>Material UI for enterprise applications</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <span>Framer Motion for animations</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="backend" className="border rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Server Technologies</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <span>Node.js for server-side JavaScript</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <span>Next.js API routes for serverless functions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <span>Nest.js for custom API development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <span>GraphQL for efficient data fetching</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Databases</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <span>PostgreSQL for relational data</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <span>MongoDB for document-based storage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <span>Supabase for backend-as-a-service</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <span>Firebase for real-time applications</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="tools" className="border rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Development Tools</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <span>Git for version control</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <span>GitHub Actions for CI/CD</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <span>Jest and React Testing Library for testing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <span>ESLint and Prettier for code quality</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Deployment & Hosting</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <span>Vercel for Next.js deployment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <span>Netlify for static site hosting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <span>AWS for scalable infrastructure</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <span>Docker for containerization</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Our Web Development Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Responsive Website Development</h3>
            <p className="text-muted-foreground mb-4">
              We create websites that look and function perfectly on all devices, from desktops to smartphones.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                <span>Mobile-first design approach</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                <span>Cross-browser compatibility</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                <span>Fluid layouts and flexible images</span>
              </li>
            </ul>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">E-commerce Development</h3>
            <p className="text-muted-foreground mb-4">
              Build online stores with secure payment processing, inventory management, and seamless user experience.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                <span>Custom shopping cart functionality</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                <span>Secure payment gateway integration</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                <span>Product catalog and inventory management</span>
              </li>
            </ul>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Web Application Development</h3>
            <p className="text-muted-foreground mb-4">
              Create complex, interactive web applications with advanced functionality and real-time features.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                <span>Single-page applications (SPAs)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                <span>Progressive web apps (PWAs)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                <span>Real-time data synchronization</span>
              </li>
            </ul>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">CMS Development</h3>
            <p className="text-muted-foreground mb-4">
              Implement content management systems that make it easy to update and manage your website content.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                <span>Headless CMS integration (Contentful, Sanity)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                <span>Custom admin dashboards</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                <span>User role management</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <UserExperienceCTA
        title="Ready to Optimize Your Digital Performance?"
        subTitle="Let's use data-driven insights to improve your website's performance, increase conversions, and maximize your ROI."
        type="web-development" />

    </div>
  )
}
