// src/components/Player.tsx
"use client";

import { useState } from "react";
import { StepForward, StepBack, StretchVertical, CirclePlay } from "lucide-react";
import ElasticSlider from "./ui/ElasticSlider";



export default function Player() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };


  return (
    <footer className="bg-zinc-900 px-6 py-4 border-t border-zinc-800 flex items-center justify-between overflow-hidden">
      {/* Left: Song info */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 bg-zinc-700 rounded" />
        <div>
          <div className="text-sm font-semibold">Overseas</div>
          <div className="text-xs text-zinc-400">D-Block Europe, Central Cee</div>
        </div>
      </div>

      {/* Center: Controls */}
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex items-center gap-5">
          <StepBack className="w-7 h-7 cursor-pointer" />
          {isPlaying ? (
            <StretchVertical
              className="w-8 h-8 cursor-pointer text-white hover:scale-110 transition"
              onClick={handleTogglePlay}
            />
          ) : (
            <CirclePlay
              className="w-8 h-8 cursor-pointer text-white hover:scale-110 transition"
              onClick={handleTogglePlay}
            />
          )}
          <StepForward className="w-7 h-7 cursor-pointer" />
        </div>
        <div className="w-64 h-1 bg-zinc-700 rounded overflow-hidden">
          <div className="h-full w-1/3 bg-white" />
        </div>
      </div>

      {/* Right: Volume (placeholder) */}
      <ElasticSlider className="mr-10" />
    </footer>
  );
}
