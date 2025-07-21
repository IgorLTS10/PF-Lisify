// src/app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/TopBar";
import Player from "@/components/Player";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-black text-white font-sans">
        <div className="flex h-screen flex-col">
          <div className="flex flex-1 overflow-hidden">
            <Sidebar />
            <div className="flex-1 overflow-y-auto">
              <Topbar />
              <main className="p-4">{children}</main>
            </div>
          </div>
          <Player />
        </div>
      </body>
    </html>
  );
}