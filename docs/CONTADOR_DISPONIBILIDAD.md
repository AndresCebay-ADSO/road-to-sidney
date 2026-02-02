# 📊 Contador de Disponibilidad - Guía de Uso

## 🎯 ¿Qué es?

Un contador que muestra cuántas camisetas quedan disponibles de la edición limitada de 100 unidades. Crea urgencia y motiva a los visitantes a reservar.

---

## 📝 Cómo Actualizar el Contador

### Paso 1: Abrir el archivo
```
src/lib/constants.ts
```

### Paso 2: Cambiar el número
```typescript
export const LIMITED_EDITION_STATS = {
  total: 100,
  available: 47,  // ← Cambia este número
  // ...
};
```

### Paso 3: Guardar y hacer commit
```bash
git add src/lib/constants.ts
git commit -m "Actualizar disponibilidad: X camisetas disponibles"
git push origin main
```

**¡Listo!** Vercel actualizará automáticamente.

---

## 📊 Ejemplos de Actualización

### Cuando vendes 1 camiseta:
```typescript
available: 47  // Antes
available: 46  // Después
```

### Cuando vendes 5 camisetas:
```typescript
available: 47  // Antes
available: 42  // Después
```

### Cuando se agota:
```typescript
available: 1   // Antes
available: 0   // Después (mostrará "¡AGOTADO!")
```

---

## 🎨 Variantes del Contador

El contador tiene 3 variantes que se usan en diferentes lugares:

### 1. `badge` - Pequeño, destacado
- **Ubicación:** Hero section
- **Uso:** Muestra disponibilidad de forma discreta pero visible

### 2. `full` - Completo con barra de progreso
- **Ubicación:** Product section
- **Uso:** Muestra disponibilidad detallada con barra visual

### 3. `compact` - Solo texto
- **Ubicación:** (No usado actualmente, disponible para futuro)
- **Uso:** Versión minimalista

---

## 🚨 Niveles de Urgencia

El contador cambia automáticamente de color y mensaje según la disponibilidad:

| Disponibles | Mensaje | Color | Estilo |
|-------------|---------|-------|--------|
| 80-100 | "Solo quedan X disponibles" | Normal | Azul/Dorado |
| 50-79 | "Solo quedan X disponibles" | Normal | Azul/Dorado |
| 30-49 | "¡Quedan pocas! Solo X disponibles" | Naranja | Destacado |
| 15-29 | "¡Últimas unidades! Solo X disponibles" | Naranja intenso | Urgente |
| 5-14 | "¡Casi agotado! Solo X disponibles" | Rojo/Naranja | Muy urgente |
| 1-4 | "¡Últimas X camisetas!" | Rojo | Crítico |
| 0 | "¡AGOTADO!" | Gris | Agotado |

---

## 📍 Ubicaciones Actuales

1. **Hero Section** (arriba de la página)
   - Variante: `badge`
   - Muestra disponibilidad de forma discreta

2. **Product Section** (junto al precio)
   - Variante: `full`
   - Muestra disponibilidad completa con barra de progreso

---

## 💡 Consejos

### ✅ Hacer:
- Actualizar el contador cada vez que confirmes una venta
- Mantener el número actualizado (máximo 1-2 días de diferencia)
- Ser honesto con el número

### ❌ No hacer:
- Poner un número muy bajo desde el inicio (pierde credibilidad)
- Olvidar actualizarlo por semanas
- Mentir sobre la disponibilidad

---

## 🔧 Personalización

Si quieres cambiar los mensajes o rangos, edita:
```
src/lib/constants.ts → getMessage()
```

Si quieres cambiar el diseño, edita:
```
src/components/AvailabilityCounter.tsx
```

---

## 📊 Ejemplo de Flujo

```
Semana 1: available: 100 → "Solo quedan 100 disponibles"
Semana 2: available: 85  → "Solo quedan 85 disponibles"
Semana 3: available: 60  → "Solo quedan 60 disponibles"
Semana 4: available: 35  → "¡Quedan pocas! Solo 35 disponibles"
Semana 5: available: 18  → "¡Últimas unidades! Solo 18 disponibles"
Semana 6: available: 8   → "¡Casi agotado! Solo 8 disponibles"
Semana 7: available: 2   → "¡Últimas 2 camisetas!"
Semana 8: available: 0   → "¡AGOTADO!"
```

---

## ❓ Preguntas Frecuentes

**P: ¿Con qué frecuencia debo actualizarlo?**
R: Idealmente cada vez que confirmes una venta. Mínimo 1-2 veces por semana.

**P: ¿Qué pasa si me equivoco con el número?**
R: Solo actualiza el archivo y haz commit. Vercel actualizará automáticamente.

**P: ¿Puedo usar números decimales?**
R: No, usa solo números enteros (47, no 47.5).

**P: ¿Qué pasa si pongo un número mayor a 100?**
R: El contador funcionará, pero no tiene sentido. El total es 100.

---

## 🎉 ¡Listo!

El contador está implementado y funcionando. Solo necesitas actualizar el número en `src/lib/constants.ts` cuando vendas camisetas.
