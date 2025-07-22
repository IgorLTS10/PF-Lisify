"use client";

import ProfileCard from "@/components/ui/ProfileCard";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="flex flex-col md:flex-row items-start justify-center px-6 py-12 gap-10 md:gap-20 text-white">
      {/* Colonne gauche : ProfileCard */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full md:w-1/3 flex justify-center"
      >
        <ProfileCard
          name="Igor Chrzyptowicz"
          title="Développeur Web Fullstack"
          handle="igorcodes"
          status="Disponible"
          contactText="Voir mon GitHub"
          avatarUrl="/avatar.jpg"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() =>
            window.open("https://github.com/IgorLTS10", "_blank")
          }
        />
      </motion.div>

      {/* Colonne droite : Sections animées séparément */}
      <div className="w-full md:w-2/3 space-y-10">
        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
        >
          <p className="text-zinc-100 text-base md:text-lg">
            Ce site a été conçu et développé par moi en <strong>Juillet 2025</strong> dans le but de renforcer mon portfolio de projets web créatifs. Il me permet d’expérimenter des interfaces modernes et des animations avancées.
          </p>
        </motion.div>

        {/* Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
        >
          <h2 className="text-lg font-semibold mb-3">🛠️ Stack utilisée</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Framer Motion",
              "Lucide Icons",
              "React Bits",
            ].map((tech) => (
              <span
                key={tech}
                className="bg-zinc-800 text-white text-sm px-4 py-2 rounded-full border border-zinc-700 hover:bg-zinc-700 transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1.0 }}
          >
            <h2 className="text-lg font-semibold mb-5">📬 Contacte-moi</h2>
            <div className="space-y-4">
              {/* GitHub */}
              <a
                href="https://github.com/IgorLTS10"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-xl px-5 py-3 transition group"
              >
                <Github className="w-6 h-6 text-white group-hover:text-violet-400 transition" />
                <div className="flex flex-col">
                  <span className="text-white font-medium">GitHub</span>
                  <span className="text-sm text-zinc-400 group-hover:text-zinc-300 transition">
                    @IgorLTS10
                  </span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/igor-chrzyptowicz-3183911b7/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-xl px-5 py-3 transition group"
              >
                <Linkedin className="w-6 h-6 text-white group-hover:text-blue-400 transition" />
                <div className="flex flex-col">
                  <span className="text-white font-medium">LinkedIn</span>
                  <span className="text-sm text-zinc-400 group-hover:text-zinc-300 transition">
                    igor-chrzyptowicz
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:igorDevWeb@proton.me"
                className="flex items-center gap-4 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-xl px-5 py-3 transition group"
              >
                <Mail className="w-6 h-6 text-white group-hover:text-rose-400 transition" />
                <div className="flex flex-col">
                  <span className="text-white font-medium">Email</span>
                  <span className="text-sm text-zinc-400 group-hover:text-zinc-300 transition">
                    igorDevWeb@proton.me
                  </span>
                </div>
              </a>
            </div>
          </motion.div>

      </div>
    </main>
  );
}
