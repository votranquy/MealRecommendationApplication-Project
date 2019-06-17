<?php
    include('connect/connect.php');
    $json = file_get_contents('php://input');
    $obj = json_decode($json, true);
    $id = $obj['id'];
    try{
        $sql = 
        "UPDATE FOOD
        SET total_view = total_view + 1 
        WHERE id = '$id'
        ";
        $updateview = $mysqli->query($sql);
        if($updateview){
            $result = array('result'=>'success');
            echo json_encode($result); 
        }
        else{
            $result = array('result'=>'false');
            echo json_encode($result);            
        }
      }catch(Exception $e){
            $result = array('result'=>'false');  
            echo json_encode($result);  
      }  
?>