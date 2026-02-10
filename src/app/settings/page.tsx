"use client";

import { motion } from "framer-motion";
import { Moon, Bell, User, LogOut } from "lucide-react";

export default function SettingsPage() {
  return (
    <main className="px-6 py-12 max-w-3xl mx-auto text-white space-y-10">
      {/* Titre */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">⚙️ Settings</h1>
        <p className="text-zinc-400">Manage your user preferences here.</p>
      </motion.div>

      {/* Paramètres utilisateur */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-6"
      >
        {/* Nom / pseudo */}
        <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-5 flex items-center gap-4">
          <User className="w-6 h-6 text-blue-400" />
          <div>
            <h2 className="font-semibold text-lg">Name</h2>
            <p className="text-sm text-zinc-400">Igor Chrzyptowicz</p>
          </div>
        </div>

        {/* Dark Mode */}
        <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-5 flex items-center gap-4 justify-between">
          <div className="flex items-center gap-4">
            <Moon className="w-6 h-6 text-violet-400" />
            <div>
              <h2 className="font-semibold text-lg">Dark Mode</h2>
              <p className="text-sm text-zinc-400">Enable/disable dark theme</p>
            </div>
          </div>
          <button className="bg-zinc-700 hover:bg-zinc-600 text-white text-sm px-4 py-2 rounded-lg transition">
            Enabled
          </button>
        </div>

        {/* Notifications */}
        <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-5 flex items-center gap-4 justify-between">
          <div className="flex items-center gap-4">
            <Bell className="w-6 h-6 text-yellow-400" />
            <div>
              <h2 className="font-semibold text-lg">Notifications</h2>
              <p className="text-sm text-zinc-400">Receive alerts for new releases</p>
            </div>
          </div>
          <button className="bg-zinc-700 hover:bg-zinc-600 text-white text-sm px-4 py-2 rounded-lg transition">
            Enabled
          </button>
        </div>

        {/* Déconnexion */}
        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-5 flex items-center gap-4 justify-between">
          <div className="flex items-center gap-4">
            <LogOut className="w-6 h-6 text-rose-400" />
            <div>
              <h2 className="font-semibold text-lg">Logout</h2>
              <p className="text-sm text-zinc-400">Sign out of your account</p>
            </div>
          </div>
          <button className="bg-red-600 hover:bg-red-500 text-white text-sm px-4 py-2 rounded-lg transition">
            Sign Out
          </button>
        </div>
      </motion.div>
    </main>
  );
}
