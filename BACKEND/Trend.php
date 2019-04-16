<?php 

  $server_username ="root";
  $server_password =""; 
  $server_host = "localhost"; 
  $database = 'MealRecommendationApp'; 
  $conn = mysqli_connect($server_host,$server_username,$server_password,$database) or die("Can not connect to Database");
  mysqli_query($conn,"SET NAMES 'UTF8'");

  $sql = "SELECT * 
  FROM FOOD
  INNER JOIN FOOD_IMAGE
  ON FOOD.id = FOOD_IMAGE.id_food
  ORDER BY food_name ASC
  ";
  $query = mysqli_query($conn,$sql);
  
  class Food{
    var $food_name;
    var $rate;
    var $address;
    var $worktime;
    var $img_path;
    function Food($_food_name, $_rate, $_address, $_worktime, $_img_path){
      $this->food_name = $_food_name;
      $this->rate = $_rate;
      $this->address = $_address;
      $this->worktime = $_worktime;
      $this->img_path = $_img_path;
    }
  }

  $arrFood = array();
  while( $row = mysqli_fetch_array($query) ){
    array_push($arrFood,new Food($row["food_name"],$row["rate"],$row["address"],$row["worktime"], $row["img_path"]));
  }

  $the_number_of_items_per_page = 10;
  $page = $_GET["pagenumber"];
  $newArrayFood = array();
  $from = $page * $the_number_of_items_per_page;

  for($i=$from; $i <= $from + $the_number_of_items_per_page - 1; $i = $i + 1){
    array_push($newArrayFood,$arrFood[$i]);
  }

  echo json_encode($newArrayFood);

?>