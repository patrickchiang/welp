<?php

$host = "localhost";
$user = "username";
$pass = "password";
$db = "database";

try {
    $conn = new PDO("pgsql:host=$host;port=5432;dbname=$db;user=$user;password=$pass");
} catch (Exception $e) {
    echo "Unable to connect: " . $e -> getMessage() . "<p>";
}

$conn -> beginTransaction();
?>
