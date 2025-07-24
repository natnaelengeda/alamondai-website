import Image from "next/image"

// Components
import ServicesTitle from "@/components/services-title"
import UserExperienceCTA from "@/components/user-experience-cta"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// AppAsset
import AppAsset from "@/core/AppAsset"

// Icons
import { CheckCircle, Layers, Users, Figma, PenTool, Grid, Eye } from "lucide-react"

export const metadata = {
  title: "UI/UX Design Services | YourAgency",
  description: "User-centered design that enhances engagement and conversions through intuitive interfaces.",
}

export default function UiUxDesignPage() {
  const designServices = [
    {
      name: "User Research",
      description:
        "Understanding your users through interviews, surveys, and data analysis to inform design decisions.",
      icon: <Users className="h-8 w-8 text-slate-800" />,
    },
    {
      name: "Wireframing & Prototyping",
      description: "Creating interactive wireframes and prototypes to test concepts before development begins.",
      icon: <Figma className="h-8 w-8 text-slate-800" />,
    },
    {
      name: "Visual Design",
      description: "Crafting beautiful, on-brand visual designs that delight users and enhance your brand.",
      icon: <PenTool className="h-8 w-8 text-slate-800" />,
    },
    {
      name: "Information Architecture",
      description: "Organizing content and features in an intuitive way that helps users achieve their goals.",
      icon: <Grid className="h-8 w-8 text-slate-800" />,
    },
    {
      name: "Usability Testing",
      description: "Evaluating designs with real users to identify and fix usability issues before launch.",
      icon: <Eye className="h-8 w-8 text-slate-800" />,
    },
    {
      name: "Design Systems",
      description: "Creating comprehensive design systems for consistent user experiences across all platforms.",
      icon: <Layers className="h-8 w-8 text-slate-800" />,
    },
  ]

  const services = [
    "User research and personas",
    "Wireframing and prototyping",
    "Usability testing",
    "Information architecture",
    "Visual design and branding",
    "Interaction design",
    "Responsive design",
    "Design systems",
    "Accessibility design",
    "Mobile app UI/UX design",
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <ServicesTitle
        title="UI/UX Design"
        subTitle="User-centered design that enhances engagement and conversions through intuitive interfaces."
        type="ui-ux-design" />

      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Human-Centered Design Process</h2>
            <p className="text-slate-600 mb-6">
              Our UI/UX design process puts users at the center of everything we do. We believe that the best digital
              products are those that truly understand and address user needs, behaviors, and pain points.
            </p>
            <p className="text-slate-600 mb-6">
              We combine user research, strategic thinking, and creative design to create digital experiences that are
              not only visually appealing but also intuitive, accessible, and effective at helping users accomplish
              their goals.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-emerald-500 shrink-0 mt-0.5" />
                <span>Research-driven design decisions</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-emerald-500 shrink-0 mt-0.5" />
                <span>Focus on user needs and goals</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-emerald-500 shrink-0 mt-0.5" />
                <span>Iterative design approach</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-emerald-500 shrink-0 mt-0.5" />
                <span>Validation through user testing</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-emerald-500 shrink-0 mt-0.5" />
                <span>Consistent and cohesive designs</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src={AppAsset.UIUXServiceHero}
              alt="UI/UX Design Process"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our UI/UX Design Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designServices.map((service, index) => (
            <Card key={index} className="border-slate-200">
              <CardHeader className="pb-2">
                <div className="mb-2">{service.icon}</div>
                <CardTitle className="text-xl">{service.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 text-sm">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-slate-50 rounded-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Design Process</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">1. Discovery & Research</h3>
                  <p className="text-slate-600">
                    We start by understanding your business goals, target audience, and project requirements. We conduct
                    user research through interviews, surveys, and competitive analysis to gather insights.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2. Information Architecture</h3>
                  <p className="text-slate-600">
                    We organize your content and features in a way that makes sense to users, creating user flows,
                    sitemaps, and navigation structures that feel intuitive.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">3. Wireframing & Prototyping</h3>
                  <p className="text-slate-600">
                    We create low-fidelity wireframes to establish layout and functionality, then develop interactive
                    prototypes that simulate the user experience for testing.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">4. Visual Design</h3>
                  <p className="text-slate-600">
                    We apply your brand identity to create high-fidelity designs that are not only beautiful but also
                    enhance usability and align with user expectations.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">5. Testing & Refinement</h3>
                  <p className="text-slate-600">
                    We test designs with real users to identify usability issues and refine the design based on feedback
                    before handing off to development.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200 bg-primary/20">
              <Image
                src={AppAsset.UIUXServiceHero1}
                alt="Design Process"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Comprehensive UI/UX Design Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {services.map((service, index) => (
            <div key={index} className="flex items-start py-2">
              <CheckCircle className="h-5 w-5 mr-2 text-emerald-500 shrink-0 mt-0.5" />
              <span>{service}</span>
            </div>
          ))}
        </div>
      </section>

      <UserExperienceCTA
        title="Ready to Create an Exceptional User Experience?"
        subTitle=" Let's design intuitive, engaging digital experiences that delight your users and help your business succeed."
        type="ui-ux-design" />
    </div>
  )
}
