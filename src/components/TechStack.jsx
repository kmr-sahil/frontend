import Image from 'next/image'

const techStack = [
  { name: 'Next.js', logo: '/nextjs.svg' },
  { name: 'React', logo: '/react.svg' },
  { name: 'Node.js', logo: '/node.svg' },
  { name: 'Tailwind CSS', logo: '/tail.svg' },
  { name: 'Framer Motion', logo: '/framer.svg' },
  { name: 'Figma', logo: '/Figma.svg' },
  { name: 'AWS', logo: '/aws.svg' },
]

export default function TechStack() {
  return (
    <div className="w-full pb-[1rem]">
      <div className="container mx-auto px-4 flex flex-col justify-center items-center">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {techStack.map((tech) => (
            <div key={tech.name} className="flex items-center justify-center">
              <Image
                src={tech.logo}
                alt={`${tech.name} logo`}
                width={100}
                height={40}
                className="h-8 md:h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
        <span className='text-center text-[#41444B] mt-[1.5rem] opacity-65 font-medium'>Tech stack that powers your application</span>
      </div>
    </div>
  )
}