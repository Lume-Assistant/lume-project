import { SpendingChart } from "@/components/dashboard/SpendingChart";
import { CategoryChart } from "@/components/dashboard/CategoryChart";

export default function ReportsPage() {
  return (
    <div className="space-y-6 animate-[fadeIn_0.45s_ease-out]">
      <section>
        <p className="text-sm font-medium text-primary">Relatórios</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
          Relatórios
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-text-muted">
          Uma visão mais analítica dos registros financeiros enviados pelo
          WhatsApp.
        </p>
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <SpendingChart />
        <CategoryChart />
      </section>
    </div>
  );
}