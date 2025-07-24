import React from 'react'

export default function FeaturedBlogLoadingSkeleton() {
  return (
    <section className="w-full py-12 bg-white">
      <div className="container w-full px-4 mx-auto md:px-6 animate-pulse">
        <h2 className="w-48 h-6 mb-8 text-2xl font-bold bg-gray-200 rounded"></h2>

        <div className="grid items-center gap-8 md:grid-cols-2">
          {/* Image Skeleton */}
          <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg bg-gray-200" />

          {/* Text Skeleton */}
          <div>
            {/* Category + Date */}
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex w-20 h-5 bg-gray-200 rounded-full" />
              <span className="w-16 h-4 bg-gray-200 rounded" />
            </div>

            {/* Title */}
            <div className="w-64 h-6 mb-2 bg-gray-200 rounded" />

            {/* Excerpt */}
            <div className="mb-4 space-y-2">
              <div className="w-full h-4 bg-gray-200 rounded" />
              <div className="w-5/6 h-4 bg-gray-200 rounded" />
            </div>

            {/* Author */}
            <div className="w-32 h-4 mb-4 bg-gray-200 rounded" />

            {/* Button */}
            <div className="h-10 bg-gray-200 rounded w-36" />
          </div>
        </div>
      </div>
    </section>
  )
}
