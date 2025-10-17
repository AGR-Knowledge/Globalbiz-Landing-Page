"use client"

import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-5 py-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/agr-logo-light.jpg"
              alt="AGR logo"
              width={120}
              height={36}
              priority
            />
            <div className="text-2xl font-bold text-teal-600">GlobalBiz</div>
          </div>
        </div>
      </div>
    </header>
  )
}
