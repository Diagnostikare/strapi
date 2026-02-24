#!/usr/bin/env node

/**
 * Script de prueba para el sistema de auto-migración
 * Verifica que todo esté configurado correctamente
 */

const fs = require('fs');
const path = require('path');

let allPassed = true;

// Test 1: Verificar archivos principales
console.log('Test 1: Verificando archivos...');

const requiredFiles = [
  'database/migrations/auto-migrate.js',
  'database/migrations/run-migrations.js',
  'database/migrations/utils/migration-helper.js',
  'src/index.js',
  'config/database.js'
];

for (const file of requiredFiles) {
  const filePath = path.join(__dirname, '..', file);
  if (fs.existsSync(filePath)) {
    console.log(`✓ ${file}`);
  } else {
    console.log(`✗ ${file} - NO ENCONTRADO`);
    allPassed = false;
  }
}

// Test 2: Verificar que auto-migrate.js tiene las funciones correctas
console.log('Test 2: Verificando funciones de auto-migración...');

try {
  const autoMigrate = require(path.join(__dirname, '..', 'database/migrations/auto-migrate.js'));
  
  if (typeof autoMigrate.autoMigrateSchema === 'function') {
    console.log('✓ autoMigrateSchema() existe');
  } else {
    console.log('✗ autoMigrateSchema() no encontrada');
    allPassed = false;
  }
  
  if (typeof autoMigrate.getDefaultValueForType === 'function') {
    console.log('✓ getDefaultValueForType() existe');
  } else {
    console.log('✗ getDefaultValueForType() no encontrada');
    allPassed = false;
  }
} catch (error) {
  console.log(`✗ Error al cargar auto-migrate.js: ${error.message}`);
  allPassed = false;
}

// Test 3: Verificar migration-helper.js
console.log('Test 3: Verificando helper de migraciones...');

try {
  const helper = require(path.join(__dirname, '..', 'database/migrations/utils/migration-helper.js'));
  
  const expectedFunctions = [
    'addColumnWithDefault',
    'alterColumn',
    'dropColumnSafe',
    'updateExistingData',
    'createIndexSafe',
    'tableExists'
  ];
  
  for (const funcName of expectedFunctions) {
    if (typeof helper[funcName] === 'function') {
      console.log(`✓ ${funcName}()`);
    } else {
      console.log(`✗ ${funcName}() no encontrada`);
      allPassed = false;
    }
  }
} catch (error) {
  console.log(`✗ Error al cargar migration-helper.js: ${error.message}`);
  allPassed = false;
}

// Test 4: Verificar src/index.js
console.log('Test 4: Verificando bootstrap de Strapi...');

try {
  const indexPath = path.join(__dirname, '..', 'src/index.js');
  const indexContent = fs.readFileSync(indexPath, 'utf8');
  
  if (indexContent.includes('autoMigrateSchema')) {
    console.log('✓ autoMigrateSchema importado en src/index.js');
  } else {
    console.log('✗ autoMigrateSchema NO encontrado en src/index.js');
    allPassed = false;
  }
  
  if (indexContent.includes('bootstrap')) {
    console.log('✓ Función bootstrap configurada');
  } else {
    console.log('✗ Función bootstrap no encontrada');
    allPassed = false;
  }
} catch (error) {
  console.log(`✗ Error al leer src/index.js: ${error.message}`);
  allPassed = false;
}

// Test 5: Verificar package.json
console.log('Test 5: Verificando scripts npm...');

try {
  const packageJson = require(path.join(__dirname, '..', 'package.json'));
  
  if (packageJson.scripts['migration:create']) {
    console.log('✓ Script "migration:create" disponible');
  } else {
    console.log('⊘ Script "migration:create" no encontrado (opcional)');
  }
} catch (error) {
  console.log(`✗ Error al leer package.json: ${error.message}`);
}

// Test 6: Test de la función getDefaultValueForType
console.log('Test 6: Probando generación de valores por defecto...');

try {
  const { getDefaultValueForType } = require(path.join(__dirname, '..', 'database/migrations/auto-migrate.js'));
  
  const testCases = [
    { type: 'string', required: true, expected: '' },
    { type: 'string', required: false, expected: null },
    { type: 'integer', required: true, expected: 0 },
    { type: 'boolean', required: true, expected: false },
    { type: 'json', required: true, expected: {} },
  ];
  
  let testsPassed = 0;
  for (const test of testCases) {
    const result = getDefaultValueForType(test);
    const passed = JSON.stringify(result) === JSON.stringify(test.expected);
    
    if (passed) {
      console.log(`   ✓ ${test.type} (required: ${test.required}) → ${JSON.stringify(result)}`);
      testsPassed++;
    } else {
      console.log(`   ✗ ${test.type} esperado: ${test.expected}, obtenido: ${result}`);
      allPassed = false;
    }
  }
  
  console.log(`   ${testsPassed}/${testCases.length} tests pasados`);
  
} catch (error) {
  console.log(`   ✗ Error en pruebas: ${error.message}`);
  allPassed = false;
}

// Resumen final

if (allPassed) {
  console.log('✅ ¡Todos los tests pasaron!\n');
  console.log('🎉 El sistema de auto-migración está listo para usar.\n');
  console.log('Próximos pasos:');
  console.log('  1. Prueba localmente: npm run dev');
  console.log('  2. Verifica los logs en consola');
  console.log('  3. Haz commit y push');
  console.log('  4. ¡Merge a develop y listo!\n');
  process.exit(0);
} else {
  console.log('❌ Algunos tests fallaron.\n');
  console.log('Por favor, revisa los errores arriba.');
  console.log('Documentación: database/migrations/AUTO-MIGRACION.md\n');
  process.exit(1);
}
