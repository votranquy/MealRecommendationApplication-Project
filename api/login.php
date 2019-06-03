<?php
//dang nhap
use \Firebase\JWT\JWT;
require __DIR__ . '/vendor/autoload.php';
include('function.php');
include('connect/connect.php');

$key = "example_key";
$json = file_get_contents('php://input');
$obj = json_decode($json, true);
$email = $obj['email'];
$password = md5($obj['password']);
$sql = "SELECT u.email, u.name, u.address, u.phone, u.id FROM USER u where email = '$email' and password = '$password'";
$result = $mysqli->query($sql);

$user = mysqli_fetch_assoc($result);

if($user){

	$sql_getid = $mysqli->query("SELECT register_code FROM USER WHERE email = '$email'");
	while ($row = $sql_getid->fetch_assoc()) {
		$active_code = $row['register_code'];
	}
	if($active_code != 0){//Chua xac thuc != 0
		$jwt = getToken($email);
		$array = array('result'=>'notactive','token'=>$jwt, 'user'=>$user);
		print_r(json_encode($array));
	}
	else{ //Da xac thuc =0
		$jwt = getToken($email);
		$array = array('result'=>'success','token'=>$jwt, 'user'=>$user);
		print_r(json_encode($array));
	}
}
else{
	$array = array('result'=>'fail');
	print_r(json_encode($array));
}

?>