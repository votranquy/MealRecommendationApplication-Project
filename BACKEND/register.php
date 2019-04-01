<?php 

  $server_username ="root"; 
  $server_password =""; 
  $server_host = "localhost"; 
  $database = 'MealRecommendationApp'; 
  $link = mysqli_connect($server_host,$server_username,$server_password,$database);
  mysqli_query($link,"SET NAMES 'UTF8'");

  $obj= json_decode(file_get_contents('php://input'),true);

  $username =$obj["USERNAME"];
  $password = md5($obj["PASSWORD"]);
  $phone_number =$obj["PHONE_NUMBER"];
  $id_role = 1;
  $query = "INSERT INTO USER VALUES(null,'$username','$password','$phone_number','$id_role')";
  mysqli_query($link,$query);
  //printf ("New Record has id %d.\n", mysqli_insert_id($link));
  $last_id =  mysqli_insert_id($link);
  //echo $last_id;
?>
{"id":<?php echo $last_id;?>}



