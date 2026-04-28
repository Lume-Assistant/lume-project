import {
  ArrowRight,
  BarChart3,
  Bot,
  BrainCircuit,
  Check,
  CheckCircle2,
  Clock3,
  LockKeyhole,
  MessageCircle,
  PiggyBank,
  ShieldCheck,
  Sparkles,
  Zap,
  AlertTriangleIcon,
  HeartHandshakeIcon,
  Target,
  Eye
} from "lucide-react";

import Header from "@/components/lume/header";
import WhatsAppDemo from "@/components/lume/whatsapp-demo";
import LumeMark from "@/components/lume/lume-mark";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const steps = [
  {
    icon: MessageCircle,
    title: "Mande uma mensagem",
    description:
      "Escreva naturalmente no WhatsApp: “gastei R$ 50 na pizza”. Sem formulário, sem categoria manual, sem sofrimento humano adicional.",
  },
  {
    icon: BrainCircuit,
    title: "A IA entende o gasto",
    description:
      "A Lume identifica valor, categoria, contexto e registra tudo automaticamente com clareza.",
  },
  {
    icon: BarChart3,
    title: "Veja sua vida financeira",
    description:
      "Acompanhe saldo, gastos, categorias e previsões em um painel simples e bonito.",
  },
];

const benefits = [
  {
    icon: Target,
    title: "Controle automático",
    description:
      "Cada gasto que você manda vira categoria, gráfico e insight. Sem esforço.",
  },
  {
    icon: Eye,
    title: "Visão clara do dinheiro",
    description:
      "Pergunte “quanto tenho guardado?” ou “onde gastei mais?” e receba na hora.",
  },
  {
    icon: AlertTriangleIcon,
    title: "Alertas inteligentes",
    description:
      "A Lume te avisa antes de você estourar o orçamento. No WhatsApp, claro.",
  },
  {
    icon: HeartHandshakeIcon,
    title: "Simples de verdade",
    description:
      "Sem app pra baixar, sem cadastro chato, sem sincronizar conta bancária.",
  },
];

const productCards = [
  {
    label: "Saldo atual",
    value: "R$ 2.418,90",
    detail: "+12% melhor que mês passado",
  },
  {
    label: "Maior categoria",
    value: "Alimentação",
    detail: "R$ 648,20 registrados",
  },
  {
    label: "Previsão final",
    value: "R$ 870 livres",
    detail: "se manter o ritmo atual",
  },
];

const faqs = [
  {
    question: "A Lume funciona só pelo WhatsApp?",
    answer:
      "A proposta principal é funcionar pelo WhatsApp, porque é onde o usuário já está. O painel entra como apoio visual para relatórios, gráficos e acompanhamento.",
  },
  {
    question: "Preciso preencher planilha?",
    answer:
      "Não. A ideia inteira da Lume é justamente evitar planilhas manuais. Você manda mensagens simples e a Lume organiza.",
  },
  {
    question: "Dá para usar áudio?",
    answer:
      "A entrada por áudio está planejada como recurso premium. Você fala o gasto, a Lume entende e registra.",
  },
  {
    question: "Vai ter plano gratuito?",
    answer:
      "Sim. A ideia é oferecer um plano gratuito com limite de uso e um plano premium com mensagens ilimitadas, áudio, simulações e relatórios completos.",
  },
];

