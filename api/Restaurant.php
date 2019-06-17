<?php 

  include('connect/connect.php');
  // mysqli_query($conn,"SET NAMES 'UTF8'");


try{
$sql = "SELECT p.id, p.food_name, p.rate, p.address, p.image_path,p.category, p.restaurant_id, p.latitude, p.longitude, p.menu, q.name, q.image
FROM STORE p LEFT JOIN FOOD q ON p.restaurant_id = q.restaurant_id
WHERE category='Quán ăn, '
AND rate >= 1.0 
AND NOT image = '/style/images/deli-dish-no-image.png'
GROUP BY p.id";
$restaurant = $mysqli->query($sql);
$max = $restaurant->num_rows; //The nsumber of result


$arrFood = array(); //0-> $max -1
  while( $row = $restaurant->fetch_assoc()){
       array_push($arrFood,$row);
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
  $result = array('result'=>'success','page'=>$page,'data'=>$newArrayFood);
  echo json_encode($result);
}catch(Exception $e){
  $result = array('result'=>'error');  
  echo json_encode($result);  
}  
?>