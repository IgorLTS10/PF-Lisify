// src/components/TopArtistsSection.tsx
"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TiltedCard from "@/components/ui/TiltedCard";

export default function TopArtistsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const artists = [
    { name: "Kendrick Lamar", note: "Rappeur iconique", image: "/artists/Kendrick-Lamar-Header.jpeg" },
    { name: "Dua Lipa", note: "Pop internationale", image: "/artists/Dua-Lipa.jpeg" },
    { name: "Damso", note: "Rap belge moderne", image: "/artists/Damso.jpg" },
    { name: "Rosalía", note: "Fusion flamenco/urbain", image: "/artists/Rosalia.jpg" },
    { name: "Kerchak", note: "Artiste émergent", image: "/artists/Kerchak.jpeg" },
    { name: "Taylor Swift", note: "Icône pop mondiale", image: "/artists/Taylor-Swift.jpg" },
    { name: "The Weeknd", note: "R&B contemporain", image: "/artists/The-Weeknd.jpg" },
    { name: "Billie Eilish", note: "Pop alternative", image: "/artists/Billie-Eilish.jpg" },
  ];

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 250;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="mb-10 relative">
      <h2 className="text-xl font-bold mb-4">🔥 Top artistes</h2>

      {/* Flèche gauche */}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-zinc-900/80 hover:bg-zinc-800 p-2 rounded-full shadow hidden md:block"
        onClick={() => scroll("left")}
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      {/* Flèche droite */}
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-zinc-900/80 hover:bg-zinc-800 p-2 rounded-full shadow hidden md:block"
        onClick={() => scroll("right")}
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto overflow-y-hidden px-4 pb-6 -mx-4 snap-x snap-mandatory scroll-smooth whitespace-nowrap scrollbar-hide cursor-grab active:cursor-grabbing select-none"
        >

        {artists.map((artist, i) => (
          <div
            key={i}
            className="inline-block snap-center flex-shrink-0"
            style={{ width: 220 }}
            >
            <div className="flex flex-col items-center text-center">
                <TiltedCard
                imageSrc={artist.image}
                altText={artist.name}
                captionText=""
                containerHeight="200px"
                containerWidth="100%"
                imageHeight="200px"
                imageWidth="100%"
                rotateAmplitude={10}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}
                />
                <div className="mt-3">
                <div className="text-sm font-semibold text-white">{artist.name}</div>
                <div className="text-xs text-zinc-400">{artist.note}</div>
                </div>
            </div>
            </div>

        ))}
      </div>
    </section>
  );
}
