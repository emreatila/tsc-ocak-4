"use client";

import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-2xl font-semibold">
      <h2>Şuan index yani ana sayfadasınız.</h2>
      <Link href={"/about-us"} className='text-blue-600'>Hakkımızda sayfasına gitmek için tıklayın.</Link>
    </div>
  );
  }
