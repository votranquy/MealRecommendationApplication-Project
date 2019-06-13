<?php 
  include('connect/connect.php');
try{

$sql = "SELECT q.id, q.name, q.image, q.price, q.average_score, q.total_vote, q.total_view, p.food_name, p.rate, p.address, p.category, p.restaurant_id, p.latitude, p.longitude, DATEDIFF(created_time, NOW()) as DayPass
FROM FOOD q INNER JOIN STORE p ON p.restaurant_id = q.restaurant_id
WHERE address LIKE '%Đà Nẵng%'
AND total_vote = 0
AND DATEDIFF(created_time, NOW()) <=7
AND (category='Quán ăn, ' OR category='Ăn vặt/vỉa hè, ' OR category='Café/Dessert, ' OR category='Ăn chay, ' OR category='Nhà hàng, ' OR category='Tiệm bánh, ') 
AND NOT image = '/style/images/deli-dish-no-image.png'
ORDER BY total_view";
  
  $topfood = $mysqli->query($sql);
  $max = $topfood->num_rows; //The nsumber of result
  
  $arrFood = array(); //0-> $max -1
  while( $row = $topfood->fetch_assoc()){
       array_push($arrFood,$row);
}

  $the_number_of_items_per_page = 20; //10 datas per page
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