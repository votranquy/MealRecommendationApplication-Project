<?php
       use \Firebase\JWT\JWT;
       require __DIR__ . '/vendor/autoload.php';
       include('function.php');
       include('connect/connect.php');

       $json = file_get_contents('php://input');
       $obj = json_decode($json, true);
       $restaurant_id = $obj['restaurant_id'];
       $food_id = $obj['food_id'];
       $arrMenu = array();
       $key = "example_key";

        if($restaurant_id != "" && $food_id != ""){
            try{
                    $sql_menu = "SELECT * FROM FOOD WHERE restaurant_id ='$restaurant_id'
                    AND NOT id = $food_id
                    AND NOT  image = '/style/images/deli-dish-no-image.png'
                    ";//Get all food of this Store Except food_id
                    $menu = $mysqli->query($sql_menu);
                    

                    $arrMenu =  array();
                    while($row = $menu->fetch_object()){ 
                        array_push($arrMenu,$row);
                    }
                    
                    $result = array('result'=>'success','data'=>$arrMenu);
                    echo json_encode($result);
            }
            catch(Exception $e){
                    echo("{\"result\":\"false\"}");
            }
        }
        else{
            echo("{\"result\":\"LOI\"}");
        }

?>