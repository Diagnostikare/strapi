# 🔄 Sistema de Migraciones Automáticas

## 🤖 ¿Qué Hace?

Este sistema **detecta automáticamente** cambios en tus content-types de Strapi y aplica valores por defecto seguros. **No necesitas escribir código** para la mayoría de los casos.

---

## ✨ Funcionamiento Automático

### Cuando modificas un content-type en Strapi:

1. **El sistema detecta** el cambio al iniciar
2. **Aplica valores por defecto** según el tipo de campo
3. **Strapi continúa** sin errores
4. **Deploy exitoso** en Railway

### Valores por defecto aplicados:

| Tipo | Valor por Defecto | Si es Required |
|------|-------------------|----------------|
| String/Text | `null` | `''` (vacío) |
| Integer/Float | `null` | `0` |
| Boolean | `null` | `false` |
| Date/DateTime | `null` | `null` |
| JSON | `null` | `{}` |
| Enum | `null` | Primer valor |

---

## 🚀 Uso Normal (Sin Hacer Nada)

### 1. Modificas en Strapi Admin:
```
Content-Type Builder → Blog → Add Field
→ Boolean: "is_featured"
→ Required: Yes
→ Save
```

### 2. Commit y Push:
```bash
git add src/api/*/content-types/
git commit -m "feat: add is_featured field"
git push
```

### 3. Merge a develop:
```bash
# Railway detecta el cambio y ejecuta automáticamente
```

### 4. Al iniciar verás:
```
╔════════════════════════════════════════════╗
║   🤖 AUTO-MIGRACIÓN INTELIGENTE          ║
╚════════════════════════════════════════════╝

🔍 Analizando: api::blog.blog (blogs)
   → Campo nuevo: 'is_featured' (requerido)
   ⚡ Aplicando valor por defecto a 42 registros...
   ✓ Registros actualizados con: false

✅ Valores por defecto aplicados
✓ Strapi iniciado correctamente
```

**¡Listo!** No hiciste nada más.

---

## 📝 Migraciones Manuales (Casos Avanzados)

Úsalas **solo** si necesitas lógica compleja que el sistema automático no puede manejar:
- Calcular valores basados en otros campos
- Transformar datos existentes
- Operaciones en múltiples tablas

### Crear migración manual:
```bash
npm run migration:create nombre-descripcion
```

### Ejemplo de migración manual:
```javascript
const migrationHelper = require('./utils/migration-helper');

module.exports = {
  async up(knex) {
    // Añadir campo
    await migrationHelper.addColumnWithDefault(
      knex,
      'blogs',           // tabla
      'reading_time',    // columna
      (table) => table.integer('reading_time'),
      0
    );

    // Calcular tiempo de lectura basado en contenido
    const blogs = await knex('blogs').select('id', 'content');
    for (const blog of blogs) {
      const wordCount = blog.content.split(' ').length;
      const minutes = Math.ceil(wordCount / 200);
      await knex('blogs').where('id', blog.id).update({ reading_time: minutes });
    }
  },

  async down(knex) {
    await migrationHelper.dropColumnSafe(knex, 'blogs', 'reading_time');
  }
};
```

### Helpers disponibles:
- `addColumnWithDefault(knex, tabla, columna, definición, valorDefault)`
- `dropColumnSafe(knex, tabla, columna)`
- `updateExistingData(knex, tabla, condición, datos)`
- `createIndexSafe(knex, tabla, columnas, nombreIndex)`
- `tableExists(knex, tabla)`

---

## 🔧 Comandos

```bash
# Verificar configuración
npm run migration:test

# Crear migración manual (solo casos avanzados)
npm run migration:create nombre-migracion

# Ver migraciones en acción
npm run dev
```

---

## ⚠️ Troubleshooting

**El campo no se añadió:**
- Verifica los logs al iniciar el servidor
- El sistema muestra qué campos detectó

**Migración falló:**
- El servidor continúa funcionando (es seguro)
- Revisa `strapi_migrations_custom` en la BD para ver el error
- Crea nueva migración para corregir

**Ver migraciones ejecutadas:**
```sql
SELECT * FROM strapi_migrations_custom ORDER BY executed_at DESC;
```

---

## 📋 Resumen

### ✅ El sistema hace automáticamente:
- Detectar campos nuevos en content-types
- Aplicar valores por defecto inteligentes
- Actualizar registros existentes
- Prevenir errores en deployment

### ❌ No necesitas:
- Escribir SQL manualmente
- Crear migraciones para cambios simples
- Configurar nada en Railway
- Detener el servidor

### 🎯 Solo creas migraciones manuales si necesitas:
- Lógica de negocio compleja
- Cálculos basados en otros campos
- Transformaciones de datos

---

**Sistema listo**. Modifica tus content-types y deja que el sistema haga el resto. 🚀
