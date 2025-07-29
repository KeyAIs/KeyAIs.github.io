<?php

include 'conection.php'
$username = $_POST['username'];
$password = $_POST['password'];

$query = $conn->prepare("SELECT * FROM users WHERE username = ? AND password = ?");
$query-bind_param("ss", $username, $password);
$query-execute();
$result = $query->get_result();

if($result-> num_rows > 0)
{
    echo json_encode(["success" => true]);
}
else{
    echo json_encode(["success" => false]);
}
?>