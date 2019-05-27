<?php
       use \Firebase\JWT\JWT;
       require __DIR__ . '/vendor/autoload.php';
       include('function.php');
       include('connect/connect.php');

       $json = file_get_contents('php://input');
       $obj = json_decode($json, true);
       $idfood = $obj['idfood'];
       $token = $obj['token'];
       $idbookmark = $obj['idbookmark'];
       $arrMenu = array();
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

                     if($idfood !="" && $idbookmark !=""){
                            try{
                                   $sql_bookmark =$mysqli->query(
                                          "SELECT * 
                                          FROM BOOKMARK_SAVE  
                                          WHERE id_bookmark= '$idbookmark'
                                          AND id_food = '$idfood'"
                                          );
                                   

                                   // $result = $mysqli->query($sql_bookmark);  
                                   
                                   $bookmark = mysqli_fetch_assoc($sql_bookmark);

                                   if($bookmark){ //is Exist //Delete it
                                          $sql_delete = "DELETE FROM BOOKMARK_SAVE WHERE id_bookmark= '$idbookmark' AND id_food = '$idfood'";

                                          $result = $mysqli->query($sql_delete);
                                          if($result){
                                              echo("{\"result\":\"success\"}");
                                          }
                                          else{
                                              echo("{\"result\":\"KHONG_THANH_CONG\"}");
                                          };

                                   }
                                   else{   //not Exist  //Insert new

                                          $sql_insert = "INSERT INTO BOOKMARK_SAVE(id_bookmark,id_food) VALUE('$idbookmark','$idfood')";

                                          $result = $mysqli->query($sql_insert);
                                          if($result){
                                                 echo("{\"result\":\"success\"}");
                                          }
                                          else{
                                                 echo("{\"result\":\"KHONG_THANH_CONG\"}");
                                          };
                                   }
                                          
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
?>