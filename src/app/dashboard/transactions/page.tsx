import { AlertCircle, ArrowDownLeft, ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  formatCurrency,
  formatDate,
  transactions,
} from "@/lib/dashboard-data";
import { cn } from "@/lib/utils";

export default function TransactionsPage() {
  return (
    <div className="space-y-6 animate-[fadeIn_0.45s_ease-out]">
      <section>
        <p className="text-sm font-medium text-primary">Registros</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
          Transações
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-text-muted">
          Todas as movimentações interpretadas a partir das mensagens enviadas no
          WhatsApp.
        </p>
      </section>

      <section className="overflow-hidden rounded-3xl border border-muted bg-white shadow-sm">
        <div className="grid grid-cols-12 border-b border-muted px-5 py-4 text-xs font-semibold uppercase tracking-wide text-text-muted">
          <div className="col-span-5">Descrição</div>
          <div className="col-span-2 hidden md:block">Categoria</div>
          <div className="col-span-2 hidden md:block">Data</div>
          <div className="col-span-2 text-right">Valor</div>
          <div className="col-span-1 text-right">Status</div>
        </div>

        {transactions.map((transaction) => {
          const isIncome = transaction.tipo === "receita";

          return (
            <div
              key={transaction.id}
              className="grid grid-cols-12 items-center px-5 py-4 transition hover:bg-muted/50"
            >
              <div className="col-span-5 flex items-center gap-3">
                <div
                  className={cn(
                    "flex size-10 items-center justify-center rounded-2xl",
                    isIncome
                      ? "bg-success/10 text-success"
                      : "bg-danger/10 text-danger"
                  )}
                >
                  {isIncome ? (
                    <ArrowUpRight className="size-4" />
                  ) : (
                    <ArrowDownLeft className="size-4" />
                  )}
                </div>

                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {transaction.descricao}
                  </p>
                  <p className="text-xs text-text-muted md:hidden">
                    {transaction.categoria} · {formatDate(transaction.created_at)}
                  </p>
                </div>
              </div>

              <div className="col-span-2 hidden text-sm text-text-muted md:block">
                {transaction.categoria}
              </div>

              <div className="col-span-2 hidden text-sm text-text-muted md:block">
                {formatDate(transaction.created_at)}
              </div>

              <div
                className={cn(
                  "col-span-2 text-right text-sm font-bold",
                  isIncome ? "text-success" : "text-foreground"
                )}
              >
                {isIncome ? "+" : "-"}
                {formatCurrency(transaction.valor)}
              </div>

              <div className="col-span-1 flex justify-end">
                {transaction.precisa_confirmacao ? (
                  <Badge variant="outline" className="text-danger">
                    <AlertCircle className="mr-1 size-3" />
                    Dúvida
                  </Badge>
                ) : (
                  <Badge variant="outline">
                    {Math.round(transaction.confianca * 100)}%
                  </Badge>
                )}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}