<?php 
  $token = $_GET["token"];
  require("jwt.php");
  $json = JWT::decode($token,"Ma_So_Bi_Mat", true);
  echo json_encode($json);
?>