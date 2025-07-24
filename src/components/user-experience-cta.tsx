
import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'

interface UserExperienceCTAProps {
  title: string;
  subTitle: string;
  type: string;
}

export default function UserExperienceCTA({ title, subTitle, type }: UserExperienceCTAProps) {
  return (
    <section className="text-center bg-slate-900 text-white p-8 md:p-12 rounded-lg">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        {subTitle}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" variant="default" className="bg-white text-slate-900 hover:bg-slate-100 h-12 text-lg">
          <Link
            href={`/contact?type=${type}`}>
            Get in Touch
          </Link>
        </Button>
        <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-slate-700 hover:text-white h-12 text-lg">
          <Link
            href="/portfolio">
            View Our Work
          </Link>
        </Button>
      </div>
    </section>
  )
}
