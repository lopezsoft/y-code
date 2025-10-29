<?php
/**
 * Script para hacer backup de las bases de datos
 * Uso: php backup.php
 */

// Configuración de conexión
$host = '127.0.0.1';
$port = '3307';
$user = 'root';
$password = '';

// BDs a respaldar
$databases = [
    'y_code_companies' => 'backup_y_code_companies.sql',
    'y_code' => 'backup_y_code.sql',
];

// PDO para conectar a MySQL
foreach ($databases as $db => $filename) {
    try {
        $dsn = "mysql:host=$host;port=$port;dbname=$db";
        $pdo = new PDO($dsn, $user, $password);
        
        // Ejecutar mysqldump mediante PDO (si es posible)
        // Alternativa: usar shell_exec si está disponible
        
        echo "📦 Intentando backup de $db...\n";
        
        // Obtener todas las tablas
        $tables = $pdo->query("SHOW TABLES")->fetchAll(PDO::FETCH_COLUMN);
        
        $backupContent = "-- Backup de $db\n";
        $backupContent .= "-- Fecha: " . date('Y-m-d H:i:s') . "\n\n";
        
        foreach ($tables as $table) {
            echo "  Exportando tabla: $table\n";
            
            // CREATE TABLE
            $createTable = $pdo->query("SHOW CREATE TABLE `$table`")->fetch(PDO::FETCH_NUM);
            $backupContent .= "\n" . $createTable[1] . ";\n\n";
            
            // INSERT DATA
            $rows = $pdo->query("SELECT * FROM `$table`")->fetchAll(PDO::FETCH_ASSOC);
            
            if (!empty($rows)) {
                $keys = array_keys($rows[0]);
                $keys = array_map(function($k) { return "`$k`"; }, $keys);
                $keyStr = implode(', ', $keys);
                
                $backupContent .= "INSERT INTO `$table` ($keyStr) VALUES\n";
                
                foreach ($rows as $idx => $row) {
                    $values = array_map(function($v) use ($pdo) {
                        if ($v === null) return 'NULL';
                        return $pdo->quote($v);
                    }, $row);
                    
                    $valueStr = implode(', ', $values);
                    $backupContent .= "(" . $valueStr . ")";
                    $backupContent .= ($idx < count($rows) - 1) ? ",\n" : ";\n\n";
                }
            }
        }
        
        // Guardar archivo
        $filepath = __DIR__ . '/' . $filename;
        file_put_contents($filepath, $backupContent);
        
        echo "✅ Backup completado: $filepath\n";
        echo "   Tamaño: " . formatBytes(filesize($filepath)) . "\n\n";
        
    } catch (Exception $e) {
        echo "❌ Error en $db: " . $e->getMessage() . "\n";
    }
}

function formatBytes($bytes) {
    $units = ['B', 'KB', 'MB', 'GB'];
    $bytes = max($bytes, 0);
    $pow = floor(($bytes ? log($bytes) : 0) / log(1024));
    $pow = min($pow, count($units) - 1);
    $bytes /= (1 << (10 * $pow));
    return round($bytes, 2) . ' ' . $units[$pow];
}

echo "✨ Proceso de backup completado\n";
?>
