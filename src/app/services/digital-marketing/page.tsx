import Image from "next/image"

// Components
import ServicesTitle from "@/components/services-title"
import UserExperienceCTA from "@/components/user-experience-cta"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Icons
import { CheckCircle, Search, Share2, Mail, BarChart4, Zap, Target } from "lucide-react"

import AppAsset from "@/core/AppAsset"
export const metadata = {
  title: "Digital Marketing Services | YourAgency",
  description: "Strategic marketing solutions to grow your online presence and reach your target audience.",
}

export default function DigitalMarketingPage() {
  const marketingServices = [
    {
      name: "SEO & Content Strategy",
      description:
        "Improving your search engine visibility through keyword research, on-page optimization, and quality content.",
      icon: <Search className="h-8 w-8 text-slate-800" />,
    },
    {
      name: "Social Media Marketing",
      description:
        "Building your brand presence on social platforms through strategic content and community engagement.",
      icon: <Share2 className="h-8 w-8 text-slate-800" />,
    },
    {
      name: "Email Marketing",
      description:
        "Nurturing leads and engaging customers through personalized email campaigns that drive conversions.",
      icon: <Mail className="h-8 w-8 text-slate-800" />,
    },
    {
      name: "Analytics & Reporting",
      description:
        "Tracking performance metrics and providing actionable insights to continually improve your marketing efforts.",
      icon: <BarChart4 className="h-8 w-8 text-slate-800" />,
    },
    {
      name: "PPC Advertising",
      description:
        "Managing paid advertising campaigns on Google, social media, and other platforms to drive targeted traffic.",
      icon: <Zap className="h-8 w-8 text-slate-800" />,
    },
    {
      name: "Conversion Optimization",
      description: "Improving website and landing page performance to turn more visitors into customers.",
      icon: <Target className="h-8 w-8 text-slate-800" />,
    },
  ]

  const services = [
    "SEO and content strategy",
    "Social media marketing",
    "Email marketing campaigns",
    "PPC advertising",
    "Analytics and reporting",
    "Conversion rate optimization",
    "Content creation",
    "Influencer marketing",
    "Local SEO",
    "Marketing automation",
  ]

  return (
    <div className="container mx-auto px-4 py-12">

      <ServicesTitle
        title="Digital Marketing"
        subTitle="Strategic marketing solutions to grow your online presence and reach your target audience."
        type="digital-marketing" />

      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Strategic Digital Marketing for Business Growth</h2>
            <p className="text-slate-600 mb-6">
              {`In today's digital landscape, having a comprehensive marketing strategy is essential for business growth.
              Our digital marketing services help you reach your target audience, build brand awareness, and drive
              conversions through data-driven strategies tailored to your business goals.`}
            </p>
            <p className="text-slate-600 mb-6">
              {`We combine the latest marketing techniques with in-depth analytics to create campaigns that not only
              attract attention but also deliver measurable results. From SEO and content marketing to social media and
              paid advertising, we provide the full spectrum of digital marketing services.`}
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-emerald-500 shrink-0 mt-0.5" />
                <span>Data-driven marketing strategies</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-emerald-500 shrink-0 mt-0.5" />
                <span>Targeted audience engagement</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-emerald-500 shrink-0 mt-0.5" />
                <span>Multi-channel marketing approach</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-emerald-500 shrink-0 mt-0.5" />
                <span>Regular performance reporting</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-emerald-500 shrink-0 mt-0.5" />
                <span>Continuous optimization</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src={AppAsset.DigitalMarketingServiceHero1}
              alt="Digital Marketing"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Digital Marketing Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {marketingServices.map((service, index) => (
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
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Digital Marketing Approach</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">1. Research & Strategy</h3>
                  <p className="text-slate-600">
                    We begin by understanding your business, target audience, and competitors. Based on this research,
                    we develop a comprehensive marketing strategy aligned with your goals.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2. Implementation</h3>
                  <p className="text-slate-600">
                    We execute the strategy across relevant channels, creating compelling content, optimizing your
                    website for search engines, and managing paid advertising campaigns.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">3. Analysis & Reporting</h3>
                  <p className="text-slate-600">
                    We continuously monitor campaign performance using advanced analytics tools, providing regular
                    reports with key metrics and insights.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">4. Optimization</h3>
                  <p className="text-slate-600">
                    Based on data and insights, we refine our approach, optimizing campaigns to improve performance and
                    maximize your marketing ROI.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src={AppAsset.DigitalMarketingServiceHero2}
                alt="Marketing Approach"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Comprehensive Digital Marketing Services</h2>
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
        title="Ready to Grow Your Online Presence?"
        subTitle="Let's create a strategic digital marketing plan that will help you reach your target audience and achieve your business goals."
        type="digital-marketing" />
    </div>
  )
}
