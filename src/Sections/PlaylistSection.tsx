// src/components/PlaylistSection.tsx
export default function PlaylistSection() {
  const playlists = Array.from({ length: 6 }, (_, i) => ({
    title: `Playlist ${i + 1}`,
    subtitle: "Par Mix AI",
  }));

  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold mb-4">🎵 Playlists recommandées</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {playlists.map((item, i) => (
          <div
            key={i}
            className="bg-zinc-800 hover:bg-zinc-700 transition p-4 rounded-lg cursor-pointer"
          >
            <div className="w-full h-36 bg-zinc-600 rounded mb-3" />
            <div className="text-sm font-semibold">{item.title}</div>
            <div className="text-xs text-zinc-400">{item.subtitle}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
