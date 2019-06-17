<?php
       use \Firebase\JWT\JWT;
       require __DIR__ . '/vendor/autoload.php';
       include('function.php');
       include('connect/connect.php');

       $json = file_get_contents('php://input');
       $obj = json_decode($json, true);
       $token = $obj['token'];
       $idfood = $obj['id_food'];
       $rate = $obj['starCount'];
       $comment = $obj['comment'];
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
                                   $sql_check = "SELECT * FROM VOTE WHERE user_id='$iduser' AND food_id='$idfood'";
                                   $result_check = $mysqli->query($sql_check);
                                   $check = $result_check->num_rows; 
                                   if($check == 1){

                                          while ($row = $result_check->fetch_assoc()) {
                                                 $oldvote = $row["rate"];
                                          }//Get old vote
                                          $sqlvote = "UPDATE VOTE SET rate = '$rate', comment = '$comment',updated_time = NOW() WHERE user_id='$iduser' AND food_id='$idfood'" ;
                                          $voteresult = $mysqli->query($sqlvote); //Updat Vote table
                                          $sql_update_food_table=
                                          "UPDATE FOOD 
                                          SET 
                                          average_score = (average_score * total_vote - $oldvote + $rate)/total_vote
                                          WHERE 
                                          id = '$idfood'";
                                          $result_update_food_table = $mysqli->query($sql_update_food_table); //Update Food Table

                                   }//Have voted before
                                   else{
                                          $sql_insert_vote_table = "INSERT INTO VOTE(user_id,food_id,rate,comment) VALUES('$iduser','$idfood','$rate','$comment')";
                                          $result_insert_vote_table = $mysqli->query($sql_insert_vote_table); //Inset the vote table
                                          $sql_update_food_table="UPDATE FOOD 
                                          SET 
                                          average_score = (average_score * total_vote + $rate)/ (total_vote + 1) , total_vote = total_vote + 1
                                          WHERE 
                                          id = '$idfood'";
                                          $result_update_food_table = $mysqli->query($sql_update_food_table);//update food table
                                   }//Not vote before
                                   $result = array('result'=>'success');
                                   echo json_encode($result);
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