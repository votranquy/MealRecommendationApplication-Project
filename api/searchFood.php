<?php

    include('connect/connect.php');
       if(1){
              $json = file_get_contents('php://input');
              $obj = json_decode($json, true);
              $keyword = $obj['key'];
              $food = array();
              $maxx = str_word_count($keyword);
              $arr = explode(" ", $keyword);
              if(1){
                     try{

                            $sql = "SELECT q.id, p.food_name, p.rate, p.address, p.image_path,p.category, p.restaurant_id, p.latitude, p.longitude, q.name, q.image
                            FROM FOOD q INNER JOIN STORE p ON q.restaurant_id = p.restaurant_id
                            WHERE  q.name like '%$keyword%'
                            -- AND address like '%Đà Nẵng%'
                            AND (category='Quán ăn, ' OR category='Ăn vặt/vỉa hè, ' OR category='Café/Dessert, ' OR category='Ăn chay, ' OR category='Nhà hàng, ' OR category='Tiệm bánh, ') 
                            GROUP BY restaurant_id
                            ";
                            
                            $topfood = $mysqli->query($sql);
                            $max = $topfood->num_rows; //The nsumber of result
                            
                            $arrFood = array(); //0-> $max -1
                            while( $row = $topfood->fetch_assoc()){
                                 array_push($arrFood,$row);
                            }
                          
                            $the_number_of_items_per_page = 10; //10 datas per page
                            $page = $_GET["pagenumber"];
                            $from = $page * $the_number_of_items_per_page;
                            
                            
                            $newArrayFood = array();
                            if($from > $max){}
                            else{
                              for($i=$from; ($i <= $from + $the_number_of_items_per_page-1) && ($i <= $max-1); $i = $i + 1){
                                array_push($newArrayFood,$arrFood[$i]);
                              }  
                            } 
                            $result = array('result'=>'success','page'=>$page,'data'=>$newArrayFood);
                            echo json_encode($result);
                          }catch(Exception $e){
                                 $result = array('result'=>'error');  
                                 echo json_encode($result);  
                          }

              } //==1
       }



              
?>
	