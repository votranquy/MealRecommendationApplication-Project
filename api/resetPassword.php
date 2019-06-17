<?php
include('connect/connect.php');
$json = file_get_contents('php://input');
$obj = json_decode($json, true);
$email = $obj['email'];
$password = md5($obj['password']);
try{
		$sql = "UPDATE USER SET password='$password' WHERE email = '$email'";
		$result = $mysqli->query($sql);
		if($result){echo("{\"result\":\"success\"}");}
		else{echo("{\"result\":\"fail\"}");};
}
catch(Exception $e){
	echo("{\"result\":\"fail\"}");
}

?>