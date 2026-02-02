/**
 * Estadísticas de la edición limitada
 * Actualizar manualmente el número de disponibles cuando se confirme una venta
 */
export const LIMITED_EDITION_STATS = {
  total: 100,
  available: 47, // Actualizar este número cuando se confirme una venta
  
  /**
   * Obtiene el mensaje según la cantidad disponible
   */
  getMessage(): string {
    const { available, total } = this;
    
    if (available === 0) {
      return "¡AGOTADO!";
    }
    if (available <= 4) {
      return `¡Últimas ${available} camisetas!`;
    }
    if (available <= 14) {
      return `¡Casi agotado! Solo ${available} disponibles`;
    }
    if (available <= 29) {
      return `¡Últimas unidades! Solo ${available} disponibles`;
    }
    if (available <= 49) {
      return `¡Quedan pocas! Solo ${available} disponibles`;
    }
    return `Solo quedan ${available} disponibles`;
  },
  
  /**
   * Obtiene el nivel de urgencia para estilos
   */
  getUrgencyLevel(): "normal" | "low" | "medium" | "high" | "critical" | "soldout" {
    const { available } = this;
    
    if (available === 0) return "soldout";
    if (available <= 4) return "critical";
    if (available <= 14) return "high";
    if (available <= 29) return "medium";
    if (available <= 49) return "low";
    return "normal";
  },
  
  /**
   * Calcula el porcentaje vendido
   */
  getSoldPercentage(): number {
    return Math.round(((this.total - this.available) / this.total) * 100);
  }
};
