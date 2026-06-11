import { cn } from "@/lib/utils";

export function Logo({
  className,
  iconOnly = false,
}: {
  className?: string;
  iconOnly?: boolean;
}) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 shrink-0"
        aria-hidden
      >
        <rect width="40" height="40" rx="10" className="fill-gold/10" />
        <rect
          x="0.5"
          y="0.5"
          width="39"
          height="39"
          rx="9.5"
          className="stroke-gold/30"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M11 26V14h4.2l3.1 7.5L21.4 14H25v12h-3.2v-7.1L18.9 26h-2.4l-2.9-7.1V26H11z"
          className="fill-gold"
        />
        <path
          d="M27 26v-9.2h3v9.2H27zm1.5-10.8a1.8 1.8 0 100-3.6 1.8 1.8 0 000 3.6z"
          className="fill-white/80"
        />
      </svg>
      {!iconOnly && (
        <div>
          <span className="block text-lg font-bold tracking-tight text-white leading-tight">
            Intel Global
          </span>
          <span className="block text-[10px] uppercase tracking-[0.2em] text-gold/80">
            Business Solutions
          </span>
        </div>
      )}
    </div>
  );
}
