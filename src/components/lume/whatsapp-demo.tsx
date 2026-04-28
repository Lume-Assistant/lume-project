import {
  ArrowDownLeft,
  ArrowUpRight,
  CheckCircle2,
  Mic,
  MoreVertical,
  Send,
} from "lucide-react";

const messages = [
  {
    from: "user",
    text: "Gastei R$ 42 no almoço",
    delay: "delay-300",
  },
  {
    from: "lume",
    text: "Anotado! R$ 42 em alimentação.",
    delay: "delay-500",
  },
  {
    from: "user",
    text: "Comprei mercado por 186,90",
    delay: "delay-700",
  },
  {
    from: "lume",
    text: "Registrei em mercado. Você ainda tem R$ 614 livres este mês.",
    delay: "delay-900",
  },
  {
    from: "lume",
    text: "Quer que eu te avise se passar de R$ 700 em mercado?",
    delay: "delay-1100",
  },
];

export default function WhatsAppDemo() {
  return (
    <div className="relative mx-auto w-full max-w-96 min-w-72 animate-float-slow">
      {/* glow */}
      <div className="absolute inset-6 rounded-[3rem] bg-primary-light/30 blur-3xl" />

      <div className="phone-shadow relative overflow-hidden rounded-[2.7rem] border-10 border-[#132f2b] bg-[#132f2b]">
        <div className="overflow-hidden rounded-[1.8rem] bg-white">
          {/* topo fake celular */}
          <div className="flex justify-center bg-[#132f2b] py-2">
            <div className="h-1.5 w-20 rounded-full bg-white/20" />
          </div>

          {/* header whatsapp */}
          <div className="flex items-center justify-between bg-primary-dark px-4 py-4 text-white">
            <div className="flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white">
                <img src='nobg.png'/>
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-primary-dark bg-success animate-soft-pulse" />
              </div>

              <div>
                <p className="text-sm font-semibold leading-none">Lume</p>
                <p className="mt-1 text-xs text-white/70">online agora</p>
              </div>
            </div>

            <MoreVertical size={20} className="text-white/70" />
          </div>

          {/* conversa */}
          <div className="whatsapp-bg min-h-107.5 space-y-3 px-4 py-5">
            {messages.map((message, index) => {
              const user = message.from === "user";

              return (
                <div
                  key={index}
                  className={[
                    "flex opacity-0",
                    user ? "justify-end animate-fade-right" : "justify-start animate-fade-left",
                    message.delay,
                  ].join(" ")}
                >
                  <div
                    className={[
                      "max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm",
                      user
                        ? "rounded-br-sm bg-[#d9fdd3] text-[#233331]"
                        : "rounded-bl-sm bg-white text-foreground",
                    ].join(" ")}
                  >
                    {message.text}

                    <div
                      className={[
                        "mt-1 text-[10px]",
                        user ? "text-right text-[#5d756f]" : "text-left text-text-muted",
                      ].join(" ")}
                    >
                      09:{32 + index}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* digitando */}
            <div className="flex justify-start opacity-0 animate-fade-left delay-1300">
              <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-white px-4 py-3 shadow-sm">
                <span className="typing-dot h-1.5 w-1.5 rounded-full bg-text-muted" />
                <span className="typing-dot h-1.5 w-1.5 rounded-full bg-text-muted delay-100" />
                <span className="typing-dot h-1.5 w-1.5 rounded-full bg-text-muted delay-200" />
              </div>
            </div>
          </div>

          {/* input fake */}
          <div className="flex items-center gap-2 bg-[#efe7dd] px-3 pb-4">
            <div className="flex h-11 flex-1 items-center rounded-full bg-white px-4 text-xs text-text-muted">
              Mensagem
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white">
              <Send size={17} />
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-dark text-white">
              <Mic size={17} />
            </div>
          </div>

          {/* resumo */}
          <div className="grid grid-cols-2 gap-3 bg-white p-4">
            <div className="rounded-2xl bg-muted p-4 opacity-0 animate-fade-up delay-1100">
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-success/10 text-success">
                <ArrowDownLeft size={17} />
              </div>

              <p className="text-xs text-text-muted">Entradas</p>
              <p className="mt-1 font-semibold text-primary-dark">R$ 3.240</p>
            </div>

            <div className="rounded-2xl bg-muted p-4 opacity-0 animate-fade-up delay-1300">
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-danger/10 text-danger">
                <ArrowUpRight size={17} />
              </div>

              <p className="text-xs text-text-muted">Gastos</p>
              <p className="mt-1 font-semibold text-primary-dark">R$ 1.392</p>
            </div>
          </div>
        </div>
      </div>

      {/* cards flutuantes */}
      <div className="absolute -left-8 top-24 hidden rounded-3xl border border-white/20 bg-white/95 p-4 shadow-2xl animate-fade-right delay-900 md:block">
        <p className="text-xs font-medium text-text-muted">Economia prevista</p>
        <p className="mt-1 text-2xl font-bold tracking-[-0.04em] text-primary">
          R$ 420
        </p>
      </div>

      <div className="absolute -right-10 bottom-36 hidden rounded-3xl border border-white/20 bg-white/95 p-4 shadow-2xl animate-fade-left delay-1100 md:block">
        <p className="text-xs font-medium text-text-muted">Status</p>
        <p className="mt-1 text-sm font-semibold text-primary-dark">
          Dentro do orçamento
        </p>
      </div>
    </div>
  );
}