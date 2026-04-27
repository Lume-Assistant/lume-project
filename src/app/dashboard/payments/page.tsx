import { PaymentOverview } from "@/components/dashboard/PaymentOverview";

export default function PaymentsPage() {
  return (
    <div className="space-y-6 animate-[fadeIn_0.45s_ease-out]">
      <section>
        <p className="text-sm font-medium text-primary">Assinatura</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
          Pagamentos
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-text-muted">
          Gerencie o plano da Lume, cobranças e uso do assistente no WhatsApp.
          Nada de conexão bancária. Só o básico, como gente sensata.
        </p>
      </section>

      <section className="max-w-3xl">
        <PaymentOverview />
      </section>
    </div>
  );
}