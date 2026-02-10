"use client";

import { useState } from "react";
import { X, Play, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PlaylistSection() {
  const playlists = [
    {
      title: "Mood Chill 🌙",
      subtitle: "By AI Mix",
      image: "/playlists/playlist-chill.jpg",
    },
    {
      title: "Boost Workout 💪",
      subtitle: "By AI Mix",
      image: "/playlists/playlist-workout.jpeg",
    },
    {
      title: "Party with Friends 🎉",
      subtitle: "By AI Mix",
      image: "/playlists/playlist-friends.jpg",
    },
    {
      title: "Code & Focus 👨‍💻",
      subtitle: "By AI Mix",
      image: "/playlists/playlist-focus.jpeg",
    },
    {
      title: "Sunday Vibes ☕",
      subtitle: "By AI Mix",
      image: "/playlists/playlist-sunday.jpg",
    },
    {
      title: "90's Throwback 📼",
      subtitle: "By AI Mix",
      image: "/playlists/playlist-90s.jpeg",
    },
    {
      title: "Pop Hits 🔥",
      subtitle: "By AI Mix",
      image: "/playlists/playlist-pop.jpeg",
    }
  ];

  const songs = [
    { title: "Lofi Dreams", artist: "DJ Soft", duration: "2:45" },
    { title: "Relaxation Tape", artist: "Calma", duration: "3:10" },
    { title: "Evening Mood", artist: "Nostalgic", duration: "4:02" },
    { title: "Midnight Chill", artist: "Nova", duration: "3:35" },
    { title: "Rainy Beats", artist: "DropSound", duration: "2:58" },
  ];

  const [selectedPlaylist, setSelectedPlaylist] = useState<null | typeof playlists[0]>(null);

  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold mb-4">🎵 Recommended Playlists</h2>

      <div className="flex gap-6 overflow-x-auto overflow-y-hidden px-4 pb-4 -mx-4 scroll-smooth snap-x snap-mandatory whitespace-nowrap no-scrollbar">
        {playlists.map((playlist, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-40 snap-start bg-zinc-800 hover:bg-zinc-700 transition p-4 rounded-lg cursor-pointer"
            onClick={() => setSelectedPlaylist(playlist)}
          >
            <div
              className="w-full h-36 rounded mb-3 bg-center bg-cover"
              style={{ backgroundImage: `url(${playlist.image})` }}
            />
            <div className="text-sm font-semibold">{playlist.title}</div>
            <div className="text-xs text-zinc-400">{playlist.subtitle}</div>
          </div>
        ))}
      </div>

      {/* Modal with animation */}
      <AnimatePresence>
        {selectedPlaylist && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", duration: 0.3 }}
              className="bg-zinc-900 p-6 rounded-xl w-full max-w-md relative"
            >
              <button
                className="absolute top-3 right-3 text-zinc-400 hover:text-white"
                onClick={() => setSelectedPlaylist(null)}
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={selectedPlaylist.image}
                  alt={selectedPlaylist.title}
                  className="w-20 h-20 rounded object-cover"
                />
                <div>
                  <div className="text-lg font-bold">{selectedPlaylist.title}</div>
                  <div className="text-sm text-zinc-400">{selectedPlaylist.subtitle}</div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mb-4">
                <button className="flex items-center gap-2 bg-white text-black text-sm px-3 py-2 rounded-full hover:bg-zinc-200 transition">
                  <Play className="w-4 h-4" />
                  Play
                </button>
                <button className="flex items-center gap-2 bg-zinc-700 text-white text-sm px-3 py-2 rounded-full hover:bg-zinc-600 transition">
                  <Plus className="w-4 h-4" />
                  Add to Queue
                </button>
              </div>

              {/* Song list */}
              <ul className="space-y-2 max-h-60 overflow-y-auto">
                {songs.map((song, i) => (
                  <li
                    key={i}
                    className="flex justify-between text-sm text-zinc-200 border-b border-zinc-700 pb-1"
                  >
                    <div>
                      <div className="font-semibold">{song.title}</div>
                      <div className="text-xs text-zinc-400">{song.artist}</div>
                    </div>
                    <div className="text-xs text-zinc-400">{song.duration}</div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
