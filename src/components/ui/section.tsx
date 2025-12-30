import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "dark" | "subtle";
}

export const Section = ({
  children,
  className,
  id,
  variant = "default",
}: SectionProps) => {
  const variants = {
    default: "bg-background",
    dark: "bg-primary text-primary-foreground",
    subtle: "bg-secondary",
  };

  return (
    <section
      id={id}
      className={cn("py-18 lg:py-24", variants[variant], className)}>
      <div className="container mx-auto px-6 lg:px-8">{children}</div>
    </section>
  );
};

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export const SectionHeader = ({
  label,
  title,
  description,
  className,
  align = "left",
}: SectionHeaderProps) => {
  return (
    <div className={cn(align === "center" && "mx-auto text-center", className)}>
      <h2
        className={cn(
          align === "center" && "mx-auto justify-center",
          " text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight uppercase flex items-center gap-4",
          className
        )}>
        <div className="h-px w-12 bg-foreground" />
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-base text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
