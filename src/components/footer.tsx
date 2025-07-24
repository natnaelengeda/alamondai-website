import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import SubscribeNewsLetterFooter from "./subscribe-newsletter-footer"

export default function Footer() {
  return (
    <footer className="text-white bg-slate-900">
      <div className="container px-4 py-12 mx-auto md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold">
              <span>Alamondai</span>
            </h3>
            <p className="mb-4 text-slate-300">
              We build high-performance websites and applications that drive business growth and deliver exceptional
              user experiences.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white hover:bg-slate-800">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white hover:bg-slate-800">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white hover:bg-slate-800">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white hover:bg-slate-800">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Services", "Portfolio", "About", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                    className="transition-colors text-slate-300 hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-slate-400 mr-2 mt-0.5" />
                <span className="text-slate-300">
                  Kenenisa Ave Street
                  <br />
                  Addis Ababa, Ethiopia
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-slate-400" />
                <a href="tel:+251936657001" className="transition-colors text-slate-300 hover:text-white">
                  +251 9 3665 7001
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-slate-400" />
                <a href="mailto:info@alamondai.com" className="transition-colors text-slate-300 hover:text-white">
                  info@alamondai.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <SubscribeNewsLetterFooter />
        </div>

        <div className="pt-8 mt-12 text-center border-t border-slate-800 text-slate-400">
          <p>© {new Date().getFullYear()} Alamondai. All rights reserved.</p>
          <div className="flex justify-center mt-2 space-x-4 text-sm">
            <Link href="/privacy-policy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

