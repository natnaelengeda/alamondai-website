import React from 'react'
import Link from 'next/link'

import { Button } from './ui/button'

interface ServicesTitleProps {
  title?: string;
  subTitle?: string;
  type?: string;
}

export default function ServicesTitle({ title, subTitle, type }: ServicesTitleProps) {
  return (
    <section className="mb-16 max-w-4xl mx-auto text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
      <p className="text-xl text-slate-600 mb-8">
        {subTitle}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg">
          <Link
            href={`/contact?type=${type}`}
            className='text-lg'>
            Get Started
          </Link>
        </Button>
      </div>
    </section>
  )
}
