#!/usr/bin/env node

/**
 * Script de prueba para el sistema de migraciones Strapi v5
 * Verifica que todo esté configurado correctamente
 */

const fs = require('fs');
const path = require('path');

console.log('\n╔════════════════════════════════════════════╗');
console.log('║  🧪 TEST: Sistema de Migraciones v5      ║');
console.log('╚════════════════════════════════════════════╝\n');

let allPassed = true;

// Test 1: Verificar archivos principales
console.log('📂 Test 1: Verificando archivos...');

const requiredFiles = [
  'database/migrations/run-migrations.js',
  'database/migrations/utils/migration-helper.js',
  'src/index.js',
  'config/database.js'
];

for (const file of requiredFiles) {
  const filePath = path.join(__dirname, '..', file);
  if (fs.existsSync(filePath)) {
    console.log(`   ✓ ${file}`);
  } else {
    console.log(`   ✗ ${file} - NO ENCONTRADO`);
    allPassed = false;
  }
}

// Test 2: Verificar migration-helper.js
console.log('\n🛠️  Test 2: Verificando helper de migraciones...');

// Test 2: Verificar migration-helper.js
console.log('\n🛠️  Test 2: Verificando helper de migraciones...');

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
      console.log(`   ✓ ${funcName}()`);
    } else {
      console.log(`   ✗ ${funcName}() no encontrada`);
      allPassed = false;
    }
  }
} catch (error) {
  console.log(`   ✗ Error al cargar migration-helper.js: ${error.message}`);
  allPassed = false;
}

// Test 3: Verificar src/index.js
console.log('\n⚡ Test 3: Verificando bootstrap de Strapi...');

try {
  const indexPath = path.join(__dirname, '..', 'src/index.js');
  const indexContent = fs.readFileSync(indexPath, 'utf8');
  
  if (indexContent.includes('runMigrations')) {
    console.log('   ✓ runMigrations importado en src/index.js');
  } else {
    console.log('   ✗ runMigrations NO encontrado en src/index.js');
    allPassed = false;
  }
  
  if (indexContent.includes('bootstrap')) {
    console.log('   ✓ Función bootstrap configurada');
  } else {
    console.log('   ✗ Función bootstrap no encontrada');
    allPassed = false;
  }
} catch (error) {
  console.log(`   ✗ Error al leer src/index.js: ${error.message}`);
  allPassed = false;
}

// Test 4: Verificar package.json
console.log('\n📦 Test 4: Verificando scripts npm...');

try {
  const packageJson = require(path.join(__dirname, '..', 'package.json'));
  
  if (packageJson.scripts['migration:create']) {
    console.log('   ✓ Script "migration:create" disponible');
  } else {
    console.log('   ⊘ Script "migration:create" no encontrado (opcional)');
  }
} catch (error) {
  console.log(`   ✗ Error al leer package.json: ${error.message}`);
}

// Resumen final
console.log('\n╔════════════════════════════════════════════╗');
console.log('║  📊 RESUMEN DE TESTS                      ║');
console.log('╚════════════════════════════════════════════╝\n');

if (allPassed) {
  console.log('✅ ¡Todos los tests pasaron!\n');
  console.log('🎉 El sistema de migraciones está configurado para Strapi v5.\n');
  console.log('⚠️  IMPORTANTE sobre Strapi v5:');
  console.log('   - bootstrap() se ejecuta DESPUÉS del schema sync');
  console.log('   - Define `default` en tus schema.json para campos requeridos');
  console.log('   - Las migraciones manuales son para transformaciones de datos');
  console.log('\nPróximos pasos:');
  console.log('  1. Lee: database/migrations/README.md');
  console.log('  2. Define defaults en tus schemas cuando añadas campos');
  console.log('  3. Usa migraciones solo para lógica compleja\n');
  process.exit(0);
} else {
  console.log('❌ Algunos tests fallaron.\n');
  console.log('Por favor, revisa los errores arriba.');
  console.log('Documentación: database/migrations/README.md\n');
  process.exit(1);
}
