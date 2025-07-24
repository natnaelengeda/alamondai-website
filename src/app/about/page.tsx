import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Award, Users, Zap, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

// App Asset
import AppAsset from "@/core/AppAsset"

export const metadata = {
  title: "About Us",
  description:
    "Learn about our company, our mission, values, and the talented team behind our successful digital projects.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary to-secondary">
        <div className="w-full mx-auto container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">About Us</h1>
              <p className="max-w-[600px] text-gray-300 md:text-xl">
                {`We're a team of passionate digital experts committed to delivering exceptional results.`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="w-full mx-auto container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Our Story</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Who We Are</h2>
              <p className="text-gray-500 md:text-xl">
                {`Founded in 2020, Alamondai has grown from a small team of passionate developers to a full-service
                Alamondai with a global client base. Our journey began with a simple mission: to help businesses
                succeed in the digital landscape through innovative solutions and exceptional service.`}
              </p>
              <p className="text-gray-500">
                {`
                Over the years, we've worked with Individuals, Hospoitals, and NGO clients across various industries,
                delivering projects that drive real business results. Our team's expertise spans web development, UI/UX
                design, digital marketing, and more, allowing us to provide comprehensive solutions tailored to each
                client's unique needs.
                `}
              </p>
              <p className="text-gray-500">
                {`
                What sets us apart is our commitment to building long-term partnerships with our clients. We don't just
                deliver projects; we become an extension of your team, working collaboratively to achieve your business
                goals.
                `}
              </p>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src={AppAsset.AboutPageHeroImage}
                alt="Our team working together"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="w-full mx-auto container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Our Purpose</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Mission & Values</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The principles that guide our work and define our culture.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-500">
                {`
                To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and
                create lasting value. We strive to be a trusted partner for our clients, helping them navigate the
                digital landscape and achieve their business objectives.
                `}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-500">
                To be the leading Alamondai known for creating exceptional digital experiences that transform
                businesses and set new industry standards. We envision a world where technology enhances human
                connections and makes businesses more accessible, efficient, and impactful.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Users className="h-6 w-6 text-white" />,
                title: "Collaboration",
                description:
                  "We believe in the power of teamwork and partnership, working closely with our clients to achieve shared goals.",
              },
              {
                icon: <CheckCircle className="h-6 w-6 text-white" />,
                title: "Excellence",
                description:
                  "We are committed to delivering the highest quality work, constantly pushing boundaries and exceeding expectations.",
              },
              {
                icon: <Zap className="h-6 w-6 text-white" />,
                title: "Innovation",
                description:
                  "We embrace new technologies and approaches, staying ahead of trends to deliver cutting-edge solutions.",
              },
              {
                icon: <Heart className="h-6 w-6 text-white" />,
                title: "Integrity",
                description:
                  "We operate with honesty, transparency, and ethical practices in all our client and team relationships.",
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white hidden">
        <div className="w-full mx-auto container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Our Team</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet the Experts</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The talented individuals who make our agency exceptional.
              </p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Sarah Johnson",
                role: "Founder & CEO",
                image: "/placeholder.svg?height=300&width=300",
                bio: "With over 15 years of experience in digital strategy and business development, Sarah leads our agency with vision and passion.",
              },
              {
                name: "Michael Chen",
                role: "Creative Director",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Michael brings 10+ years of design expertise, creating stunning visual identities and user experiences for our clients.",
              },
              {
                name: "Emma Rodriguez",
                role: "Lead Developer",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Emma is a full-stack developer with expertise in the latest web technologies and a passion for clean, efficient code.",
              },
              {
                name: "David Kim",
                role: "Marketing Strategist",
                image: "/placeholder.svg?height=300&width=300",
                bio: "David specializes in digital marketing strategies that drive traffic, engagement, and conversions for our clients.",
              },
            ].map((member, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm">{member.bio}</p>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-gray-500">{member.role}</p>
                </div>
              </div>
            ))}``
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="w-full mx-auto container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { number: "15+", label: "Projects Completed" },
              { number: "12+", label: "Happy Clients" },
              { number: "10+", label: "Team Members" },
              { number: "3+", label: "Years of Experience" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="w-full mx-auto container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Work With Us?</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {`Let's discuss how we can help your business grow with our tailored digital solutions.`}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-primary text-white hover:opacity-90 h-12 text-lg">
                <Link href="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

