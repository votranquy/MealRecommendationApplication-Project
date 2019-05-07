<?php 

  $server_username ="root";
  $server_password =""; 
  $server_host = "localhost"; 
  $database = 'MealRecommendationApp'; 
  $conn = mysqli_connect($server_host,$server_username,$server_password,$database) or die("Can not connect to Database");
  mysqli_query($conn,"SET NAMES 'UTF8'");
  $sql = "SELECT * 
  FROM FOOD_CATEGORY";
  // ORDER BY rate DESC
  
  $query = mysqli_query($conn,$sql);
  $max = mysqli_num_rows($query);
  class FoodCategory{
    var $category_name;
    var $id;
    function FoodFoodCategory($_id,$_category_name){
      $this->category_name = $_category_name;
      $this->id = $_id;
    }
  }

  
  $arrFood = array();
  while( $row = mysqli_fetch_array($query) ){
    array_push($arrFood,new FoodCategory($row["id"],$row["category_name"]));
  }
  echo json_encode($arrFood);
  // try{
  //   echo json_encode($arrFood);
  // }catch(Exception $e){
  //   echo "[]";
  // }
?>