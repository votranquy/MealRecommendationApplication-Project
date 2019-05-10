<?php 

  $server_username ="root";
  $server_password =""; 
  $server_host = "localhost"; 
  $database = 'MealRecommendationApp'; 
  $conn = mysqli_connect($server_host,$server_username,$server_password,$database) or die("Can not connect to Database");
  mysqli_query($conn,"SET NAMES 'UTF8'");
  $randum_number = rand(1,4);
  $min_randum_number =  $randum_number - 1;
  $max_randum_number =  $randum_number + 1;
  $sql = "SELECT * 
  FROM FOOD
  WHERE rate > '$min_randum_number' AND rate < '$max_randum_number'
  ";
  // ORDER BY rate DESC
  
  $query = mysqli_query($conn,$sql);
  $max = mysqli_num_rows($query);
  class Food{
    var $id;
    var $food_name;
    var $rate;
    var $address;
    //var $worktime;
    var $image_path;
    var $category;
    var $restaurantid;
    var $menu;
    function Food($_id,$_food_name, $_rate, $_address, $_image_path,$_category,$_restaurantid, $_menu){
      $this->food_name = $_food_name;
      $this->rate = $_rate;
      $this->address = $_address;
      //$this->worktime = $_worktime;
      $this->image_path = $_image_path;
      $this->id = $_id;
      $this->category=$_category;
      $this->restaurantid=$_restaurantid;
      $this->menu = $_menu;
    }
  }

  
  $arrFood = array();
  while( $row = mysqli_fetch_array($query) ){
    array_push($arrFood,new Food($row["id"],$row["food_name"],$row["rate"],$row["address"], $row["image_path"], $row["category"], $row["restaurant_id"], $row["menu"]));
  }

  $the_number_of_items_per_page = 5;
  $page = $_GET["pagenumber"];
  
  $from = $page * $the_number_of_items_per_page;
  $newArrayFood = array();
  try{
      for($i=$from; ($i <= $from + $the_number_of_items_per_page - 1) && ($i< $max-1); $i = $i + 1){
        array_push($newArrayFood,$arrFood[$i]);
      }
    echo json_encode($newArrayFood);
  }catch(Exception $e){
    echo json_encode($newArrayFood);
  }
?>