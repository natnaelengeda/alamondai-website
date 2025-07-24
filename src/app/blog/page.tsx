"use client";
import { useEffect, useState } from "react";

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Search } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { useAllBlog, useFeaturedBlog } from "../../api/blog"
import { truncateText } from "../../lib/truncateText"
import AppAsset from "../../core/AppAsset";
import { getRegularDate } from "../../utils/convertFullDate";
import BlogCard from "../../components/blog-card";
import BlogLoadingSkeleton from "../../components/blog-loading-skeleton";
import FeaturedBlogLoadingSkeleton from "../../components/featired-blog-loading-skeleton";
import SubscribeNewsLetterBlogPage from "../../components/subscribe-newsletter-blog-page";

export default function BlogPage() {
  const [limit] = useState<number>(9);
  const [offSet, setOffset] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  const { data, error, isPending } = useAllBlog(limit, offSet);
  const { data: featuredData, isPending: isFeaturedDataPending, isError: isFeaturedDataError } = useFeaturedBlog();

  useEffect(() => {
    if (data?.totalCount) {
      setTotal(data?.totalCount);
    }
  }, [data]);

  const totalPages = Math.ceil(total / limit);
  const currentPage = Math.floor(offSet / limit) + 1;

  const handlePageClick = (page: number) => {
    setOffset((page - 1) * limit);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleNext = () => {
    if (offSet + limit < total) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      setOffset(offSet + limit);
    }
  };

  const handlePrev = () => {
    if (offSet > 0) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      setOffset(offSet - limit);
    }
  };


  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary to-secondary">
        <div className="container w-full px-4 mx-auto md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">Our Blog</h1>
              <p className="max-w-[600px] text-gray-300 md:text-xl">
                Insights, tips, and industry news to keep you informed and inspired.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="w-full py-8 bg-white border-b">
        <div className="container w-full px-4 mx-auto md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="w-full md:w-1/3">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input type="search" placeholder="Search articles..." className="w-full pl-8" />
              </div>
            </div>
            <div className="flex-wrap justify-center hidden gap-2">
              <Button variant="outline" className="text-sm rounded-full">
                All
              </Button>
              {/* {categories.map((category, index) => (
                <Button key={index} variant="outline" className="text-sm rounded-full">
                  {category}
                </Button>
              ))} */}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {
        isFeaturedDataPending && (
          <FeaturedBlogLoadingSkeleton />
        )
      }
      {
        featuredData && (
          <section className="w-full py-12 bg-white">
            <div className="container w-full px-4 mx-auto md:px-6">
              <h2 className="mb-8 text-2xl font-bold">Featured Article</h2>
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg">
                  <Image
                    src={
                      featuredData.cover_image_url ?
                        `${process.env.NEXT_PUBLIC_API_URL}/blog/image/${featuredData.cover_image_url.id}` :
                        AppAsset.DefaultBlogImage
                    }
                    alt={truncateText(featuredData.title, 55)}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">

                    <span className="text-sm text-gray-500">{getRegularDate(featuredData.published_at)}</span>
                  </div>
                  <h3 className="mb-2 text-2xl font-bold">{truncateText(featuredData.title, 55)}</h3>
                  <p className="mb-4 text-gray-500">{truncateText(featuredData.excerpt, 55)}</p>
                  <p className="mb-4 text-sm text-gray-500">By {featuredData?.user?.fullName}</p>
                  <Button asChild>
                    <Link
                      target="_blank"
                      href={`${process.env.NEXT_PUBLIC_BLOG_URL}/blog/${featuredData.slug}`}>
                      Read Full Article <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )
      }


      {/* Recent Posts */}
      <section className="w-full py-12 bg-slate-50">
        <div className="container w-full px-4 mx-auto md:px-6">
          <h2 className="mb-8 text-2xl font-bold">Recent Articles</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {!isPending ?
              data &&
              data.blogs.length !== 0 &&
              data.blogs.map((post, index: number) => (
                <BlogCard blog={post} key={index} />
              )) :
              (<>
                {[1, 2, 3, 4, 5, 6].map((_, index) => {
                  return (
                    <BlogLoadingSkeleton key={index} />
                  )
                })}
              </>)

            }
          </div>
        </div>
        <div className='flex justify-end w-full px-4 pt-10 md:col-span-2 lg:col-span-3 font-roboto contianer md:px-20'>
          <div
            className="flex flex-row items-center justify-between w-full h-auto pagination-controls md:w-96">
            <Button
              onClick={handlePrev}
              disabled={offSet === 0}>
              Previous
            </Button>
            <div className='flex flex-row items-center justify-center gap-2'>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageClick(page)}
                  className={`w-5 h-5 flex items-center justify-center ${page == currentPage ? "rounded-full bg-primary text-white" : "cursor-pointer"}`}>
                  <span className='text-sm'>{page}</span>
                </button>
              ))}
            </div>
            <Button
              onClick={handleNext}
              disabled={offSet + limit >= total}>
              Next
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full py-12 text-white md:py-24 bg-third">
        <div className="container w-full px-4 mx-auto md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Subscribe to Our Newsletter</h2>
              <p className="max-w-[600px] text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Stay updated with our latest articles, insights, and industry news.
              </p>
            </div>
            <div className="w-full max-w-md space-y-2">
              <SubscribeNewsLetterBlogPage />
              <p className="text-xs text-slate-100">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

