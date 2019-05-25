<?php
       use \Firebase\JWT\JWT;
       require __DIR__ . '/vendor/autoload.php';
       include('function.php');
       include('connect/connect.php');

       $json = file_get_contents('php://input');
       $obj = json_decode($json, true);
       $restaurant_id = $obj['restaurant_id'];
       $token = $obj['token'];
       $arrMenu = array();
       $key = "example_key";
       if($token==""){//Not logIn
              if($restaurant_id != ""){
                     try{
                            $sql_menu = $mysqli->query("SELECT * FROM FOOD WHERE restaurant_id ='$restaurant_id'");
                            while($rowfood = $sql_menu->fetch_object()){
                                   array_push($arrMenu,$rowfood);
                            }
                            $result = array('result'=>'success','data'=>$arrMenu);
                            echo json_encode($result);
                     }
                     catch(Exception $e){
                            echo("{\"result\":\"LOI\"}");
                     }
              }
              else{echo("{\"result\":\"LOI\"}");}
       }else{ //Logined

              try{
                     $decoded = JWT::decode($token, $key, array('HS256'));
                     if($decoded->expire < time()){
                            echo("{\"result\":\"TOKEN_HET_HAN\"}");
                     }
                     else{  
                            $email = $decoded->email; //Get email

                            $sql_getid = $mysqli->query("SELECT id FROM USER WHERE email = '$email'");
                            while ($row = $sql_getid->fetch_assoc()) {
                                $iduser = $row["id"];
                            }//From email, get id of user

                            if($restaurant_id != ""){
                                   try{
                                          $sql_menu = $mysqli->query("SELECT * FROM FOOD WHERE restaurant_id ='$restaurant_id'");//Get all food of this Store
                                          while($rowfood = $sql_menu->fetch_object()){

                                                 $idfood = $rowfood->food_id;


                                                 $sql_bookmark =$mysqli->query("SELECT p.id as idbookmark, p.bookmark_name,
                                                 (SELECT COUNT(*) FROM BOOKMARK_SAVE WHERE id_bookmark= idbookmark AND id_food = '$idfood') as isInThis 
                                                 FROM BOOKMARK p LEFT JOIN BOOKMARK_SAVE q ON p.id = q.id_bookmark 
                                                 WHERE id_user= '$iduser'
                                                 GROUP BY idbookmark");
                                                 

                                                 $arrBookmark =  array();
                                                 while($row_bookmark = $sql_bookmark->fetch_object()){ 
                                                        array_push($arrBookmark,$row_bookmark);
                                                 }
                                                 $rowfood->bookmark = $arrBookmark;

                                                 array_push($arrMenu,$rowfood);
                                          }
                                          $result = array('result'=>'success','data'=>$arrMenu);
                                          echo json_encode($result);
                                   }
                                   catch(Exception $e){
                                          echo("{\"result\":\"LOI\"}");
                                   }
                            }
                            else{echo("{\"result\":\"LOI\"}");}
                     }
              }catch(Exception $e){
                     echo("{\"result\":\"LOI\"}");
              }
       }
?>