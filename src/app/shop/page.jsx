import Image from "next/image";
import { Sun, Search, ShoppingCart } from "lucide-react";

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black">
                <span className="text-lg font-bold text-white">
                  <Image
                    src="/logo.svg"
                    width={60}
                    height={20}
                    alt="logo"
                    className="w-auto h-[1.4rem]"
                  />
                </span>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start">
                <span className="ml-2 text-[1.1rem] font-semibold">Orus</span>
                <span className="ml-1 rounded-md bg-gray-100 px-1.5 py-0.5 text-[0.6rem] sm:text-xs font-medium">
                  templates
                </span>
              </div>
            </div>

            {/* <div className="ml-10 hidden space-x-8 md:flex">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Component Packs
              </a>
              <a href="#" className="text-sm font-medium text-gray-900">
                Templates
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Pricing
              </a>
            </div> */}
          </div>

          <div className="flex items-center space-x-4">
            {/* <button className="rounded-full p-2 text-gray-500 hover:bg-gray-100">
              <Sun className="h-5 w-5" />
            </button>
            <button className="rounded-full p-2 text-gray-500 hover:bg-gray-100">
              <Search className="h-5 w-5" />
            </button>
            <button className="rounded-full p-2 text-gray-500 hover:bg-gray-100">
              <ShoppingCart className="h-5 w-5" />
            </button>
            <a
              href="#"
              className="hidden text-sm text-gray-600 hover:text-gray-900 md:block"
            >
              Login
            </a> */}
            <a
              href="#"
              className=" rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 "
            >
              Get All-Access
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[url('/grid-pattern.svg')] bg-center py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
          Templates
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          Modern and minimalist templates for building your next product. Built
          with React, NextJS, TailwindCSS, Framer Motion and Typescript.
        </p>
      </section>

      {/* Templates Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold text-gray-900">
                AI SaaS Template
              </h2>
              <p className="mt-2 text-gray-600">
                Every AI SaaS template is a multi-page template focused on AI
                applications offering SaaS solutions.
              </p>
              <button className="mt-6 flex items-center rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">
                Buy now <span className="ml-2">$49</span>
              </button>
            </div>
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="AI SaaS template preview"
                    width={300}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="AI SaaS template features"
                    width={300}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="AI SaaS template testimonials"
                    width={300}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold text-gray-900">
                Cryptgen Marketing Template
              </h2>
              <p className="mt-2 text-gray-600">
                A single page, modern and responsive template with a bento grid,
                testimonials, features, and a call to action.
              </p>
              <button className="mt-6 flex items-center rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">
                Buy now <span className="ml-2">$49</span>
              </button>
            </div>
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Cryptgen template hero"
                    width={300}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Cryptgen template features"
                    width={300}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Cryptgen template pricing"
                    width={300}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
