<?php
	include('connect/connect.php');
       if(1){ //isset($_GET['key']) && strlen($_GET['key'])>2
              $json = file_get_contents('php://input');
              $obj = json_decode($json, true);
              // $idfood = $obj['idfood'];
		$keyword = $obj['key'];
              $food = array();
              // echo($keyword);

              $sql_search=
              "SELECT p.id, p.food_name, p.rate, p.address, p.image_path,p.category, p.restaurant_id, p.latitude, p.longitude, p.menu, q.name, q.image
              FROM STORE p LEFT JOIN FOOD q ON p.restaurant_id = q.restaurant_id
              WHERE name like  '%$keyword%'
              OR  p.address like '%$keyword%' 
              -- OR p.food_name like '%$keyword%' 
              AND (category='Quán ăn, ' OR category='Ăn vặt/vỉa hè, ' OR category='Café/Dessert, ' OR category='Ăn chay, ' OR category='Nhà hàng, ' OR category='Tiệm bánh, ') 
              AND NOT image = '/style/images/deli-dish-no-image.png'
              -- GROUP BY p.id
              ORDER BY rate DESC";


              $foods = $mysqli->query($sql_search);
              $max = mysqli_num_rows($foods); //The number of result

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
              while( $row = mysqli_fetch_array($foods) ){
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
              $result = array('result'=>'success','data'=>$newArrayFood);
              echo json_encode($result); 

              // echo json_encode($newArrayFood);
       }else{
              echo("{\"result\":\"No_result\"}");
       }    

?>
	