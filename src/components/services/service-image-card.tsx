import Image from "next/image";
import { Monitor, Code, Briefcase } from "lucide-react";
import type { Service } from "@/lib/data/services";
import { cn } from "@/lib/utils";

const icons = { Monitor, Code, Briefcase };

type ServiceImageCardProps = {
  service: Service;
  priority?: boolean;
  className?: string;
  overlay?: "bottom" | "full";
};

export function ServiceImageCard({
  service,
  priority = false,
  className,
  overlay = "bottom",
}: ServiceImageCardProps) {
  const Icon = icons[service.icon];

  return (
    <div
      className={cn(
        "group relative min-h-[320px] overflow-hidden rounded-2xl border border-white/10 shadow-xl shadow-black/20",
        className
      )}
    >
      <Image
        src={service.image}
        alt={service.imageAlt}
        fill
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover transition duration-700 group-hover:scale-105"
      />

      <div
        className={cn(
          "absolute inset-0",
          overlay === "bottom"
            ? "bg-gradient-to-t from-navy-950 via-navy-950/50 to-navy-950/10"
            : "bg-navy-950/55"
        )}
      />

      <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/10 backdrop-blur-sm">
          <Icon className="h-6 w-6 text-gold" />
        </div>
        <h2 className="mt-5 font-display text-2xl font-bold text-white sm:text-3xl">
          {service.title}
        </h2>
        <p className="mt-3 max-w-lg text-base leading-relaxed text-slate-300">
          {service.description}
        </p>
      </div>
    </div>
  );
}
