#!/usr/bin/env php
<?php

/**
 * Script para extraer todas las tablas del SQL de referencia
 * Lee y-code.sql y extrae CREATE TABLE statements
 */

$sqlFile = __DIR__ . '/../scripts sql/y-code.sql';
$content = file_get_contents($sqlFile);

// Regex para encontrar CREATE TABLE
$pattern = '/CREATE TABLE IF NOT EXISTS `([^`]+)`\s*\((.*?)\)\s*ENGINE/is';
preg_match_all($pattern, $content, $matches, PREG_SET_ORDER);

$tables = [];

foreach ($matches as $match) {
    $tableName = $match[1];
    $tableDefinition = $match[2];
    
    // Procesar columnas
    $lines = array_filter(array_map('trim', explode("\n", $tableDefinition)));
    $columns = [];
    
    foreach ($lines as $line) {
        // Saltar keys, constraints, etc
        if (preg_match('/^(PRIMARY|KEY|FULLTEXT|CONSTRAINT|FOREIGN|INDEX|UNIQUE)/i', $line)) {
            continue;
        }
        
        // Extraer definición de columna
        if (preg_match('/^`?([a-z_]+)`?\s+(.+?)(?:,|$)/i', $line, $colMatch)) {
            $columnName = $colMatch[1];
            $columnDef = $colMatch[2];
            
            $columns[$columnName] = $columnDef;
        }
    }
    
    $tables[$tableName] = $columns;
}

// Mostrar tablas encontradas
echo "\n📊 Tablas encontradas: " . count($tables) . "\n\n";

foreach ($tables as $tableName => $columns) {
    echo "✓ $tableName (" . count($columns) . " columnas)\n";
}

// Guardar en JSON
$jsonFile = __DIR__ . '/tables-structure.json';
file_put_contents($jsonFile, json_encode($tables, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

echo "\n✅ Estructura guardada en: $jsonFile\n";

// Mostrar las primeras 5 tablas como ejemplo
echo "\n📋 Primeras 5 tablas:\n\n";
$count = 0;
foreach ($tables as $tableName => $columns) {
    if ($count >= 5) break;
    echo "== $tableName ==\n";
    foreach ($columns as $col => $def) {
        echo "  $col: $def\n";
    }
    echo "\n";
    $count++;
}
