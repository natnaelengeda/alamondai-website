'use client';
import { useEffect, useState } from 'react';

import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// App Asset
import AppAsset from '@/core/AppAsset';

// Utils
import { truncateText } from '@/lib/truncateText';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';

export default function BlogCard({ blog }: { blog: any }) {
  const [imgSource, setImgSource] = useState<any>(AppAsset.DefaultBlogImage);

  useEffect(() => {
    if (blog.cover_image_url) {
      setImgSource(`${process.env.NEXT_PUBLIC_API_URL}/blog/image/${blog.cover_image_url.id}`);
    }
  }, [blog.cover_image_url]);

  return (
    <Card
      className="w-full h-[30rem] overflow-hidden">
      <div className="relative overflow-hidden">
        <Image
          src={imgSource}
          width={400}
          height={200}
          alt={`Cover for ${blog.title}`}
          className="object-cover w-full h-60"
        />
      </div>
      <CardHeader>
        <div className="mb-1 text-sm text-gray-500">April , 2025</div>
        <CardTitle className="line-clamp-1">{truncateText(blog.title, 55)}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-500 line-clamp-3">
          {truncateText(blog.excerpt, 70)}
        </p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="link" className="px-0">
          <Link
            target='_blank'
            href={`${process.env.NEXT_PUBLIC_BLOG_URL}/blog/${blog.slug}`}>
            Read More <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
