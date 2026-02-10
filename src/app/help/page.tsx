"use client";

import { motion } from "framer-motion";
import { HelpCircle, Star, PlayCircle, Mail } from "lucide-react";

export default function HelpPage() {
  return (
    <main className="px-6 py-12 max-w-4xl mx-auto text-white space-y-10">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">❓ Help Center</h1>
        <p className="text-zinc-400">
          Find answers to frequently asked questions and tips to get the most out of the platform.
        </p>
      </motion.div>

      {/* FAQ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-6"
      >
        <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-5 flex gap-4">
          <PlayCircle className="w-6 h-6 text-violet-400 mt-1" />
          <div>
            <h2 className="font-semibold text-lg">How to play a song?</h2>
            <p className="text-zinc-400 text-sm mt-1">
              Simply click on the album cover or the ▶️ button next to the title. The player will automatically launch at the bottom of the screen.
            </p>
          </div>
        </div>

        <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-5 flex gap-4">
          <Star className="w-6 h-6 text-yellow-400 mt-1" />
          <div>
            <h2 className="font-semibold text-lg">How to add a song to favorites?</h2>
            <p className="text-zinc-400 text-sm mt-1">
              Click on the gray star to the right of the title. It will turn yellow to indicate that the song has been added to your favorites list.
            </p>
          </div>
        </div>

        <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-5 flex gap-4">
          <HelpCircle className="w-6 h-6 text-blue-400 mt-1" />
          <div>
            <h2 className="font-semibold text-lg">Do I need an account?</h2>
            <p className="text-zinc-400 text-sm mt-1">
              No, everything is accessible without registration. However, creating an account allows you to save your favorites and history.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Contact support */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-10"
      >
        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 flex items-center gap-4">
          <Mail className="w-6 h-6 text-rose-400" />
          <div>
            <h2 className="font-semibold text-lg">Need additional help?</h2>
            <p className="text-zinc-400 text-sm">
              Contact me at{" "}
              <a
                href="mailto:igorDevWeb@proton.me"
                className="underline hover:text-white transition"
              >
                igorDevWeb@proton.me
              </a>{" "}
              and I&apos;ll respond quickly!
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
