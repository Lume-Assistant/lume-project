import { AlertCircle, ArrowDownLeft, ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  formatCurrency,
  formatDate,
  transactions,
} from "@/lib/dashboard-data";
import { cn } from "@/lib/utils";

export function RecentTransactions() {
  const recentTransactions = transactions.slice(0, 6);

  return (
    <Card className="rounded-3xl border-muted bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg text-foreground">
          Transações recentes
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        {recentTransactions.map((transaction) => {
          const isIncome = transaction.tipo === "receita";

          return (
            <div
              key={transaction.id}
              className="flex items-center justify-between gap-4 rounded-2xl border border-muted p-3 transition-all hover:bg-muted/60"
            >
              <div className="flex items-center gap-3">
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
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-foreground">
                      {transaction.descricao}
                    </p>

                    {transaction.precisa_confirmacao && (
                      <AlertCircle className="size-4 text-danger" />
                    )}
                  </div>

                  <p className="text-xs text-text-muted">
                    {transaction.categoria} · {formatDate(transaction.created_at)}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p
                  className={cn(
                    "text-sm font-bold",
                    isIncome ? "text-success" : "text-foreground"
                  )}
                >
                  {isIncome ? "+" : "-"}
                  {formatCurrency(transaction.valor)}
                </p>

                {transaction.precisa_confirmacao ? (
                  <Badge variant="outline" className="mt-1 text-danger">
                    Confirmar
                  </Badge>
                ) : (
                  <p className="mt-1 text-xs text-text-muted">
                    {Math.round(transaction.confianca * 100)}% confiança
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}