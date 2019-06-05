<?php 
  include('connect/connect.php');
  $json = file_get_contents('php://input');
$obj = json_decode($json, true);
// $yourlatitude  = floatval($obj['yourlatitude']);
// $yourlongitude = floatval($obj['yourlongitude']);
// function getDistance($longA, $latA) //, $longB, $latB
// {
//     $loA = floatval($longA);
//     $laA = floatval($latA);
//     $loB = floatval($GLOBALS['yourlatitude']);
//     $laB = floatval($GLOBALS['yourlongitude']); 
//     return(abs( sqrt( pow(($loA-$loB),2) - pow(($laA-$laB),2)  ) ));
// }

$yourlatitude  = $obj['yourlatitude'];
$yourlongitude = $obj['yourlongitude'];

try{

  $sql_get = 
    "SELECT p.id, p.food_name, p.rate, p.address, p.image_path,
    p.category, p.restaurant_id, p.latitude, p.longitude, q.name, q.image, 
    ABS(SQRT( POW(p.longitude-'$yourlongitude',2)-POW('p.latitude-$yourlatitude',2) )) as distance
    FROM STORE p LEFT JOIN FOOD q ON p.restaurant_id = q.restaurant_id
    WHERE rate > 0 
    AND (category='Quán ăn, ' OR category='Ăn vặt/vỉa hè, ' OR category='Café/Dessert, ' OR category='Ăn chay, ' OR category='Nhà hàng, ' OR category='Tiệm bánh, ') 
    GROUP BY p.id
    ORDER BY distance ASC
    LIMIT 5
    ";
  // -- getDistance(p.longitude, p.latitude) as distance
  // --ABS(SQRT(POW((CAST(p.longitude as float)-CAST('$yourlongitude' as float)),2)-POW((CAST(p.latitude as float)-CAST('$yourlatitude' as float)),2))) as distance
  // --ABS(SQRT((p.longitude-$yourlongitude)*(p.longitude-$yourlongitude)-(p.latitude-$yourlatitude)*(p.latitude-$yourlatitude))) as distance
  // -- getDistance(p.longitude, p.latitude) as distance
  $topfood = $mysqli->query($sql_get);
  // if(!$topfood){
  //   $result = array('result'=>'31error');  
  //   echo json_encode($result);  
  // }
  try{
  $max  = $topfood->num_rows; //The number of result 100;/
  $arrFood = array(); //0-> $max -1
  while( $row = $topfood->fetch_assoc()){
       array_push($arrFood,$row);
  }

  $the_number_of_items_per_page = 30; //10 datas per page
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
  }
  catch(Exception $e){ 
    $result = array('result'=>'error');  
       echo json_encode($result); 
    // echo($e);
  } 
}catch(Exception $e){
       $result = array('result'=>'error');  
       echo json_encode($result);  
      //  echo($e);
}  
?>