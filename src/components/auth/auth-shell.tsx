import Link from "next/link";

type AuthShellProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
};

export function AuthShell({ title, subtitle, children, footer }: AuthShellProps) {
  return (
    <main className="min-h-screen bg-muted text-foreground">
      <div className="grid min-h-screen lg:grid-cols-2">
        <section className="hidden flex-col justify-between bg-primary-dark p-10 text-white lg:flex">
          <div>
            <Link href="/" className="text-3xl font-bold">
              Lume
            </Link>
          </div>

          <div className="max-w-md space-y-6">
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
              Assistente financeiro via WhatsApp
            </span>

            <h1 className="text-5xl font-bold leading-tight">
              Suas finanças mais claras, no lugar onde você já conversa.
            </h1>

            <p className="text-lg text-white/75">
              Registre gastos, acompanhe seu saldo e organize sua vida financeira
              de um jeito simples, seguro e natural.
            </p>
          </div>

          <p className="text-sm text-white/50">
            Lume © 2026
          </p>
        </section>

        <section className="flex items-center justify-center px-6 py-10">
          <div className="w-full max-w-md rounded-3xl border border-[#E5E7EB] bg-white p-8 shadow-sm">
            <div className="mb-8 space-y-2">
              <h2 className="text-3xl font-bold">{title}</h2>
              <p className="text-sm text-text-muted">{subtitle}</p>
            </div>

            {children}

            {footer && (
              <div className="mt-6 text-center text-sm text-text-muted">
                {footer}
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}