import { AlertTriangle, Zap } from "lucide-react";
import { LIMITED_EDITION_STATS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface AvailabilityCounterProps {
  variant?: "compact" | "full" | "badge";
  className?: string;
}

export const AvailabilityCounter = ({ 
  variant = "full",
  className 
}: AvailabilityCounterProps) => {
  const stats = LIMITED_EDITION_STATS;
  const message = stats.getMessage();
  const urgency = stats.getUrgencyLevel();
  const soldPercentage = stats.getSoldPercentage();
  
  // Estilos según urgencia
  const urgencyStyles = {
    normal: "text-muted-foreground border-border",
    low: "text-primary border-primary/30 bg-primary/5",
    medium: "text-orange-500 border-orange-500/30 bg-orange-500/5",
    high: "text-orange-600 border-orange-600/40 bg-orange-600/10",
    critical: "text-red-500 border-red-500/40 bg-red-500/10",
    soldout: "text-muted-foreground border-destructive bg-destructive/10"
  };

  // Variante compacta (solo texto)
  if (variant === "compact") {
    return (
      <p className={cn("text-sm font-medium", className)}>
        {message}
      </p>
    );
  }

  // Variante badge (pequeño, destacado)
  if (variant === "badge") {
    return (
      <div className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold transition-colors",
        urgencyStyles[urgency],
        className
      )}>
        {urgency === "critical" || urgency === "high" ? (
          <AlertTriangle className="w-3.5 h-3.5" />
        ) : (
          <Zap className="w-3.5 h-3.5" />
        )}
        <span>{message}</span>
      </div>
    );
  }

  // Variante full (completa con barra de progreso)
  return (
    <div className={cn(
      "p-4 rounded-lg border transition-colors",
      urgencyStyles[urgency],
      className
    )}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {urgency === "critical" || urgency === "high" ? (
            <AlertTriangle className="w-5 h-5" />
          ) : (
            <Zap className="w-5 h-5" />
          )}
          <span className="font-display font-semibold text-sm sm:text-base">
            {message}
          </span>
        </div>
        <span className="text-xs text-muted-foreground">
          {stats.available} de {stats.total}
        </span>
      </div>
      
      {/* Barra de progreso */}
      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
        <div 
          className={cn(
            "h-full transition-all duration-500 rounded-full",
            urgency === "critical" || urgency === "high" 
              ? "bg-gradient-to-r from-orange-500 to-red-500"
              : urgency === "medium"
              ? "bg-gradient-to-r from-primary to-orange-500"
              : "bg-gradient-to-r from-primary to-primary/80"
          )}
          style={{ width: `${soldPercentage}%` }}
        />
      </div>
      
      {urgency === "soldout" && (
        <p className="text-xs text-center mt-2 text-muted-foreground">
          Gracias por tu apoyo. La edición limitada se agotó.
        </p>
      )}
    </div>
  );
};
