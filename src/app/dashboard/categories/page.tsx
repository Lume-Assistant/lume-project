import { CategoryChart } from "@/components/dashboard/CategoryChart";
import { formatCurrency, spendingByCategory } from "@/lib/dashboard-data";

export default function CategoriesPage() {
  return (
    <div className="space-y-6 animate-[fadeIn_0.45s_ease-out]">
      <section>
        <p className="text-sm font-medium text-primary">Análise</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
          Categorias
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-text-muted">
          Entenda para onde o dinheiro está indo com base nas categorias
          identificadas pela IA.
        </p>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <CategoryChart />

        <div className="rounded-3xl border border-muted bg-white p-5 shadow-sm">
          <h3 className="text-lg font-bold text-foreground">
            Ranking de gastos
          </h3>

          <div className="mt-5 space-y-3">
            {spendingByCategory.map((item, index) => (
              <div
                key={item.categoria}
                className="flex items-center justify-between rounded-2xl border border-muted p-4"
              >
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {index + 1}. {item.categoria}
                  </p>
                  <p className="text-xs text-text-muted">
                    Total registrado no mês
                  </p>
                </div>

                <p className="text-sm font-bold text-foreground">
                  {formatCurrency(item.total)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}