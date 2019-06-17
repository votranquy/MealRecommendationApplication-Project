<?php
    include('connect/connect.php');

    $json = file_get_contents('php://input');
    $obj = json_decode($json, true);
    $food_id = $obj['food_id'];
    try{
        
        $sql = 
        "SELECT p.id, p.image, p.name,  p.price, p.average_score, p.total_vote, p.total_view, q.restaurant_id, q.food_name, q.address, q.category, q.latitude, q.longitude
        FROM FOOD p INNER JOIN STORE q ON p.restaurant_id = q.restaurant_id
        WHERE p.id = '$food_id'
        ";
        
        $location = $mysqli->query($sql);
        
        $arrLocation = array(); 
        while( $row = $location->fetch_assoc()){
             array_push($arrLocation,$row);
        }
      
        $result = array('result'=>'success','data'=>$arrLocation);
        echo json_encode($result);
      }catch(Exception $e){
             $result = array('result'=>'error');  
             echo json_encode($result);  
      }  
?>