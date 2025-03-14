"use client";

import Link from "next/link";

export default function AboutUs() {
    return (
    <div className="flex flex-col items-center justify-center h-screen text-2xl font-semibold">
        <h2>Şuan Hakkımızda sayfasındasınız.</h2>
        <Link href={"/"} className='text-blue-600'>Ana sayfaya dön.</Link>
      </div>
    )
}
