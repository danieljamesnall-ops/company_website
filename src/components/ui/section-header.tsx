import { cn } from "@/lib/utils";
import { Badge } from "./badge";

export function SectionHeader({
  badge,
  title,
  description,
  align = "center",
  className,
}: {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {badge && (
        <div className={cn("mb-4", align === "center" && "flex justify-center")}>
          <Badge>{badge}</Badge>
        </div>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}
