import { CalendarDays, CheckCircle2, MessageCircle, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency, formatDate, subscription } from "@/lib/dashboard-data";

export function PaymentOverview() {
  return (
    <Card className="rounded-3xl border-muted bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg text-foreground">
          Plano da Lume
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="rounded-3xl bg-primary-dark p-5 text-white">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm text-white/70">Plano atual</p>
              <p className="mt-2 text-2xl font-bold">{subscription.plan}</p>
            </div>

            <Badge className="bg-white text-primary-dark hover:bg-white">
              {subscription.status}
            </Badge>
          </div>

          <p className="mt-5 text-sm text-white/70">
            {formatCurrency(subscription.price)} por mês
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-muted p-4">
            <CalendarDays className="size-5 text-primary" />
            <p className="mt-3 text-sm font-semibold text-foreground">
              Próxima cobrança
            </p>
            <p className="mt-1 text-sm text-text-muted">
              {formatDate(subscription.nextCharge)}
            </p>
          </div>

          <div className="rounded-2xl border border-muted p-4">
            <MessageCircle className="size-5 text-primary" />
            <p className="mt-3 text-sm font-semibold text-foreground">
              Mensagens usadas
            </p>
            <p className="mt-1 text-sm text-text-muted">
              {subscription.messagesUsed} · {subscription.messagesLimit}
            </p>
          </div>

          <div className="rounded-2xl border border-muted p-4">
            <Sparkles className="size-5 text-primary" />
            <p className="mt-3 text-sm font-semibold text-foreground">
              IA financeira
            </p>
            <p className="mt-1 text-sm text-text-muted">
              Parser ativo no WhatsApp
            </p>
          </div>

          <div className="rounded-2xl border border-muted p-4">
            <CheckCircle2 className="size-5 text-success" />
            <p className="mt-3 text-sm font-semibold text-foreground">
              Status
            </p>
            <p className="mt-1 text-sm text-text-muted">
              Tudo funcionando
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}