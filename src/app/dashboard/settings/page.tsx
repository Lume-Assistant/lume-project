import { Bell, MessageCircle, ShieldCheck, User } from "lucide-react";

const settings = [
  {
    title: "Perfil",
    description: "Nome, telefone e preferências básicas da conta.",
    icon: User,
  },
  {
    title: "WhatsApp",
    description: "Número conectado para enviar registros financeiros.",
    icon: MessageCircle,
  },
  {
    title: "Notificações",
    description: "Alertas, lembretes e confirmações de transações ambíguas.",
    icon: Bell,
  },
  {
    title: "Privacidade",
    description: "Controle de dados e segurança das informações salvas.",
    icon: ShieldCheck,
  },
];

export default function SettingsPage() {
  return (
    <div className="space-y-6 animate-[fadeIn_0.45s_ease-out]">
      <section>
        <p className="text-sm font-medium text-primary">Conta</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
          Configurações
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-text-muted">
          Ajustes gerais da conta e do assistente financeiro no WhatsApp.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {settings.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-3xl border border-muted bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="size-5" />
              </div>

              <h3 className="mt-5 text-lg font-bold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {item.description}
              </p>
            </div>
          );
        })}
      </section>
    </div>
  );
}