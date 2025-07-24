import Image from "next/image"

// Components
import ServicesTitle from "@/components/services-title"
import UserExperienceCTA from "@/components/user-experience-cta"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// App Asset
import AppAsset from "@/core/AppAsset"

// Icons
import { CheckCircle, Search, FileText, Code, Database, Globe, Map } from "lucide-react"

export const metadata = {
  title: "SEO Services | YourAgency",
  description: "Comprehensive search engine optimization to improve your visibility and organic traffic.",
}

export default function SeoServicesPage() {
  const seoServices = [
    {
      name: "Keyword Research",
      description:
        "Identifying the most valuable and relevant keywords for your business to target in your SEO strategy.",
      icon: <Search className="h-8 w-8 text-slate-800" />,
    },
    {
      name: "On-Page SEO",
      description: "Optimizing your website content, meta tags, and structure to improve search engine visibility.",
      icon: <FileText className="h-8 w-8 text-slate-800" />,
    },
    {
      name: "Technical SEO",
      description: "Ensuring your website's technical elements are optimized for search engine crawling and indexing.",
      icon: <Code className="h-8 w-8 text-slate-800" />,
    },
    {
      name: "Link Building",
      description: "Building high-quality backlinks to improve your website's authority and search engine rankings.",
      icon: <Database className="h-8 w-8 text-slate-800" />,
    },
    {
      name: "Local SEO",
      description: "Optimizing your online presence to attract more business from relevant local searches.",
      icon: <Map className="h-8 w-8 text-slate-800" />,
    },
    {
      name: "SEO Reporting",
      description: "Tracking and reporting on key SEO metrics to measure progress and identify opportunities.",
      icon: <Globe className="h-8 w-8 text-slate-800" />,
    },
  ]

  const services = [
    "Keyword research and strategy",
    "On-page SEO optimization",
    "Technical SEO audits",
    "Link building",
    "Local SEO",
    "SEO reporting and analytics",
    "Content optimization",
    "Competitor analysis",
    "Mobile SEO",
    "E-commerce SEO",
  ]

  return (
    <div className="container mx-auto px-4 py-12">

      <ServicesTitle
        title="SEO Services"
        subTitle="Comprehensive search engine optimization to improve your visibility and organic traffic."
        type="seo-optimization" />

      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Improve Your Search Visibility and Organic Traffic</h2>
            <p className="text-slate-600 mb-6">
              Search Engine Optimization (SEO) is essential for businesses that want to be found online. Our
              comprehensive SEO services help you improve your visibility in search engine results, drive more organic
              traffic to your website, and increase conversions.
            </p>
            <p className="text-slate-600 mb-6">
              We take a holistic approach to SEO, addressing all aspects that impact your search rankings, from
              technical issues and on-page optimization to content quality and backlink profiles. Our strategies are
              customized to your specific business goals and target audience.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-emerald-500 shrink-0 mt-0.5" />
                <span>Customized SEO strategies</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-emerald-500 shrink-0 mt-0.5" />
                <span>Comprehensive technical audits</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-emerald-500 shrink-0 mt-0.5" />
                <span>Content optimization for keywords</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-emerald-500 shrink-0 mt-0.5" />
                <span>Ethical link building</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-emerald-500 shrink-0 mt-0.5" />
                <span>Regular performance reporting</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src={AppAsset.SEOServiceHero1}
              alt="SEO Services"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our SEO Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {seoServices.map((service, index) => (
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
              <h2 className="text-3xl font-bold mb-6">Our SEO Process</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">1. SEO Audit & Analysis</h3>
                  <p className="text-slate-600">
                    We begin with a comprehensive audit of your website and current SEO performance, analyzing technical
                    issues, on-page elements, content quality, and backlink profile.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2. Keyword Research & Strategy</h3>
                  <p className="text-slate-600">
                    We identify the most valuable and relevant keywords for your business, developing a strategic plan
                    to target these keywords across your website.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">3. On-Page & Technical Optimization</h3>
                  <p className="text-slate-600">
                    {`We optimize your website's on-page elements and fix technical issues to improve search engine
                    crawling, indexing, and ranking capabilities.`}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">4. Content Development & Optimization</h3>
                  <p className="text-slate-600">
                    We create and optimize content that targets your keywords, provides value to users, and establishes
                    your authority in your industry.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">5. Link Building & Off-Page SEO</h3>
                  <p className="text-slate-600">
                    {`We implement ethical link building strategies to improve your website's authority and enhance your
                    off-page SEO factors.`}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">6. Monitoring & Reporting</h3>
                  <p className="text-slate-600">
                    We continuously monitor your SEO performance, providing regular reports and recommendations for
                    ongoing improvement.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src={AppAsset.SEOServiceHero2}
                alt="SEO Process"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Comprehensive SEO Services</h2>
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
        title="Ready to Improve Your Search Rankings?"
        subTitle=" Let's create a customized SEO strategy that will help your business get found online and drive more organic traffic."
        type="seo-optimication" />
    </div>
  )
}
