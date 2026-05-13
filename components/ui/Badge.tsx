import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent" | "muted";
}

export default function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border",
        variant === "default" && "bg-surface border-border text-text-muted",
        variant === "accent" && "bg-accent/10 border-accent/30 text-accent",
        variant === "muted" && "bg-elevated border-border text-text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
