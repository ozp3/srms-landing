import { cn } from "@/lib/utils";

interface PipelineStepProps {
  label: string;
  sublabel: string;
  detail?: string;
  color: string;
  icon: React.ReactNode;
  className?: string;
}

export default function PipelineStep({ label, sublabel, detail, color, icon, className }: PipelineStepProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center text-center p-4 rounded-xl border bg-surface shadow-card transition-all duration-300",
        className
      )}
      style={{ borderColor: `${color}40` }}
    >
      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
        style={{ backgroundColor: `${color}18`, color }}>
        {icon}
      </div>
      <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color }}>
        {label}
      </p>
      <p className="text-sm font-medium text-text-primary leading-tight">{sublabel}</p>
      {detail && <p className="text-xs text-text-muted mt-2 leading-relaxed">{detail}</p>}
    </div>
  );
}
