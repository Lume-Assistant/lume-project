import {
  PiggyBank,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

import { CategoryChart } from "@/components/dashboard/CategoryChart";
import { PaymentOverview } from "@/components/dashboard/PaymentOverview";
import { RecentTransactions } from "@/components/dashboard/RecentTransactions";
import { SpendingChart } from "@/components/dashboard/SpendingChart";
import { StatCard } from "@/components/dashboard/StatCard";
import {
  averageConfidence,
  balance,
  formatCurrency,
  totalExpenses,
  totalIncome,
} from "@/lib/dashboard-data";

export default function DashboardPage() {
  return (
    <div className="space-y-6 animate-[fadeIn_0.45s_ease-out]">
      <section className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
        <div>
          <p className="text-sm font-medium text-primary">
            Abril de 2026
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
            Visão geral
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-text-muted">
            Resumo dos registros enviados pelo WhatsApp e organizados pela IA da
            Lume.
          </p>
        </div>

        <div className="rounded-2xl border border-muted bg-white px-4 py-3 text-sm text-text-muted shadow-sm">
          Confiança média da IA:{" "}
          <span className="font-semibold text-foreground">
            {Math.round(averageConfidence * 100)}%
          </span>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <StatCard
          title="Saldo estimado"
          value={formatCurrency(balance)}
          description="Receitas menos despesas registradas"
          icon={PiggyBank}
          variant="success"
        />

        <StatCard
          title="Receitas"
          value={formatCurrency(totalIncome)}
          description="Entradas identificadas no mês"
          icon={TrendingUp}
          variant="success"
        />

        <StatCard
          title="Despesas"
          value={formatCurrency(totalExpenses)}
          description="Gastos registrados pelo WhatsApp"
          icon={TrendingDown}
          variant="default"
        />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
        <SpendingChart />
        <CategoryChart />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.3fr_0.9fr]">
        <RecentTransactions />
        <PaymentOverview />
      </section>
    </div>
  );
}