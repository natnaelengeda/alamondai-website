import React from 'react'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function BlogLoadingSkeleton() {
  return (
    <Card
      className="w-full h-[30rem] overflow-hidden animate-pulse">
      {/* Image Skeleton */}
      <div className="relative w-full overflow-hidden bg-gray-200 h-60" />

      {/* Header Skeleton */}
      <CardHeader>
        <div className="w-24 h-4 mb-1 bg-gray-200 rounded" />
        <CardTitle>
          <div className="w-3/4 h-6 bg-gray-200 rounded" />
        </CardTitle>
      </CardHeader>

      {/* Content Skeleton */}
      <CardContent className="space-y-2">
        <div className="w-full h-4 bg-gray-200 rounded" />
        <div className="w-5/6 h-4 bg-gray-200 rounded" />
        <div className="w-2/3 h-4 bg-gray-200 rounded" />
      </CardContent>

      {/* Footer Skeleton */}
      <CardFooter>
        <div className="w-24 h-5 bg-gray-200 rounded" />
      </CardFooter>
    </Card>
  )
}
