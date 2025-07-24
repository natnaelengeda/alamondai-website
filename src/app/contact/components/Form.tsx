"use client";

import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';

// Components
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { PhoneInput } from '@/components/ui/phone-input';

// Axios
import axios from "@/utils/axios";

// Icons
import { ArrowRight } from 'lucide-react'
import toast from 'react-hot-toast';
import LoadingSpinner from './LoadingSpinner';

type Inputs = {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  subject: string;
  message: string;
}

interface IContactFormProps {
  type: string | null;
}

export default function ContactForm({ type }: IContactFormProps) {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      subject: "",
      message: "",
    }
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setLoading(true);
    axios.post("/contact", {
      firstName: data.first_name,
      lastName: data.last_name,
      email: data.email,
      phoneNumber: data.phone_number,
      subject: data.subject,
      message: data.message
    }).then((response) => {
      const status = response.status;
      if (status == 200) {
        toast.success("Message Sent Successfully");
        reset();
      }
    }).catch(() => {
      toast.error("Something went wrong. Please try again later.");
    }).finally(() => {
      setLoading(false);
    });
  }

  useEffect(() => {
    if (type) {
      switch (type) {
        case "web-development":
          return setValue("subject", "Web Development");
        case "ui-ux-design":
          return setValue("subject", "UI/UX Design");
        case "digital-marketing":
          return setValue("subject", "Digital Marketing");
        case "analytics-optimization":
          return setValue("subject", "Analytics & Optimization");
        case "seo":
          return setValue("subject", "SEO Services");
        case "mobile-app-development":
          return setValue("subject", "Mobile App Development");
        default:
          return setValue("subject", "General Inquiry");

      }
    }
  }, [type]);

  useEffect(() => {
    setValue("phone_number", phone);
  }, [phone]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
        <p className="text-gray-500">{`Fill out the form below and we'll get back to you as soon as possible.`}</p>
      </div>
      <form
        className="space-y-4"
        onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label
              htmlFor="first-name"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              First Name
            </label>
            <div className='w-full h-auto relative'>
              <Input
                id="first-name"
                placeholder="John"
                className={`${errors.first_name && errors.first_name.type == "required" ? " focus-visible:ring-red-500" : ""}`}
                {...register("first_name", { required: "This Field is Required" })} />
              {errors.first_name && errors.first_name.type == "required" && (
                <span className='w-16 h-full flex items-center justify-end absolute top-0 right-2'>
                  <p className='text-xs text-red-500'>Required</p>
                </span>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="last-name"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Last Name
            </label>
            <Input
              id="last-name"
              placeholder="Smith"
              {...register("last_name")} />
          </div>
        </div>
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Email
          </label>
          <div className='w-full h-auto relative'>
            <Input
              id="email"
              type="email"
              placeholder="john.smith@example.com"
              className={`${errors.email ? "focus-visible:ring-red-500" : ""}`}
              {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} />
            {
              errors.email && errors.email.type == "required" ? (
                <span className='w-16 h-full flex items-center justify-end absolute top-0 right-2'>
                  <p className='text-xs text-red-500'>Required</p>
                </span>
              ) : errors.email && errors.email.type == "pattern" ? (
                <span className='w-20 h-full flex items-center justify-end absolute top-0 right-2 '>
                  <p className='text-xs text-red-500'>Invalid Email</p>
                </span>
              ) : null
            }
          </div>
        </div>
        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Phone Number
          </label>
          <PhoneInput
            placeholder="(123) 456-7890"
            value={phone}
            onChange={setPhone}
            defaultCountry='US' />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="subject"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Subject
          </label>
          <div className='w-full h-auto relative'>
            <Input
              id="subject"
              placeholder="Project Inquiry"
              className={`${errors.subject && errors.subject.type == "required" ? "focus-visible:ring-red-500" : ""}`}
              {...register("subject", { required: true })} />
            {errors.subject && errors.subject.type == "required" && (
              <span className='w-16 h-full flex items-center justify-end absolute top-0 right-2'>
                <p className='text-xs text-red-500'>Required</p>
              </span>
            )}
          </div>
        </div>
        <div className="space-y-2">
          <label
            htmlFor="message"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Message
          </label>
          <Textarea
            id="message"
            placeholder="Tell us about your project..."
            className="min-h-[150px]"
            {...register("message")} />
        </div>
        <Button
          type="submit"
          className="w-full h-12 text-lg flex items-center gap-2"
          disabled={loading}>
          {
            !loading ?
              <>
                Send Message <ArrowRight className="ml-2 h-4 w-4" />
              </> :
              <>
                Sending <LoadingSpinner /></>
          }


        </Button>
      </form>
    </div>
  )
}
