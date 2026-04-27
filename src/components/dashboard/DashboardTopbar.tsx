"use client";

import Link from "next/link";
import { Menu, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DashboardSidebar } from "./DashboardSidebar";

export function DashboardTopbar() {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-muted bg-background/90 px-5 backdrop-blur-xl lg:px-8">
      <div className="flex items-center gap-3">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="primary"
              size="icon"
              className="rounded-2xl border-muted lg:hidden"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="left"
            className="w-72 border-r border-muted bg-white p-0 [&>button]:right-4 [&>button]:top-4 data-[state=open]:animate-[sheetSlideInFromLeft_300ms_ease-out]
    data-[state=closed]:animate-[sheetSlideOutToLeft_250ms_ease-in]"
          >
            <DashboardSidebar mobile />
          </SheetContent>
        </Sheet>

        <div>
          <p className="text-sm text-text-muted">Painel financeiro</p>
          <h1 className="text-xl font-bold tracking-tight text-foreground">
            Dashboard
          </h1>
        </div>
      </div>

      <Button
        asChild
        className="rounded-2xl bg-primary hover:bg-primary-light"
      >
        <Link href="https://wa.me/" target="_blank">
          <MessageCircle className="mr-2 size-4" />
          Abrir WhatsApp
        </Link>
      </Button>
    </header>
  );
}