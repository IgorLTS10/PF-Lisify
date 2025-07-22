"use client";

import { motion } from "framer-motion";
import { HelpCircle, Star, PlayCircle, Mail } from "lucide-react";

export default function HelpPage() {
  return (
    <main className="px-6 py-12 max-w-4xl mx-auto text-white space-y-10">
      {/* Titre */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">❓ Centre d’aide</h1>
        <p className="text-zinc-400">
          Retrouve ici les réponses aux questions fréquentes, ainsi que quelques astuces pour bien profiter de la plateforme.
        </p>
      </motion.div>

      {/* Questions fréquentes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-6"
      >
        <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-5 flex gap-4">
          <PlayCircle className="w-6 h-6 text-violet-400 mt-1" />
          <div>
            <h2 className="font-semibold text-lg">Comment lire un morceau ?</h2>
            <p className="text-zinc-400 text-sm mt-1">
              Clique simplement sur la pochette ou le bouton ▶️ à côté du titre. Le player se lancera automatiquement en bas de l’écran.
            </p>
          </div>
        </div>

        <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-5 flex gap-4">
          <Star className="w-6 h-6 text-yellow-400 mt-1" />
          <div>
            <h2 className="font-semibold text-lg">Comment ajouter un titre aux favoris ?</h2>
            <p className="text-zinc-400 text-sm mt-1">
              Clique sur l’étoile grise à droite du titre. Elle deviendra jaune pour indiquer que le morceau est bien ajouté à ta liste de favoris.
            </p>
          </div>
        </div>

        <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-5 flex gap-4">
          <HelpCircle className="w-6 h-6 text-blue-400 mt-1" />
          <div>
            <h2 className="font-semibold text-lg">Ai-je besoin d’un compte ?</h2>
            <p className="text-zinc-400 text-sm mt-1">
              Non, tout est accessible sans inscription. Cependant, créer un compte permet de sauvegarder tes favoris et ton historique.
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
            <h2 className="font-semibold text-lg">Besoin d’aide supplémentaire ?</h2>
            <p className="text-zinc-400 text-sm">
              Contacte-moi à{" "}
              <a
                href="mailto:igorDevWeb@proton.me"
                className="underline hover:text-white transition"
              >
                igorDevWeb@proton.me
              </a>{" "}
              et je te répondrai rapidement !
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
