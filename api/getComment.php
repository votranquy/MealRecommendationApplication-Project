<?php
    include('connect/connect.php');
    $json = file_get_contents('php://input');
    $obj = json_decode($json, true);
    $id = $obj['id'];
    try{
        $sql = 
        "SELECT *
        FROM VOTE 
        WHERE food_id = '$id'
        LIMIT 10
        ";
        $comment = $mysqli->query($sql);
        $arrComment = array(); 
        while( $row = $comment->fetch_assoc()){
             array_push($arrComment,$row);
        }
        $result = array('result'=>'success','data'=>$arrComment);
        echo json_encode($result);
      }catch(Exception $e){
             $result = array('result'=>'error');  
             echo json_encode($result);  
      }  
?>