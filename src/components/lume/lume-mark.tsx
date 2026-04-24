

type LumeMarkProps = {
  dark?: boolean;
};

export default function LumeMark({ dark = false }: LumeMarkProps) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={[
          "relative flex h-10 w-10 items-center justify-center rounded-2xl",
          dark ? "bg-white" : "bg-primary/10",
        ].join(" ")}
      >
        <img src="/nobg.png" alt="icon" />
      </div>

      <span
        className={[
          "logo-text text-xl font-bold tracking-[-0.04em]",
          dark ? "text-white" : "text-primary-dark",
        ].join(" ")}
      >
        Lume
      </span>
    </div>
  );
}