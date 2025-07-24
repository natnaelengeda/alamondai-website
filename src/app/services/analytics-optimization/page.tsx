import Image from "next/image"

// Components
import ServicesTitle from "@/components/services-title"
import UserExperienceCTA from "@/components/user-experience-cta"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// App Asset
import AppAsset from "@/core/AppAsset"

// Icons
import { CheckCircle, BarChart3, LineChart, PieChartIcon as Pie, Split, Target, Gauge } from "lucide-react";

export const metadata = {
  title: "Analytics & Optimization Services | YourAgency",
  description: "Data-driven insights to improve your website's performance and user engagement.",
}

export default function AnalyticsOptimizationPage() {
  const analyticsServices = [
    {
      name: "Website Analytics Setup",
      description: "Implementing comprehensive analytics tools to track user behavior and website performance.",
      icon: <BarChart3 className="h-8 w-8 text-slate-800" />
    },
    {
      name: "User Behavior Analysis",
      description: "Understanding how users interact with your website to identify opportunities for improvement.",
      icon: <LineChart className="h-8 w-8 text-slate-800" />
    },
    {
      name: "Conversion Funnel Optimization",
      description: "Analyzing and optimizing each step of "
    },
    {
      name: "Conversion Funnel Optimization",
      description: "Analyzing and optimizing each step of your conversion path to improve overall conversion rates.",
      icon: <Pie className="h-8 w-8 text-slate-800" />
    },
    {
      name: "A/B Testing",
      description: "Testing different website elements to determine which versions perform better with your audience.",
      icon: <Split className="h-8 w-8 text-slate-800" />
    },
    {
      name: "Performance Monitoring",
      description: "Continuously tracking website performance metrics to identify and address issues quickly.",
      icon: <Gauge className="h-8 w-8 text-slate-800" />
    },
    {
      name: "ROI Tracking",
      description: "Measuring the effectiveness of your digital marketing efforts in terms of return on investment.",
      icon: <Target className="h-8 w-8 text-slate-800" />
    }
  ];

  const services = [
    "Website analytics setup",
    "User behavior analysis",
    "Conversion funnel optimization",
    "A/B testing",
    "Performance monitoring",
    "ROI tracking",
    "Heatmap analysis",
    "User journey mapping",
    "Page speed optimization",
    "Custom reporting dashboards",
  ]

  return (
    <div className="container mx-auto px-4 py-12">


      <ServicesTitle
        title="Analytics & Optimization"
        subTitle="Data-driven insights to improve your website's performance and user engagement."
        type="analytics-optimization" />

      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Data-Driven Decision Making</h2>
            <p className="text-slate-600 mb-6">
              {`  In the digital world, data is your most valuable asset. Our analytics and optimization services help you
              collect, analyze, and act on data to make informed decisions that improve your website's performance and
              your business outcomes.`}
            </p>
            <p className="text-slate-600 mb-6">
              {`We go beyond basic metrics like page views and bounce rates to provide deep insights into user behavior,
              conversion paths, and the effectiveness of your digital marketing efforts. By understanding what works and
              what doesn't, we can help you optimize your website for better performance and higher conversion rates.`}
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-emerald-500 shrink-0 mt-0.5" />
                <span>Comprehensive data collection</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-emerald-500 shrink-0 mt-0.5" />
                <span>Actionable insights from complex data</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-emerald-500 shrink-0 mt-0.5" />
                <span>Continuous improvement approach</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-emerald-500 shrink-0 mt-0.5" />
                <span>Scientific testing methodologies</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-emerald-500 shrink-0 mt-0.5" />
                <span>Clear, actionable reporting</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src={AppAsset.AnalyticsOptimizationServiceHero1}
              alt="Analytics & Optimization"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Analytics & Optimization Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {analyticsServices.map((service, index) => (
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
              <h2 className="text-3xl font-bold mb-6">Our Analytics & Optimization Process</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">1. Audit & Setup</h3>
                  <p className="text-slate-600">
                    We begin by auditing your current analytics setup and implementing comprehensive tracking tools to
                    collect the data you need for informed decision-making.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2. Analysis & Insights</h3>
                  <p className="text-slate-600">
                    We analyze user behavior, traffic sources, conversion paths, and other key metrics to identify
                    opportunities for improvement and generate actionable insights.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">3. Testing & Optimization</h3>
                  <p className="text-slate-600">
                    Based on our analysis, we develop and implement testing plans to optimize your website, using A/B
                    testing, multivariate testing, and other scientific methods.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">4. Reporting & Recommendations</h3>
                  <p className="text-slate-600">
                    We provide regular, easy-to-understand reports with key metrics and actionable recommendations for
                    continuous improvement.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src={AppAsset.AnalyticsOptimizationServiceHero2}
                alt="Analytics Process"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Comprehensive Analytics & Optimization Services</h2>
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
        title="Unlock Your Website's Potential"
        subTitle="Let's use data-driven insights to improve your website's performance, increase conversions, and maximize your ROI."
        type="analytics-optimization" />
    </div>
  )
}
