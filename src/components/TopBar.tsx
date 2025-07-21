// src/components/Topbar.tsx
"use client";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-10 bg-zinc-950/90 backdrop-blur px-4 py-3 flex items-center justify-between">
      <div className="text-lg font-semibold">Bienvenue 👋</div>
      <div className="flex items-center gap-3">
        <button className="text-sm bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-full transition">
          Connexion
        </button>
        <button className="text-sm bg-white text-black px-4 py-2 rounded-full transition">
          S'inscrire
        </button>
      </div>
    </header>
  );
}
