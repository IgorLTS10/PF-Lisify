// src/components/MainContent.tsx
import PlaylistSection from "../Sections/PlaylistSection";
import TopArtistsSection from "../Sections/TopArtistsSection";
import SuggestedTracksSection from "../Sections/SuggestedTracksSection";

export default function MainContent() {
  return (
    <div className="flex flex-col gap-12">
      <PlaylistSection />
      <TopArtistsSection />
      <SuggestedTracksSection />
    </div>
  );
}
