"use client";

import { useState } from "react";
import { MessageCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function WhatsappOnboardingPage() {
  const [whatsapp, setWhatsapp] = useState("");
  const [code, setCode] = useState("");
  const [step, setStep] = useState<"phone" | "code">("phone");

  return (
    <main className="min-h-screen bg-muted px-6 py-10 text-foreground">
      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl items-center">
        <div className="grid w-full overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white shadow-sm lg:grid-cols-2">
          <section className="bg-primary-dark p-8 text-white sm:p-10">
            <div className="mb-16 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
              <MessageCircle className="h-6 w-6" />
            </div>

            <div className="space-y-5">
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
                Última etapa
              </span>

              <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
                Conecte seu WhatsApp à Lume.
              </h1>

              <p className="text-white/75">
                Vamos usar esse número para sincronizar suas mensagens,
                registrar seus gastos e manter sua conta protegida.
              </p>
            </div>

            <div className="mt-16 flex items-start gap-3 rounded-2xl bg-white/10 p-4">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0" />
              <p className="text-sm text-white/75">
                Seu número será verificado com um código temporário enviado pelo WhatsApp.
              </p>
            </div>
          </section>

          <section className="flex items-center justify-center p-8 sm:p-10">
            <div className="w-full max-w-md">
              {step === "phone" ? (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold">Verificar WhatsApp</h2>
                    <p className="mt-2 text-sm text-text-muted">
                      Digite o número que você vai usar para conversar com a Lume.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="whatsapp">WhatsApp</Label>
                    <Input
                      id="whatsapp"
                      placeholder="+55 55 99999-9999"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                    />
                  </div>

                  <Button
                    type="button"
                    onClick={() => setStep("code")}
                    className="h-11 w-full bg-primary text-white hover:bg-primary-light"
                  >
                    Enviar código
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold">Digite o código</h2>
                    <p className="mt-2 text-sm text-text-muted">
                      Enviamos um código temporário para {whatsapp || "seu WhatsApp"}.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="code">Código de verificação</Label>
                    <Input
                      id="code"
                      placeholder="000000"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                    />
                  </div>

                  <Button
                    type="button"
                    className="h-11 w-full bg-primary text-white hover:bg-primary-light"
                  >
                    Verificar número
                  </Button>

                  <button
                    type="button"
                    onClick={() => setStep("phone")}
                    className="w-full text-sm font-medium text-primary hover:underline"
                  >
                    Alterar número
                  </button>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}