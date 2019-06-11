<?php
    include('connect/connect.php');

    $json = file_get_contents('php://input');
    $obj = json_decode($json, true);
    $id = $obj['id'];
    try{
        
        $sql = 
        "SELECT id, image, name
        FROM FOOD
        WHERE id = '$id'
        ";
        
        $imagefood = $mysqli->query($sql);
        
        $arrImage = array(); 
        while( $row = $imagefood->fetch_assoc()){
             array_push($arrImage,$row);
        }
      
        $result = array('result'=>'success','data'=>$arrImage);
        echo json_encode($result);
      }catch(Exception $e){
             $result = array('result'=>'error');  
             echo json_encode($result);  
      }  
?>