<?php
  require("jwt.php"); //Library jwt
  require("dbCon.php"); //Connect database 
  // $server_username ="root"; // thông tin đăng nhập host
  // $server_password =""; // mật khẩu, trong trường hợp này là trống
  // $server_host = "localhost"; // host là localhost
  // $database = 'users'; // database là users
  // $link = mysqli_connect($server_host,$server_username,$server_password,$database);
  // mysqli_query($link,"SET NAMES 'UTF8'");
  // $obj= json_decode(file_get_contents('php://input'),true);

  // $json = file_get_contents("http://input");
  // $obj = json_decode($json, TRUE);
  // $server_username ="root"; // thông tin đăng nhập host
  // $server_password =""; // mật khẩu, trong trường hợp này là trống
  // $server_host = "localhost"; // host là localhost
  // $database = 'users'; // database là users
  // $link = mysqli_connect($server_host,$server_username,$server_password,$database);
  // mysqli_query($link,"SET NAMES 'UTF8'");

  $data= json_decode(file_get_contents('php://input'),true);
  $username =$data["USERNAME"];
  $password = md5($data["PASSWORD"]);


  // $username = "votranquy";
  // $password = md5("votranquy");

   
  $sql = "SELECT * FROM USER
             WHERE username = '$username' 
             AND password = '$password'
            ";

  $users = mysqli_query($conn,$sql);
  if(mysqli_num_rows($users) == 1){
    $u =mysqli_fetch_array($users);

    $token = array();
    $token["id"] = $u["id"];
    $token["username"] = $u["username"];
    $token["phone_number"] = $u["phone_number"];
    $token["id_role"] = $u["id_role"];

    $jsonwebtoken = JWT::encode($token,"FrivateNumber");

    echo JsonHelper::getJson("token",$jsonwebtoken);
  }else{
    echo "{'token':'ERROR'}";
  }

?>
