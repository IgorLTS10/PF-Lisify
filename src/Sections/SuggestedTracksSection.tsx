"use client";

import { Play } from "lucide-react";

export default function SuggestedTracksSection() {
  const tracks = [
    {
      title: "Dreamscape",
      artist: "DJ Nova",
      image: "/tracks/track1.jpeg",
    },
    {
      title: "Electric Sunset",
      artist: "Lumière",
      image: "/tracks/track2.jpeg",
    },
    {
      title: "Waves & Chill",
      artist: "Aqualine",
      image: "/tracks/track3.jpeg",
    },
    {
      title: "City Beats",
      artist: "Urban Flow",
      image: "/tracks/track4.jpeg",
    },
    {
      title: "Zen Flow",
      artist: "Calmness",
      image: "/tracks/track5.jpeg",
    },
    {
      title: "Late Night Ride",
      artist: "Moonliner",
      image: "/tracks/track6.jpeg",
    }
  ];

  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold mb-4">✨ Suggested for You</h2>

      <div className="flex gap-6 overflow-x-auto overflow-y-hidden px-4 pb-4 -mx-4 scroll-smooth snap-x snap-mandatory whitespace-nowrap no-scrollbar">
        {tracks.map((track, i) => (
          <div
            key={i}
            className="group relative flex-shrink-0 w-40 snap-start bg-zinc-800 hover:bg-zinc-700 transition p-4 rounded-lg cursor-pointer"
          >
            <div
              className="w-full h-36 rounded mb-3 bg-center bg-cover transition-transform duration-300 group-hover:scale-105"
              style={{ backgroundImage: `url(${track.image})` }}
            >
              {/* Play button on hover */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition">
                <button className="bg-white text-black rounded-full p-1 shadow hover:scale-110 transition">
                  <Play className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="text-sm font-semibold">{track.title}</div>
            <div className="text-xs text-zinc-400">{track.artist}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
