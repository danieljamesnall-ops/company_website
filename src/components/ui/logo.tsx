import Image from "next/image";
import { siteConfig } from "@/lib/data/site";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center", className)}>
      <Image
        src="/images/intelglobal-logo.png"
        alt={siteConfig.name}
        width={1186}
        height={356}
        className="h-20 w-auto"
        priority
      />
    </div>
  );
}
