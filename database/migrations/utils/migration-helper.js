/**
 * Migration Helper para Strapi v5
 * Ayuda a ejecutar migraciones de schema de forma segura con valores por defecto
 */

module.exports = {
  /**
   * Añade una columna con valor por defecto de forma segura
   * @param {Object} knex - Instancia de Knex
   * @param {string} tableName - Nombre de la tabla
   * @param {string} columnName - Nombre de la columna
   * @param {Function} columnDefinition - Función que define la columna
   * @param {*} defaultValue - Valor por defecto
   */
  async addColumnWithDefault(knex, tableName, columnName, columnDefinition, defaultValue = null) {
    const hasColumn = await knex.schema.hasColumn(tableName, columnName);
    
    if (!hasColumn) {
      await knex.schema.table(tableName, (table) => {
        const column = columnDefinition(table);
        if (defaultValue !== null) {
          column.defaultTo(defaultValue);
        }
      });

      // Actualizar registros existentes con el valor por defecto
      if (defaultValue !== null) {
        await knex(tableName).whereNull(columnName).update({ [columnName]: defaultValue });
      }

      console.log(`✓ Columna '${columnName}' añadida a '${tableName}' con valor por defecto`);
    } else {
      console.log(`⊘ Columna '${columnName}' ya existe en '${tableName}'`);
    }
  },

  /**
   * Modifica una columna existente de forma segura
   * @param {Object} knex - Instancia de Knex
   * @param {string} tableName - Nombre de la tabla
   * @param {string} columnName - Nombre de la columna
   * @param {Function} columnDefinition - Función que define la columna
   */
  async alterColumn(knex, tableName, columnName, columnDefinition) {
    const hasColumn = await knex.schema.hasColumn(tableName, columnName);
    
    if (hasColumn) {
      await knex.schema.alterTable(tableName, (table) => {
        table.dropColumn(columnName);
      });
      
      await knex.schema.table(tableName, (table) => {
        columnDefinition(table);
      });

      console.log(`✓ Columna '${columnName}' modificada en '${tableName}'`);
    } else {
      console.log(`⊘ Columna '${columnName}' no existe en '${tableName}', no se puede modificar`);
    }
  },

  /**
   * Elimina una columna de forma segura
   * @param {Object} knex - Instancia de Knex
   * @param {string} tableName - Nombre de la tabla
   * @param {string} columnName - Nombre de la columna
   */
  async dropColumnSafe(knex, tableName, columnName) {
    const hasColumn = await knex.schema.hasColumn(tableName, columnName);
    
    if (hasColumn) {
      await knex.schema.table(tableName, (table) => {
        table.dropColumn(columnName);
      });

      console.log(`✓ Columna '${columnName}' eliminada de '${tableName}'`);
    } else {
      console.log(`⊘ Columna '${columnName}' no existe en '${tableName}'`);
    }
  },

  /**
   * Actualiza datos existentes de forma segura
   * @param {Object} knex - Instancia de Knex
   * @param {string} tableName - Nombre de la tabla
   * @param {Object} whereCondition - Condición WHERE
   * @param {Object} updateData - Datos a actualizar
   */
  async updateExistingData(knex, tableName, whereCondition, updateData) {
    const count = await knex(tableName).where(whereCondition).count('* as count');
    const recordCount = count[0].count;

    if (recordCount > 0) {
      await knex(tableName).where(whereCondition).update(updateData);
      console.log(`✓ ${recordCount} registros actualizados en '${tableName}'`);
    } else {
      console.log(`⊘ No hay registros para actualizar en '${tableName}'`);
    }
  },

  /**
   * Crea un índice de forma segura
   * @param {Object} knex - Instancia de Knex
   * @param {string} tableName - Nombre de la tabla
   * @param {string|Array} columns - Columna(s) para el índice
   * @param {string} indexName - Nombre del índice
   */
  async createIndexSafe(knex, tableName, columns, indexName) {
    const hasTable = await knex.schema.hasTable(tableName);
    
    if (hasTable) {
      // Verificar si el índice ya existe
      const indexes = await knex.raw(`
        SELECT indexname 
        FROM pg_indexes 
        WHERE tablename = ? AND indexname = ?
      `, [tableName, indexName]);

      if (indexes.rows.length === 0) {
        await knex.schema.table(tableName, (table) => {
          table.index(columns, indexName);
        });
        console.log(`✓ Índice '${indexName}' creado en '${tableName}'`);
      } else {
        console.log(`⊘ Índice '${indexName}' ya existe en '${tableName}'`);
      }
    }
  },

  /**
   * Ejecuta una migración con manejo de errores
   * @param {Function} migrationFn - Función de migración a ejecutar
   * @param {string} migrationName - Nombre de la migración
   */
  async executeSafe(migrationFn, migrationName) {
    try {
      console.log(`\n→ Ejecutando migración: ${migrationName}`);
      await migrationFn();
      console.log(`✓ Migración completada: ${migrationName}\n`);
      return { success: true, name: migrationName };
    } catch (error) {
      console.error(`✗ Error en migración ${migrationName}:`, error.message);
      // No lanzar el error para permitir que el servidor continúe
      return { success: false, name: migrationName, error: error.message };
    }
  },

  /**
   * Verifica si una tabla existe
   * @param {Object} knex - Instancia de Knex
   * @param {string} tableName - Nombre de la tabla
   */
  async tableExists(knex, tableName) {
    return await knex.schema.hasTable(tableName);
  },

  /**
   * Crea una tabla backup antes de modificar
   * @param {Object} knex - Instancia de Knex
   * @param {string} tableName - Nombre de la tabla
   */
  async createBackupTable(knex, tableName) {
    const backupName = `${tableName}_backup_${Date.now()}`;
    const hasTable = await knex.schema.hasTable(tableName);
    
    if (hasTable) {
      await knex.raw(`CREATE TABLE ${backupName} AS SELECT * FROM ${tableName}`);
      console.log(`✓ Backup creado: ${backupName}`);
      return backupName;
    }
    return null;
  }
};
