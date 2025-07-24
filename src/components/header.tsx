"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"
import Image from "next/image"
import AppAsset from "@/core/AppAsset"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`h-20 flex items-center sticky top-0 z-50 w-full transition-all duration-200 bg-white ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-1">
              <Image
                width={35}
                height={35}
                alt="Alamondai Logo"
                src={AppAsset.Logo} />
              <span className="text-2xl font-bold text-slate-900">
                Alamondai
              </span>
            </Link>
          </div>

          {!isMobile ? (
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors hover:text-slate-900 ${pathname === item.href ? "text-secondary font-bold text-lg" : "text-slate-500 font-medium text-base"
                    }`}>
                  {item.name}
                </Link>
              ))}
              <Button
                asChild
                className="h-12 text-lg">
                <Link href="/contact">Get Started</Link>
              </Button>
            </nav>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden border border-third rounded-lg" onClick={() => setMobileMenuOpen(true)}>
              <Menu
                size={12}
                className="h-12 w-12 text-2xl" />
              <span className="sr-only">Open menu</span>
            </Button>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <Link
                  href="/"
                  className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                  <Image
                    width={35}
                    height={35}
                    alt="Alamondai Logo"
                    src={AppAsset.Logo} />
                  <span className="text-2xl font-bold text-slate-900">
                    Alamondai
                  </span>
                </Link>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                <X className="h-10 w-10" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
          </div>
          <nav className="mt-8 px-4">
            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`block py-2 ${pathname === item.href ? "text-secondary font-bold text-lg" : "text-slate-500 font-medium text-base"
                      }`}
                    onClick={() => setMobileMenuOpen(false)}>
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <Button asChild className="w-full">
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

