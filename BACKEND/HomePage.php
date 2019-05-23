<?php 

  $server_username ="root";
  $server_password =""; 
  $server_host = "localhost"; 
  $database = 'MealApp'; 
  $conn = mysqli_connect($server_host,$server_username,$server_password,$database) or die("Can not connect to Database");
  mysqli_query($conn,"SET NAMES 'UTF8'");

  $sql = "SELECT p.id, p.food_name, p.rate, p.address, p.image_path,p.category, p.restaurant_id, p.latitude, p.longitude, p.menu, q.name, q.image
  FROM STORE p LEFT JOIN FOOD q ON p.restaurant_id = q.restaurant_id
  WHERE rate >= 4.5 
  AND rate <= 5.0 
  AND (category='Quán ăn, ' OR category='Ăn vặt/vỉa hè, ' OR category='Café/Dessert, ' OR category='Ăn chay, ' OR category='Nhà hàng, ' OR category='Tiệm bánh, ') 
  AND NOT image = '/style/images/deli-dish-no-image.png'
  GROUP BY p.id";
  //ORDER BY rate DESC
  
  $query = mysqli_query($conn,$sql);
  $max = mysqli_num_rows($query); //The number of result

  class Food{
    var $id;
    var $food_name;
    var $rate;
    var $address;
    var $image_path;
    var $category;
    var $restaurant_id;
    var $latitude;
    var $longitude;
    var $menu;
    var $name;
    var $image;


    function Food($_id,$_food_name, $_rate, $_address, $_image_path,$_category,$_restaurantid, $_menu, $_latitude, $_longitude, $_name, $_image){
      $this->food_name = $_food_name;
      $this->rate = $_rate;
      $this->address = $_address;
      $this->image_path = $_image_path;
      $this->id = $_id;
      $this->category=$_category;
      $this->restaurant_id=$_restaurantid;
      $this->menu = $_menu;
      $this->latitude = $_latitude;
      $this->longitude = $_longitude;
      $this->name = $_name;
      $this->image = $_image;
    }
  }

  
  $arrFood = array(); //0-> $max -1
  while( $row = mysqli_fetch_array($query) ){
    array_push($arrFood,new Food($row["id"],$row["food_name"],$row["rate"],$row["address"], $row["image_path"], $row["category"], $row["restaurant_id"], $row["menu"],$row["latitude"],$row["longitude"],$row["name"],$row["image"]));
  }

  $the_number_of_items_per_page = 10; //10 datas per page
  $page = $_GET["pagenumber"];
  $from = $page * $the_number_of_items_per_page;
  
  
  $newArrayFood = array();
  if($from > $max){}
  else{
    for($i=$from; ($i <= $from + $the_number_of_items_per_page-1) && ($i <= $max-1); $i = $i + 1){
      array_push($newArrayFood,$arrFood[$i]);
    }  
  } 
  echo json_encode($newArrayFood);
?>