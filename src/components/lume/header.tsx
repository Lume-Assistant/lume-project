"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import LumeMark from "@/components/lume/lume-mark";
import Link from "next/link";

const links = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Produto", href: "#produto" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-primary-dark/75 backdrop-blur-xl">
      <div className="lume-container flex h-20 items-center justify-between">
        <a
          href="#"
          aria-label="Página inicial da Lume"
          className="animate-fade-right"
        >
          <LumeMark dark />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={[
                "text-sm font-medium text-white/72 opacity-0 transition hover:text-white animate-fade-up",
                index === 0
                  ? "delay-100"
                  : index === 1
                  ? "delay-200"
                  : index === 2
                  ? "delay-300"
                  : "delay-500",
              ].join(" ")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden opacity-0 animate-fade-left delay-500 md:flex gap-8">
          <Button className="rounded-full bg-white px-6 text-primary-dark transition hover:-translate-y-0.5 hover:bg-white/90">
            Começar
          </Button>
          <Link  href="/dashboard">   
          <Button className=" rounded-full border-white/20 bg-white/5 px-6 text-white transition hover:-translate-y-0.5 hover:bg-white/10">
            Dashboard
          </Button>
          </Link>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-primary-dark px-5 py-5 animate-fade-up md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-white/80"
              >
                {link.label}
              </a>
            ))}

                <Button className="rounded-full bg-white px-6 text-primary-dark transition hover:-translate-y-0.5 hover:bg-white/90">
                Começar
              </Button>
              <Button
              asChild
              className="rounded-full border-white/20 bg-white/5 px-6 text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}