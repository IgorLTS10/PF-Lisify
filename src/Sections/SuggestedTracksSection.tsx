// src/components/SuggestedTracksSection.tsx
export default function SuggestedTracksSection() {
  const tracks = Array.from({ length: 5 }, (_, i) => ({
    title: `Son #${i + 1}`,
    artist: "Basé sur ton écoute",
  }));

  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold mb-4">✨ Sons proposés pour toi</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {tracks.map((track, i) => (
          <div
            key={i}
            className="bg-zinc-800 hover:bg-zinc-700 transition p-4 rounded-lg cursor-pointer"
          >
            <div className="w-full h-36 bg-zinc-600 rounded mb-3" />
            <div className="text-sm font-semibold">{track.title}</div>
            <div className="text-xs text-zinc-400">{track.artist}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
