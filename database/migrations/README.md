# 🔄 Sistema de Migraciones para Strapi v5

**Opción 1: Define `default` en tus schemas** (Recomendado)

Cuando añades un campo requerido, define el valor por defecto en el `schema.json`:

```json
{
  "attributes": {
    "is_featured": {
      "type": "boolean",
      "default": false,
      "required": true
    },
    "status": {
      "type": "string",
      "default": "draft"
    }
  }
}
```

Strapi aplicará estos defaults automáticamente al sincronizar.

**Opción 2: Usa migraciones manuales**

Para transformaciones complejas o cuando no puedes usar defaults en schema.

---

## 🚀 Workflow Recomendado

### 1. Añadir campo en Strapi Admin:
```
Content-Type Builder → Blog → Add Field
→ Boolean: "is_featured"
→ Required: Yes
```

### 2. Definir default en el schema.json generado:
```json
// src/api/blog/content-types/blog/schema.json
{
  "attributes": {
    "is_featured": {
      "type": "boolean",
      "default": false,  // ← Añade esto
      "required": true  
    }
  }
}
```

### 3. Commit y Push:
```bash
git add src/api/blog/content-types/
git commit -m "feat: add is_featured with default"
git push
```

### 4. Railway ejecuta automáticamente:
```
✅ Strapi sincroniza schema
✅ Aplica default: false a registros existentes
✅ Deploy exitoso
```

**¡Listo!** Strapi lo maneja automáticamente.

---

## 📝 Migraciones Manuales (Cuando las Necesitas)

Úsalas cuando:
- Necesitas calcular valores basados en otros campos
- Transformar datos existentes de forma compleja
- NO puedes usar `default` en el schema
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

### ✅ Para campos simples (Recomendado):
1. Añade `"default": valor` en tu schema.json
2. Strapi aplica el default automáticamente
3. ❌ **NO** intentes ejecutar código antes del schema sync

### 🔧 Para transformaciones complejas:
1. Crea una migración manual: `npm run migration:create nombre`
2. Implementa la lógica en el archivo generado
3. Se ejecuta en `bootstrap()` (después de schema sync)
4. Útil para: cálculos, transformaciones, datos derivados

### ⚠️ Limitación de Strapi v5:
- `bootstrap()` se ejecuta DESPUÉS del schema sync
- NO puedes prevenir errores de NOT NULL dinámicamente
- **Solución**: Usa `default` en schemas o migraciones SQL directas

---

**Sistema configurado**. Usa defaults en schemas para casos simples. 🚀
