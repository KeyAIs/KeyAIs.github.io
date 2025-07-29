<?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "base";

$conn = new mysql($host, $user, $pass, $db);

if($conn-> connect_error){
    die("Conexion fallida" . $conn-> connect_error);
}
?>