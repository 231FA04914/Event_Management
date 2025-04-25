<?php
$host = "localhost:2626";
$user = "root";
$pass = "";
$dbname = "event";

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>