export default function Page() {
  return (
    <main className="overflow-hidden bg-background">
      <Header />

      {/* HERO */}
      <section className="dark-grid relative min-h-screen overflow-hidden pt-32 text-white md:pt-40">
        <div className="absolute left-1/2 top-24 h-105 w-105 -translate-x-1/2 rounded-full bg-primary-light/20 blur-3xl animate-pulse-soft" />
        <div className="absolute -right-24 top-52 h-72 w-72 rounded-full bg-white/10 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 h-40 w-full bg-linear-to-t from-primary to-transparent" />

        <div className="lume-container relative grid items-center gap-14 pb-24 md:grid-cols-[1.05fr_0.95fr] md:pb-32">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur opacity-0 animate-fade-up">
              <Sparkles size={14} />
              Em pré-lançamento
            </div>

            <h1 className="lume-title mt-8 max-w-3xl text-5xl leading-[0.95] text-white md:text-7xl opacity-0 animate-fade-up delay-100">
              Seu copiloto financeiro dentro do WhatsApp.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/72 md:text-xl opacity-0 animate-fade-up delay-200">
              Mande uma mensagem. A Lume organiza o resto. Sem planilhas, sem apps complicados, só uma conversa simples.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row opacity-0 animate-fade-up delay-300">
              <Button
                size="lg"
                className="h-14 rounded-full bg-white px-8 text-base font-semibold text-primary-dark transition hover:-translate-y-1 hover:bg-white/90 hover:shadow-2xl"
              >
                Começar
                <ArrowRight className="ml-2" size={18} />
              </Button>

              <Button
                size="lg"
                variant="secondary"
                className="h-14 rounded-full border-white/20 bg-white/5 px-8 text-base text-white transition hover:-translate-y-1 hover:bg-white/10 hover:text-white"
              >
                Ver como funciona
              </Button>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-8 opacity-0 animate-fade-up delay-500 ">
              {[
                ["30 mensagens", "Grátis para começar"],
                ["Organização", "Classificação automática"],
                ["100% Whatsapp", "Sem App novo"],
              ].map(([value, label], index) => (
                <div key={label} className="transition hover:-translate-y-1">
                  <p className="text-base sm:text-2xl font-bold tracking-[-0.04em]">
                    {value}
                  </p>
                  <p className="mt-1 text-xs text-white/55">{label}</p>
                </div>
              ))}
            </div>

          </div>

          <div className="opacity-0 animate-fade-right delay-300">
            <WhatsAppDemo />
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF BAR */}
      <section className="relative -mt-10">
        <div className="lume-container">
          <div className="grid gap-4 rounded-4xl border border-border-soft bg-white p-4 shadow-[0_24px_90px_rgba(15,80,71,0.12)] md:grid-cols-3 opacity-0 animate-fade-up delay-200">
            {[
              "Controle financeiro sem atrito",
              "Feito para WhatsApp",
              "IA para gastos do dia a dia",
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-3xl bg-muted px-5 py-4 transition hover:-translate-y-1 hover:bg-primary/10"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <CheckCircle2 className="text-primary animate-pulse-soft" size={20} />
                <span className="text-sm font-medium text-primary-dark">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="lume-section soft-grid">
        <div className="lume-container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="lume-pill opacity-0 animate-fade-up">
              Como funciona
            </span>

            <h2 className="lume-title mt-5 text-4xl text-primary-dark md:text-6xl opacity-0 animate-fade-up delay-100">
              Tão simples que parece só uma conversa.
            </h2>

            <p className="lume-subtitle mx-auto mt-6 max-w-2xl opacity-0 animate-fade-up delay-200">
              O usuário não precisa aprender um sistema novo. Ele só conversa. <br />
              A Lume cuida da parte chata pra você.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="lume-card relative p-8 opacity-0 animate-fade-up transition hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(15,80,71,0.16)]"
                  style={{ animationDelay: `${250 + index * 150}ms` }}
                >
                  <div className="absolute right-8 top-8 text-6xl font-bold tracking-[-0.08em] text-primary/10">
                    0{index + 1}
                  </div>

                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:scale-105">
                    <Icon size={25} />
                  </div>

                  <h3 className="text-xl font-bold tracking-[-0.03em] text-primary-dark">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-text-muted">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUTO / DASHBOARD */}
      <section id="produto" className="lume-section bg-muted">
        <div className="lume-container grid items-center gap-12 md:grid-cols-2">
          <div className="opacity-0 animate-fade-left">
            <span className="lume-pill">Painel inteligente</span>

            <h2 className="lume-title mt-5 text-4xl text-primary-dark md:text-6xl">
              Do WhatsApp para uma visão clara do seu dinheiro.
            </h2>

            <p className="lume-subtitle mt-6 max-w-xl">
              A conversa registra. O painel mostra. Você entende para onde seu
              dinheiro está indo sem precisar virar contador, o que já é uma
              vitória civilizatória.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Resumo mensal automático",
                "Categorias organizadas pela IA",
                "Previsões e alertas de orçamento",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3 opacity-0 animate-fade-up"
                  style={{ animationDelay: `${250 + index * 120}ms` }}
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white">
                    <Check size={15} />
                  </div>
                  <span className="text-sm font-medium text-primary-dark">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lume-card overflow-hidden p-4 opacity-0 animate-fade-right delay-200 transition hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(15,80,71,0.14)]">
            <div className="rounded-3xl bg-primary-dark p-5 text-white">
              <div className="mb-8 flex items-center justify-between">
              <LumeMark dark />
              <div className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
                Abril 2026
              </div>
            </div>

            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm text-white/60">Saldo previsto</p>
                <p className="mt-2 text-5xl font-bold tracking-[-0.06em]">
                  R$ 870
                </p>
              </div>

              <div className="rounded-2xl bg-success/15 px-3 py-2 text-right">
                <p className="text-xs text-white/60">tendência</p>
                <p className="text-sm font-semibold text-success">+18%</p>
              </div>
            </div>

            <div className="mt-8 rounded-3xl bg-white/10 p-4">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs font-medium text-white/60">
                  Projeção semanal
                </p>
                <p className="text-xs text-white/45">
                  saldo livre
                </p>
              </div>

              <div className="relative h-40">
                {/* linhas de referência */}
                <div className="absolute inset-0 flex flex-col justify-between">
                  {[0, 1, 2, 3].map((line) => (
                    <div
                      key={line}
                      className="h-px w-full bg-white/10"
                    />
                  ))}
                </div>

                {/* barras */}
                <div className="relative z-10 flex h-full items-end gap-3">
                  {[
                    { label: "S1", value: 42, amount: "R$ 410" },
                    { label: "S2", value: 58, amount: "R$ 560" },
                    { label: "S3", value: 76, amount: "R$ 730" },
                    { label: "S4", value: 90, amount: "R$ 870" },
                  ].map((item, index) => (
                    <div key={item.label} className="flex h-full flex-1 flex-col justify-end">
                      <div className="group relative flex h-full items-end">
                        <div
                          className="bar-grow w-full rounded-t-2xl bg-linear-to-t from-primary to-primary-light shadow-[0_0_24px_rgba(47,168,159,0.28)]"
                          style={
                            {
                              "--bar-height": `${item.value}%`,
                              animationDelay: `${index * 140}ms`,
                            } as React.CSSProperties
                          }
                        />

                        <div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded-full bg-white px-2 py-1 text-[10px] font-semibold text-primary-dark opacity-0 shadow-lg transition group-hover:opacity-100 text-center">
                          {item.amount}
                        </div>
                      </div>

                      <p className="mt-3 text-center text-xs text-white/50">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {productCards.map((card, index) => (
                <div
                  key={card.label}
                  className="rounded-3xl bg-muted p-5 opacity-0 animate-fade-up transition hover:-translate-y-1 hover:bg-primary/10"
                  style={{ animationDelay: `${450 + index * 120}ms` }}
                >
                  <p className="text-xs text-text-muted">{card.label}</p>
                  <p className="mt-2 font-bold tracking-[-0.03em] text-primary-dark">
                    {card.value}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-text-muted">
                    {card.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section id="beneficios" className="lume-section">
        <div className="lume-container">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div className="opacity-0 animate-fade-left">
              <span className="lume-pill">Benefícios</span>

              <h2 className="lume-title mt-5 text-4xl text-primary-dark md:text-6xl">
                Menos controle manual. Mais clareza real.
              </h2>
            </div>

            <p className="lume-subtitle max-w-xl md:ml-auto opacity-0 animate-fade-right delay-200">
              A Lume foi feita pra quem quer controle de verdade, sem virar um analista financeiro.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="rounded-4xl border border-border-soft bg-white p-7 shadow-sm opacity-0 animate-fade-up transition hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(15,80,71,0.12)]"
                  style={{ animationDelay: `${index * 140}ms` }}
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:scale-105">
                    <Icon size={23} />
                  </div>

                  <h3 className="text-lg font-bold tracking-[-0.03em] text-primary-dark">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-text-muted">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEGURANÇA */}
      <section className="lume-section bg-primary-dark text-white">
        <div className="lume-container grid items-center gap-10 md:grid-cols-2">
          <div className="opacity-0 animate-fade-left">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-primary-light animate-pulse-soft">
              <LockKeyhole size={26} />
            </div>

            <h2 className="lume-title text-4xl md:text-6xl">
              Simples não significa frágil.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/65 md:text-lg">
              A Lume foi desenhada para transmitir segurança sem parecer banco
              engessado. Seus dados financeiros precisam de proteção, não de uma
              interface que pareça uma repartição pública.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              ["Dados organizados", "Informações financeiras estruturadas com clareza."],
              ["Controle pelo usuário", "Você entende o que foi registrado e pode acompanhar tudo."],
              ["Experiência transparente", "Nada de linguagem obscura ou alertas julgadores."],
            ].map(([title, description], index) => (
              <div
                key={title}
                className="rounded-4xl border border-white/10 bg-white/5 p-6 opacity-0 animate-fade-right transition hover:-translate-y-1 hover:bg-white/10"
                style={{ animationDelay: `${index * 140}ms` }}
              >
                <p className="font-semibold">{title}</p>
                <p className="mt-2 text-sm leading-6 text-white/60">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="lume-section">
        <div className="lume-container">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-6 py-16 text-center text-white md:px-20 opacity-0 animate-fade-up">
            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl animate-pulse-soft" />
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-primary-dark/40 blur-3xl animate-float" />

            <div className="relative mx-auto max-w-3xl">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 animate-pulse-soft">
                <Clock3 size={26} />
              </div>

              <h2 className="lume-title text-4xl md:text-6xl">
                Organize a sua vida financeira com a Lume.
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
                Transforme suas mensagens em controle financeiro de verdade.
              </p>

              <div className="mx-auto mt-9 flex max-w-xl flex-col gap-3 rounded-full bg-white p-2 shadow-2xl sm:flex-row opacity-0 animate-fade-up delay-300">
                <Input
                  type="email"
                  placeholder="Digite seu melhor e-mail"
                  className="h-13 flex-1 rounded-full border-0 px-5 text-foreground shadow-none focus-visible:ring-0"
                />

                <Button className="h-13 rounded-full bg-primary-dark px-7 transition hover:-translate-y-1 hover:bg-[#093d36]">
                  Quero entrar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      
      <section id="faq" className="lume-section bg-muted">
        <div className="lume-container max-w-4xl">
          <div className="text-center">
            <span className="lume-pill opacity-0 animate-fade-up">FAQ</span>

            <h2 className="lume-title mt-5 text-4xl text-primary-dark md:text-6xl opacity-0 animate-fade-up delay-100">
              Perguntas frequentes
            </h2>
          </div>

          <Accordion type="single" collapsible className="mt-12 p-5 border-0">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="mb-4 rounded-3xl border-2 border-border-soft bg-white px-6 opacity-0 animate-fade-up transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,80,71,0.05)]"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <AccordionTrigger className="text-left text-base font-semibold text-primary-dark hover:no-underline">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="text-sm leading-7 text-text-muted">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary-dark py-10 text-white">
        <div className="lume-container flex flex-col items-center justify-between gap-6 md:flex-row opacity-0 animate-fade-up">
          <LumeMark dark />

          <p className="text-sm text-white/55">
            © 2026 Lume. Seu assistente financeiro inteligente no WhatsApp.
          </p>
        </div>
      </footer>
    </main>
  );
}