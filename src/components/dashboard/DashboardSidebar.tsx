"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  CreditCard,
  Home,
  ListChecks,
  Settings,
  Tags,
} from "lucide-react";

import { cn } from "@/lib/utils";

const items = [
  { title: "Visão geral", href: "/dashboard", icon: Home },
  { title: "Transações", href: "/dashboard/transactions", icon: ListChecks },
  { title: "Categorias", href: "/dashboard/categories", icon: Tags },
  { title: "Relatórios", href: "/dashboard/reports", icon: BarChart3 },
  { title: "Pagamentos", href: "/dashboard/payments", icon: CreditCard },
  { title: "Configurações", href: "/dashboard/settings", icon: Settings },
];

type DashboardSidebarProps = {
  mobile?: boolean;
};

export function DashboardSidebar({ mobile = false }: DashboardSidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "flex h-full min-h-screen shrink-0 flex-col bg-white",
        mobile ? "w-full border-0" : "hidden w-72 border-r border-muted lg:flex"
      )}
    >
      <div className="flex h-full flex-col px-5 py-6">
        <Link href="/dashboard" className="mb-10 flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-2xl bg-primary text-white shadow-sm">
            <span className="text-lg font-bold">L</span>
          </div>

          <div>
            <p className="text-lg font-bold tracking-tight text-foreground">
              Lume
            </p>
            <p className="text-xs text-text-muted">Controle financeiro</p>
          </div>
        </Link>

        <nav className="flex flex-1 flex-col gap-1">
          {items.map((item, index) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/dashboard" && pathname.startsWith(item.href));

            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  animationDelay: `${index * 45}ms`,
                }}
                className={cn(
                  "flex animate-[fadeIn_0.35s_ease-out_both] items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-text-muted transition-all duration-300 hover:translate-x-1 hover:bg-muted hover:text-foreground",
                  isActive &&
                    "bg-primary text-white shadow-sm hover:bg-primary hover:text-white"
                )}
              >
                <Icon className="size-4" />
                {item.title}
              </Link>
            );
          })}
        </nav>

        <div className="animate-[fadeIn_0.45s_ease-out_both] rounded-3xl bg-muted p-4">
          <p className="text-sm font-semibold text-foreground">WhatsApp ativo</p>
          <p className="mt-1 text-xs leading-relaxed text-text-muted">
            Registros recebidos por mensagem, sem conexão bancária.
          </p>
        </div>
      </div>
    </aside>
  );
}