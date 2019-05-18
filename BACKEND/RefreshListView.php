<?php 

  $server_username ="root";
  $server_password =""; 
  $server_host = "localhost"; 
  $database = 'MealApp'; 
  $conn = mysqli_connect($server_host,$server_username,$server_password,$database) or die("Can not connect to Database");
  mysqli_query($conn,"SET NAMES 'UTF8'");

  $sql = "SELECT * FROM USER";
  $query = mysqli_query($conn,$sql);
  
  class User{
    var $id;
    var $username;
    var $phone_number;
    var $id_role;
    function User($_id, $_username, $_phone_number, $_id_role){
      $this->id = $_id;
      $this->username = $_username;
      $this->phone_number = $_phone_number;
      $this->id_role = $_id_role;
    }
  }

  $arrUser = array();
  while( $row = mysqli_fetch_array($query) ){
    array_push($arrUser,new User($row["id"],$row["username"],$row["phone_number"],$row["id_role"]));
  }

  $the_number_of_items_per_page =4;
  $page = $_GET["pagenumber"];
  $newArrayUser = array();
  $from = $page * $the_number_of_items_per_page;

  for($i=$from; $i <= $from + $the_number_of_items_per_page - 1; $i = $i + 1){
    array_push($newArrayUser,$arrUser[$i]);
  }

  echo json_encode($newArrayUser);

?>