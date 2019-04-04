<?php 
  $token = $_GET["token"];
  require("jwt.php");
  $json = JWT::decode($token,"FrivateNumber", true);
  echo json_encode($json);
?>