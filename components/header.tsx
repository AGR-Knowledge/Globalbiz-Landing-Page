"use client"

import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-4">
            <Image
              src="/agr-logo-light.png"
              alt="AGR logo"
              width={140}
              height={42}
              priority
              className="h-10 w-auto"
            />
            <div className="h-8 w-px bg-gray-200"></div>
            <div className="text-4xl font-bold text-secondary-accent tracking-tight">GlobalBiz</div>
          </div>
        </div>
      </div>
    </header>
  )
}
