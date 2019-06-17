<?php
       use \Firebase\JWT\JWT;
       require __DIR__ . '/vendor/autoload.php';
       include('function.php');
       include('connect/connect.php');

       $json = file_get_contents('php://input');
       $obj = json_decode($json, true);
       $idfood = $obj['idfood'];
       $token = $obj['token'];
    //    $arrMenu = array();
       $key = "example_key";

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

                     if($idfood !=""){
                            try{
                                   $sql =
                                          "SELECT * 
                                          FROM VOTE
                                          WHERE user_id = '$iduser'
                                          AND food_id = '$idfood'";
                                    $vote = $mysqli->query($sql);
                                    $count = $vote->num_rows;
                                    

                                    if($count>0){
                                        $arrVote = array();
                                        while($row = $vote->fetch_object()){
                                            array_push($arrVote,$row);
                                        }
                                        $result = array('result'=>'success','data'=>$arrVote);
                                        echo json_encode($result);
                                    }
                                    else{
                                        $result = array('result'=>'fail');
                                        echo json_encode($result);
                                    }

                            }
                            catch(Exception $e){
                                   echo("{\"result\":\"fail\"}");
                            }
                     }
                     else{echo("{\"result\":\"fail\"}");}
              }
       }catch(Exception $e){
              echo("{\"result\":\"fail\"}");
       }
?>