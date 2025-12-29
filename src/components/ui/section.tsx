import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "dark" | "subtle";
}

export const Section = ({ children, className, id, variant = "default" }: SectionProps) => {
  const variants = {
    default: "bg-background",
    dark: "bg-primary text-primary-foreground",
    subtle: "bg-secondary",
  };

  return (
    <section id={id} className={cn("py-20 lg:py-28", variants[variant], className)}>
      <div className="container mx-auto px-6 lg:px-8">
        {children}
      </div>
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
  align = "left" 
}: SectionHeaderProps) => {
  return (
    <div className={cn(
      "max-w-3xl",
      align === "center" && "mx-auto text-center",
      className
    )}>
      {label && (
        <div className={cn("flex items-center gap-4 mb-4", align === "center" && "justify-center")}>
          <div className="gold-line" />
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            {label}
          </span>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
