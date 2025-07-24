import Image from "next/image"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ServicesTitle from "@/components/services-title"
import UserExperienceCTA from "@/components/user-experience-cta"
import AppAsset from "@/core/AppAsset"

// Icons
import { CheckCircle, Code, Database, Layout, Server, Smartphone } from "lucide-react"

export const metadata = {
  title: "Mobile App Development Services | YourAgency",
  description:
    "Native and cross-platform mobile applications built with Flutter and Kotlin that deliver exceptional user experiences.",
}

export default function MobileAppDevelopmentPage() {
  const technologies = [
    {
      name: "Flutter",
      description:
        "Building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.",
      icon: <Code className="h-8 w-8 text-slate-800" />,
    },
    {
      name: "Kotlin",
      description:
        "Developing native Android applications with the modern, concise, and safe programming language from JetBrains.",
      icon: <Smartphone className="h-8 w-8 text-slate-800" />,
    },
    {
      name: "Swift",
      description: "Creating powerful iOS applications with Apple's modern and safe programming language.",
      icon: <Code className="h-8 w-8 text-slate-800" />,
    },
    {
      name: "Firebase",
      description: "Integrating Google's mobile platform for analytics, databases, messaging, and crash reporting.",
      icon: <Database className="h-8 w-8 text-slate-800" />,
    },
    {
      name: "Backend APIs",
      description: "Connecting your mobile app to robust backend systems with RESTful or GraphQL APIs.",
      icon: <Server className="h-8 w-8 text-slate-800" />,
    },
    {
      name: "UI/UX Design",
      description: "Creating intuitive and engaging mobile interfaces following platform-specific design guidelines.",
      icon: <Layout className="h-8 w-8 text-slate-800" />,
    },
  ]

  const services = [
    "iOS and Android development",
    "Cross-platform solutions with Flutter",
    "UI/UX design for mobile",
    "App store optimization",
    "Performance optimization",
    "Maintenance and support",
    "Push notifications",
    "In-app purchases",
    "User authentication",
    "Offline functionality",
  ]

  return (
    <div className="container mx-auto px-4 py-12">

      <ServicesTitle
        title="Mobile App Development"
        subTitle=" Native and cross-platform mobile applications that deliver exceptional user experiences."
        type="mobile-app-development" />

      <section className="mb-16">
        <Tabs defaultValue="flutter" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="flutter">Flutter</TabsTrigger>
              <TabsTrigger value="kotlin">Kotlin</TabsTrigger>
              <TabsTrigger value="swift">Swift</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="flutter">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Cross-Platform Excellence with Flutter</h2>
                <p className="text-slate-600 mb-6">
                  {`Flutter is Google's UI toolkit for building beautiful, natively compiled applications for mobile, web,
                  and desktop from a single codebase. Our Flutter development team creates high-performance applications
                  that look and feel natural on both iOS and Android platforms.`}
                </p>
                <p className="text-slate-600 mb-6">
                  {`With Flutter, we can deliver your app faster and maintain a consistent experience across platforms
                  while reducing development costs. We leverage Flutter's rich set of pre-designed widgets to create
                  beautiful, customized interfaces that align with your brand.`}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Single codebase for multiple platforms</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Faster development and time-to-market</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Native-like performance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Beautiful, customizable UI</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Hot reload for faster development</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={AppAsset.FlutterIllustrationImage}
                  alt="Flutter Development"
                  width={600}
                  height={600}
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="kotlin">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Native Android Development with Kotlin</h2>
                <p className="text-slate-600 mb-6">
                  Kotlin is a modern, concise, and safe programming language that makes Android development more
                  efficient and enjoyable. Our Kotlin developers build high-performance native Android applications that
                  leverage the full capabilities of the Android platform.
                </p>
                <p className="text-slate-600 mb-6">
                  {`As Google's preferred language for Android development, Kotlin enables us to create applications that
                  are more stable, secure, and maintainable. We utilize Kotlin's modern features like null safety,
                  extension functions, and coroutines to deliver robust applications.`}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Full native Android performance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Improved app stability and security</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{`Integration with Android's latest features`}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Material Design implementation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Enhanced developer productivity</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200">
                <Image
                  src={AppAsset.KotlinIllustrationImage}
                  alt="Kotlin Development"
                  width={600}
                  height={600}
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="swift">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Native iOS Development with Swift</h2>
                <p className="text-slate-600 mb-6">
                  {`Swift is Apple's powerful and intuitive programming language for iOS, macOS, watchOS, and tvOS. Our
                  Swift developers create elegant and high-performance native iOS applications that leverage the full
                  capabilities of Apple's ecosystem.`}
                </p>
                <p className="text-slate-600 mb-6">
                  {`We utilize Swift's modern features like optionals, type inference, and automatic memory management to
                  build applications that are stable, secure, and optimized for the latest iOS devices.`}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Pure native iOS performance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{`Seamless integration with Apple's ecosystem`}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Latest iOS features and capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Human Interface Guidelines implementation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-emerald-500 shrink-0 mt-0.5" />
                    <span>App Store optimization</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={AppAsset.SwiftIllustrationImage}
                  alt="Swift Development"
                  width={600}
                  height={600}
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Mobile Development Technologies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <Card key={index} className="border-slate-200">
              <CardHeader className="pb-2">
                <div className="mb-2">{tech.icon}</div>
                <CardTitle className="text-xl">{tech.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 text-sm">{tech.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-slate-50 rounded-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mobile App Development Process</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">1. Discovery & Planning</h3>
                  <p className="text-slate-600">
                    {` We begin by understanding your business goals, target audience, and project requirements. This helps
                    us choose the right technology stack and create a detailed development roadmap.`}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2. UI/UX Design</h3>
                  <p className="text-slate-600">
                    {`Our designers create wireframes and visual designs following platform-specific guidelines while
                    maintaining your brand identity. We create interactive prototypes to visualize the user experience.`}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">3. Development</h3>
                  <p className="text-slate-600">
                    {`Our developers build your mobile app using Flutter, Kotlin, or Swift based on your requirements. We
                    follow best practices for clean, maintainable code and optimal performance.`}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">4. Testing & Deployment</h3>
                  <p className="text-slate-600">
                    {`We rigorously test your app across devices before deploying to the App Store and Google Play Store,
                    ensuring it meets all platform requirements and guidelines.`}
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src={AppAsset.MobileAppDevelopmentHero2}
                alt="Mobile App Development Process"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Comprehensive Mobile App Development Services</h2>
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
        title="Ready to Launch Your Mobile App?"
        subTitle="Let's create a beautiful, high-performance mobile application that will delight your users and help your business grow."
        type="mobile-app-development" />

    </div>
  )
}
