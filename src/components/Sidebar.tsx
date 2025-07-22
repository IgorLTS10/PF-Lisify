// src/components/Sidebar.tsx

import GlassIcons from "./ui/GlassIcons";
import { House, Search, Library, ListMusic, Heart, Settings, BadgeQuestionMark, Info } from "lucide-react";

export default function Sidebar() {

  const items = [
    { icon: <House />, color: "blue", label: "Home", href: "/" },
    { icon: <Search />, color: "red", label: "Search", href: "/search" },
    { icon: <Library />, color: "red", label: "Library", href: "/library" },
    { icon: <ListMusic />, color: "red", label: "Playlists", href: "/playlists" },
    { icon: <Heart />, color: "red", label: "Favorites", href: "/favorites" },
    { icon: <Settings />, color: "blue", label: "Settings", href: "/settings" },
    { icon: <BadgeQuestionMark />, color: "blue", label: "Help", href: "/help" },
    { icon: <Info />, color: "blue", label: "About", href: "/about" },
  ];


  return (
    <aside className="w-32 bg-zinc-900 p-4 hidden md:block">
      <div style={{ height: '600px', position: 'relative' }}>
        <GlassIcons items={items} className="custom-class"/>
      </div>
    </aside>
  );
}
