'use client'
import { Suspense } from 'react';

import Image from "next/image"
import { useSearchParams } from 'next/navigation'

// Components
import { Card, CardContent } from "@/components/ui/card"
import ContactForm from "./components/Form"

// App Asset
import AppAsset from "@/core/AppAsset"

// Icons
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <Suspense>
      <ContactPageSuspense />
    </Suspense>
  );
}

function ContactPageSuspense() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type');

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary to-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                Contact Us
              </h1>
              <p className="max-w-[600px] text-gray-300 md:text-xl">
                {`We'd love to hear from you. Get in touch with our team.`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="w-full py-12 bg-white md:py-24 lg:py-32">
        <div className="container w-full px-4 mx-auto md:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <ContactForm
              type={type} />

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-2 text-2xl font-bold">Contact Information</h2>
                <p className="text-gray-500">Reach out to us directly or visit our office.</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Card>
                  <CardContent className="flex items-start p-6 space-x-4">
                    <div className="p-3 rounded-full bg-slate-100">
                      <Phone className="w-6 h-6 text-slate-900" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="mt-1 text-sm text-gray-500">Mon-Fri from 8am to 5pm</p>
                      <a href="tel:+251936657001" className="block mt-2 font-medium text-slate-900 hover:underline">
                        +251 9 3665 7001
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start p-6 space-x-4">
                    <div className="p-3 rounded-full bg-slate-100">
                      <Mail className="w-6 h-6 text-slate-900" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="mt-1 text-sm text-gray-500">{`We'll`} respond as soon as possible</p>
                      <a
                        href="mailto:info@alamondaii.com"
                        className="block mt-2 font-medium text-slate-900 hover:underline">
                        info@alamondaiI.com
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start p-6 space-x-4">
                    <div className="p-3 rounded-full bg-slate-100">
                      <MapPin className="w-6 h-6 text-slate-900" />
                    </div>
                    <div>
                      <h3 className="font-medium">Office</h3>
                      <p className="mt-1 text-sm text-gray-500">Come say hello</p>
                      <address className="mt-2 not-italic font-medium text-slate-900">
                        Kenenisa Ave Street
                        <br />
                        Addis Ababa, Ethiopia
                      </address>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start p-6 space-x-4">
                    <div className="p-3 rounded-full bg-slate-100">
                      <Clock className="w-6 h-6 text-slate-900" />
                    </div>
                    <div>
                      <h3 className="font-medium">Working Hours</h3>
                      <p className="mt-1 text-sm text-gray-500">{`We're available`}</p>
                      <p className="mt-2 font-medium text-slate-900">
                        Monday - Friday: 8am - 5pm
                        <br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="relative h-[360px] overflow-hidden rounded-lg border border-gray-200">
                <Image
                  src={AppAsset.ContactPageHeroImage}
                  alt="Office location map"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="container w-full px-4 mx-auto md:px-6">
          <div className="flex flex-col items-center justify-center mb-12 space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find answers to common questions about our services and process.
              </p>
            </div>
          </div>

          <div className="grid max-w-4xl gap-6 mx-auto">
            {[
              {
                question: "What services do you offer?",
                answer:
                  "We offer a comprehensive range of digital services including web development, UI/UX design, mobile app development, digital marketing, SEO optimization, and branding solutions.",
              },
              {
                question: "How long does it take to complete a project?",
                answer:
                  "Project timelines vary depending on the scope and complexity. A simple website might take 2-4 weeks, while a complex web application could take 2-3 months. We'll provide a detailed timeline during our initial consultation.",
              },
              {
                question: "What is your pricing structure?",
                answer:
                  "We offer customized pricing based on your specific requirements. We can work with fixed-price quotes for well-defined projects or hourly rates for ongoing work. Contact us for a personalized quote.",
              },
              {
                question: "Do you provide ongoing maintenance and support?",
                answer:
                  "Yes, we offer various maintenance and support packages to ensure your digital assets remain secure, up-to-date, and performing optimally after launch.",
              },
              {
                question: "How do we get started working together?",
                answer:
                  "The process begins with an initial consultation where we discuss your goals and requirements. After that, we'll provide a proposal outlining the scope, timeline, and cost. Once approved, we'll begin the discovery phase of the project.",
              },
            ].map((faq, index) => (
              <div key={index} className="p-6 bg-white border rounded-lg">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <p className="mt-2 text-gray-500">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

