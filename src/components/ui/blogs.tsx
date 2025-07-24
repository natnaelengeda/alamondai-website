'use client';
import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

import BlogCard from "../blog-card";

import axios from "@/utils/axios";
import toast from "react-hot-toast";
import BlogLoadingSkeleton from "../blog-loading-skeleton";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchFeaturedBlgos = async () => {
    axios.get("/blog/featured-alamondai")
      .then((response) => {
        const status = response.status;
        if (status == 200) {
          console.log(response.status);
          setBlogs(response.data);
          setIsLoading(false);
        }
      }).catch((error) => {
        console.error("Internal Server Error")
        toast.error("Unable to fetch Post");
      })
  }

  useEffect(() => {
    fetchFeaturedBlgos();
  }, []);

  return (
    <section className="w-full py-12 bg-white md:py-24 lg:py-32">
      <div className="container w-full px-4 mx-auto md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block px-3 py-1 text-sm bg-gray-100 rounded-lg">Blog</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Latest Insights</h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Stay updated with our latest articles and industry insights.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 mx-auto mt-12 max-w-7xl md:grid-cols-2 lg:grid-cols-3">
          {
            !isLoading ?
              blogs.length !== 0 &&
              blogs.map((blog, index) => {
                return <BlogCard blog={blog} key={index} />
              }) :
              <>
                {
                  [1, 2, 3].map((_, index: number) => {
                    return <BlogLoadingSkeleton key={index} />
                  })
                }
              </>

          }
        </div>
        <div className="flex justify-center mt-10">
          <Button asChild variant="outline">
            <Link href="/blog">View All Posts</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
