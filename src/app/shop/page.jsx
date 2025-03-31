
import Image from "next/image";

export default function TemplatesPage() {
  const templates = [
    {
      title: "Waitlist Template",
      desc: "Liva a waitlist template with a modern & responsive design, built with Next.js and Tailwind CSS.",
      images: ["/template-1/tn1.png", "/template-1/tn2.png", "/ai-saas-3.jpg"],
      buylink: "#",
      livelink: "https://waitlist-templates.vercel.app/template-1",
      price: "$9",
    },
   
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black">
                <Image
                  src="/logo.svg"
                  width={60}
                  height={20}
                  alt="logo"
                  className="w-auto h-[1.4rem]"
                />
              </div>
              <div className="ml-2 flex flex-col sm:flex-row items-start sm:items-center">
                <span className="text-[1.1rem] font-semibold">Orus</span>
                <span className="ml-1 rounded-md bg-gray-100 px-1.5 py-0.5 text-[0.6rem] sm:text-xs font-medium">
                  templates
                </span>
              </div>
            </div>
          </div>
          <a
            href="#"
            className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
          >
            Get All-Access
          </a>
        </div>
      </header>

      <section className="bg-[url('/grid-pattern.svg')] bg-center py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
          Templates
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          Modern and minimalist templates for building your next product. Built
          with React, NextJS, TailwindCSS, Framer Motion, and TypeScript.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {templates.map((template, index) => (
          <div
            key={index}
            className="mb-24 grid grid-cols-1 gap-8 lg:grid-cols-3"
          >
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold text-gray-900">
                {template.title}
              </h2>
              <p className="mt-2 text-gray-600">{template.desc}</p>
              <div className="flex flex-col md:flex-row items-start justify-start mt-4 gap-4">
                <a
                  href={template.buylink}
                  className="mt-6 flex items-center rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
                >
                  Buy now <span className="ml-2">{template.price}</span>
                </a>
                <a
                  href={template.livelink}
                  className="mt-6 border border-zinc-100 flex items-center rounded-lg bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-100"
                >
                  Live Preview
                </a>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {template.images.map((image, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="overflow-hidden rounded-xl border border-gray-200 shadow-sm"
                  >
                    <Image
                      src={image}
                      alt={`${template.title} preview ${imgIndex + 1}`}
                      width={400}
                      height={250}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    
    </div>
  );
}
