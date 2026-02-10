"use client";

import { Search } from "lucide-react";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-10 bg-zinc-950/90 backdrop-blur px-4 py-3 flex items-center justify-between">
      <div className="text-lg font-semibold">Welcome 👋</div>

      {/* Search bar */}
      <div className="flex-1 mx-6 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
          <input
            type="text"
            placeholder="Search for an artist, a song..."
            className="w-full bg-zinc-800 text-white rounded-full pl-10 pr-4 py-2 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-600 transition"
          />
        </div>
      </div>

      {/* Right buttons */}
      <div className="flex items-center gap-3">
        <button className="text-sm bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-full transition">
          Sign In
        </button>
        <button className="text-sm bg-white text-black px-4 py-2 rounded-full transition">
          Sign Up
        </button>
      </div>
    </header>
  );
}
