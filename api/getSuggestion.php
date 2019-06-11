<?php
    include('connect/connect.php');
       if(1){ 
              $json = file_get_contents('php://input');
              $obj = json_decode($json, true);
              $keyword = $obj['text'];
              
              // $listSuggestion = array();


              $sql = "SELECT id, name
              FROM FOOD 
              WHERE  name like '$keyword%'
              GROUP BY name
              -- ORDER BY name ASC
              LIMIT 20
              ";
              
              $listSuggestion = $mysqli->query($sql);
              
              $list = array(); //0-> $max 
              while( $row = $listSuggestion->fetch_assoc()){
                    array_push($list,$row);
              }
              $result = array('result' => 'success' , 'data'=>$list);
              echo json_encode($result);
       }        
?>
	