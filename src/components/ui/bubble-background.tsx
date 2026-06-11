"use client";

import { cn } from "@/lib/utils";

type Bubble = {
  id: number;
  size: number;
  left: string;
  opacity: number;
  delay: string;
  duration: string;
};

const bubbles: Bubble[] = [
  { id: 1, size: 32, left: "8%", opacity: 0.08, delay: "0s", duration: "20s" },
  { id: 2, size: 48, left: "22%", opacity: 0.12, delay: "2s", duration: "26s" },
  { id: 3, size: 20, left: "38%", opacity: 0.06, delay: "4s", duration: "18s" },
  { id: 4, size: 40, left: "52%", opacity: 0.1, delay: "1s", duration: "22s" },
  { id: 5, size: 16, left: "65%", opacity: 0.05, delay: "6s", duration: "16s" },
  { id: 6, size: 36, left: "78%", opacity: 0.09, delay: "3s", duration: "24s" },
  { id: 7, size: 24, left: "92%", opacity: 0.07, delay: "8s", duration: "19s" },
  { id: 8, size: 44, left: "15%", opacity: 0.11, delay: "5s", duration: "28s" },
  { id: 9, size: 18, left: "45%", opacity: 0.06, delay: "7s", duration: "17s" },
  { id: 10, size: 30, left: "58%", opacity: 0.08, delay: "9s", duration: "21s" },
  { id: 11, size: 42, left: "72%", opacity: 0.1, delay: "10s", duration: "25s" },
  { id: 12, size: 22, left: "5%", opacity: 0.07, delay: "11s", duration: "18s" },
  { id: 13, size: 28, left: "30%", opacity: 0.09, delay: "0.5s", duration: "23s" },
  { id: 14, size: 38, left: "48%", opacity: 0.11, delay: "3.5s", duration: "27s" },
  { id: 15, size: 14, left: "85%", opacity: 0.05, delay: "5.5s", duration: "15s" },
  { id: 16, size: 34, left: "12%", opacity: 0.08, delay: "7.5s", duration: "20s" },
  { id: 17, size: 26, left: "62%", opacity: 0.07, delay: "9.5s", duration: "22s" },
  { id: 18, size: 46, left: "88%", opacity: 0.12, delay: "11.5s", duration: "29s" },
];

export function BubbleBackground({ className }: { className?: string }) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden
    >
      {bubbles.map((bubble) => (
        <span
          key={bubble.id}
          className="bubble absolute bottom-[-10%] rounded-full border border-gold/20 bg-gold/10 backdrop-blur-[1px]"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: bubble.left,
            opacity: bubble.opacity,
            animationDelay: bubble.delay,
            animationDuration: bubble.duration,
          }}
        />
      ))}

      <div className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute -right-24 bottom-1/4 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
    </div>
  );
}
