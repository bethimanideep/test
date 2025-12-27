"use client";

import Image from "next/image";

export default function Home() {
  const API_BASE = process.env.NEXT_PUBLIC_BACKEND_URL;

  const setCookie = async () => {
    const res = await fetch(`${API_BASE}/set-cookie`, {
      method: "GET",
      credentials: "include",
    });

    alert(await res.text());
  };

  const getCookie = async () => {
    const res = await fetch(`${API_BASE}/get-cookie`, {
      method: "GET",
      credentials: "include",
    });

    alert(await res.text());
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight">
            Cross-Site Cookie Test
          </h1>

          <div className="flex gap-4">
            <button
              onClick={setCookie}
              className="px-6 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black"
            >
              Set Cookie
            </button>

            <button
              onClick={getCookie}
              className="px-6 py-2 rounded-full border"
            >
              Get Cookie
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
