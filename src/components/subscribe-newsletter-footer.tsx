"use client";
import { useState } from "react";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { emailSubscription } from "@/api/blog";
import toast from "react-hot-toast";
import SpinningLoader from "./spinning-loader";

export default function SubscribeNewsLetterFooter() {
  const [email, setEmail] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      return toast.error("Please enter email");
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return toast.error("Please enter a valid email address.");
    }
    setIsSubmitting(true);
    try {
      const result = await emailSubscription(email);
      const status = result.status;
      if (status == 200) {
        toast.success("Subscribed successfully!");
        setEmail("");
        setIsSubmitting(false);
      }
    } catch (error: any) {
      const status = error.response?.status;
      if (status == 400) {
        setIsSubmitting(false);
        toast.error("You are already subscribed to the newsletter.");
      } else {
        setIsSubmitting(false);
        toast.error("Failed to subscribe. Please try again.");
      }
    }
  };

  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold">Subscribe to Our Newsletter</h3>
      <p className="mb-4 text-slate-300">Stay updated with our latest news and offers.</p>
      <form className="space-y-2">
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="text-white bg-slate-800 border-slate-700 placeholder:text-slate-400"
          required
        />
        <Button
          onClick={handleNewsletterSubmit}
          type="submit"
          className="flex items-center justify-center w-full gap-2"
          disabled={isSubmitting}>
          {
            isSubmitting && <SpinningLoader size={20} />
          }
          Subscribe
        </Button>
      </form>
    </div>
  )
}
