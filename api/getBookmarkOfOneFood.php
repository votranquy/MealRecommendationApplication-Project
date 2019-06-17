<?php
       use \Firebase\JWT\JWT;
       require __DIR__ . '/vendor/autoload.php';
       include('function.php');
       include('connect/connect.php');

       $json = file_get_contents('php://input');
       $obj = json_decode($json, true);
       $idfood = $obj['idfood'];
       $token = $obj['token'];
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

                     if($idfood !=""){
                            try{
                                   $sql_bookmark =$mysqli->query(
                                          "SELECT p.id as idbookmark, p.bookmark_name, 
                                          (SELECT COUNT(*) FROM BOOKMARK_SAVE WHERE id_bookmark= idbookmark AND id_food = '$idfood') as isInThis 
                                          FROM BOOKMARK p LEFT JOIN BOOKMARK_SAVE q ON p.id = q.id_bookmark 
                                          WHERE id_user= '$iduser'
                                          GROUP BY idbookmark"
                                          );
                                   $arrBookmark = array();
                                   while($rowbookmark = $sql_bookmark->fetch_object()){
                                          array_push($arrBookmark,$rowbookmark);
                                   }
                                   $result = array('result'=>'success','data'=>$arrBookmark);
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
?>