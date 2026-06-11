import { Mail } from "lucide-react";
import { siteConfig } from "@/lib/data/site";

export function TopBar() {
  return (
    <div className="hidden border-b border-white/5 bg-navy-900/80 sm:block">
      <div className="mx-auto flex max-w-7xl items-center justify-end px-4 py-2 text-xs text-slate-400 sm:px-6 lg:px-8">
        <span className="flex items-center gap-1.5">
          <Mail className="h-3.5 w-3.5 text-gold" />
          {siteConfig.emails.contact}
        </span>
      </div>
    </div>
  );
}
