<?php
//dang nhap
use \Firebase\JWT\JWT;
require __DIR__ . '/vendor/autoload.php';
include('function.php');
include('connect/connect.php');

$json = file_get_contents('php://input');
$obj = json_decode($json, true);
$email = $obj['email'];
$password = $obj['password'];
$sql = "SELECT * FROM USER WHERE email = '$email' and forgetpassword_code = '$code'";
$result = $mysqli->query($sql);
$user =  $result->num_rows; 
if($user){
       $sql_update = "UPDATE USER SET forgetpassword_code=0 WHERE 
           email = '$email'";
	$result_update = $mysqli->query($sql_update);
	echo("{\"result\":\"success\"}");
}
else{
	echo("{\"result\":\"fail\"}");
}
?>