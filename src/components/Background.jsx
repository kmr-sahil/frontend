"use client"

export default function GridBackground() {
  return (
    <div className="grid-background w-full h-[40rem] relative overflow-x-hidden">
      <div className="absolute inset-0 skew-x-6" style={{
        background: "linear-gradient(180deg, rgba(245,247,248,1) 0%, rgba(245,247,248,0) 20%, rgba(245,247,248,0) 80%, rgba(245,247,248,1) 100%)"
      }} />
      <style jsx>{`
        .grid-background {
          background-image: 
            linear-gradient(to right, rgba(237,232,242,1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(237,224, 247,1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  )
}