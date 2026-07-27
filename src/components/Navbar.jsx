"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Home, Clock3, BarChart3 } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import logo from "../assets/logo.png"
const navItems = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "Timeline",
    href: "/timeline",
    icon: Clock3,
  },
  {
    title: "Stats",
    href: "/stats",
    icon: BarChart3,
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-slate-800"
        >
          <Image className=" w-32 md:w-40" src={logo} alt="keenkeper" height={500} width={500} />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.title}
                href={item.href}
                className={`flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all
                ${
                  active
                    ? "bg-emerald-700 text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <Icon size={16} />
                {item.title}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 hover:bg-slate-100 md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? "max-h-80 border-t" : "max-h-0"
        }`}
      >
        <nav className="space-y-2 bg-white p-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 rounded-md px-4 py-3 text-sm font-medium transition
                ${
                  active
                    ? "bg-emerald-700 text-white"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                <Icon size={18} />
                {item.title}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}