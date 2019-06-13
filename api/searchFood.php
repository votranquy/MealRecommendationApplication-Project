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
                            // $key = $arr[0];

                            // $sql = "SELECT p.id, p.food_name, p.rate, p.address, p.image_path,p.category, p.restaurant_id, p.latitude, p.longitude, q.name, q.image
                            // FROM STORE p LEFT JOIN FOOD q ON p.restaurant_id = q.restaurant_id
                            // WHERE  food_name like '%$key%'
                            // AND (category='Quán ăn, ' OR category='Ăn vặt/vỉa hè, ' OR category='Café/Dessert, ' OR category='Ăn chay, ' OR category='Nhà hàng, ' OR category='Tiệm bánh, ') 
                            // GROUP BY restaurant_id
                            // ";
                            $sql = "SELECT q.id, p.food_name, p.rate, p.address, p.image_path,p.category, p.restaurant_id, p.latitude, p.longitude, q.name, q.image
                            FROM FOOD q INNER JOIN STORE p ON q.restaurant_id = p.restaurant_id
                            WHERE  q.name like '%$keyword%'
                            AND address like '%Đà Nẵng%'
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

              // if($maxx == 2){
              //        try{


              //               $sql = "SELECT  p.id, p.food_name, p.rate, p.address, p.image_path,p.category, p.restaurant_id, p.latitude, p.longitude, p.menu, q.name, q.image
              //               FROM STORE p LEFT JOIN FOOD q ON p.restaurant_id = q.restaurant_id
              //               WHERE  food_name like '%$keyword%'
              //               AND (category='Quán ăn, ' OR category='Ăn vặt/vỉa hè, ' OR category='Café/Dessert, ' OR category='Ăn chay, ' OR category='Nhà hàng, ' OR category='Tiệm bánh, ') 
              //               GROUP BY restaurant_id
              //               ORDER BY rate DESC
              //               ";
                            
              //               $topfood = $mysqli->query($sql);
              //               $max = $topfood->num_rows; //The nsumber of result
                            
              //               $arrFood = array(); //0-> $max -1
              //               while( $row = $topfood->fetch_assoc()){
              //                    array_push($arrFood,$row);
              //               }
                          
              //               $the_number_of_items_per_page = 10; //10 datas per page
              //               $page = $_GET["pagenumber"];
              //               $from = $page * $the_number_of_items_per_page;
                            
                            
              //               $newArrayFood = array();
              //               if($from > $max){}
              //               else{
              //                 for($i=$from; ($i <= $from + $the_number_of_items_per_page-1) && ($i <= $max-1); $i = $i + 1){
              //                   array_push($newArrayFood,$arrFood[$i]);
              //                 }  
              //               } 
              //               $result = array('result'=>'success','page'=>$page,'data'=>$newArrayFood);
              //               echo json_encode($result);
              //             }catch(Exception $e){
              //                    $result = array('result'=>'error');  
              //                    echo json_encode($result);  
              //             }

              // } //==2

              // if($max == 3){ // 0 1 2
              //        try{
              //               // $key1 = $keyword;
              //               $key2 = $arr[0]." ".$arr[1];
              //               $key3 = $arr[1]." ".$arr[2];

              //               $sql = "SELECT p.id, p.food_name, p.rate, p.address, p.image_path,p.category, p.restaurant_id, p.latitude, p.longitude, p.menu, q.name, q.image
              //               FROM STORE p LEFT JOIN FOOD q ON p.restaurant_id = q.restaurant_id
              //               WHERE  food_name like '%$keyword%'
              //               OR address like '%$keyword%'
              //               OR category like '%$keyword%'
              //               OR menu like '%$keyword%'
              //               AND (category='Quán ăn, ' OR category='Ăn vặt/vỉa hè, ' OR category='Café/Dessert, ' OR category='Ăn chay, ' OR category='Nhà hàng, ' OR category='Tiệm bánh, ') 
                            
              //               UNION

              //               SELECT p.id, p.food_name, p.rate, p.address, p.image_path,p.category, p.restaurant_id, p.latitude, p.longitude, p.menu, q.name, q.image
              //               FROM STORE p LEFT JOIN FOOD q ON p.restaurant_id = q.restaurant_id
              //               WHERE  food_name like '%$key2%'
              //               OR address like '%$key2%'
              //               OR category like '%$key2%'
              //               OR menu like '%$key2%'
              //               AND (category='Quán ăn, ' OR category='Ăn vặt/vỉa hè, ' OR category='Café/Dessert, ' OR category='Ăn chay, ' OR category='Nhà hàng, ' OR category='Tiệm bánh, ') 
                            
              //               UNION

              //               SELECT p.id, p.food_name, p.rate, p.address, p.image_path,p.category, p.restaurant_id, p.latitude, p.longitude, p.menu, q.name, q.image
              //               FROM STORE p LEFT JOIN FOOD q ON p.restaurant_id = q.restaurant_id
              //               WHERE  food_name like '%$key3%'
              //               OR address like '%$key3%'
              //               OR category like '%$key3%'
              //               OR menu like '%$key3%'
              //               AND (category='Quán ăn, ' OR category='Ăn vặt/vỉa hè, ' OR category='Café/Dessert, ' OR category='Ăn chay, ' OR category='Nhà hàng, ' OR category='Tiệm bánh, ') 
              //               GROUP BY restaurant_id
              //               LIMIT 20
              //               ";
                            
              //               $topfood = $mysqli->query($sql);
              //               $max = $topfood->num_rows; //The nsumber of result
                            
              //               $arrFood = array(); //0-> $max -1
              //               while( $row = $topfood->fetch_assoc()){
              //                    array_push($arrFood,$row);
              //               }
                          
              //               $the_number_of_items_per_page = 10; //10 datas per page
              //               $page = $_GET["pagenumber"];
              //               $from = $page * $the_number_of_items_per_page;
                            
                            
              //               $newArrayFood = array();
              //               if($from > $max){}
              //               else{
              //                 for($i=$from; ($i <= $from + $the_number_of_items_per_page-1) && ($i <= $max-1); $i = $i + 1){
              //                   array_push($newArrayFood,$arrFood[$i]);
              //                 }  
              //               } 
              //               $result = array('result'=>'success','page'=>$page,'data'=>$newArrayFood);
              //               echo json_encode($result);
              //             }catch(Exception $e){
              //                    $result = array('result'=>'error');  
              //                    echo json_encode($result);  
              //             }

              // } //==3


              // if($max == 4){ // 0 1 2 3
              //        try{
              //               // $key1 = $keyword;
              //               $key2 = $arr[0]." ".$arr[1]." ".$arr[2];
              //               $key3 = $arr[1]." ".$arr[2]." ".$arr[3];
              //               $key4 = $arr[0]." ".$arr[1];
              //               $key5 = $arr[2]." ".$arr[3];


              //               $sql = "SELECT p.id, p.food_name, p.rate, p.address, p.image_path,p.category, p.restaurant_id, p.latitude, p.longitude, p.menu, q.name, q.image
              //               FROM STORE p LEFT JOIN FOOD q ON p.restaurant_id = q.restaurant_id
              //               WHERE  food_name like '%$keyword%'
              //               OR address like '%$keyword%'
              //               OR category like '%$keyword%'
              //               OR menu like '%$keyword%'
              //               AND (category='Quán ăn, ' OR category='Ăn vặt/vỉa hè, ' OR category='Café/Dessert, ' OR category='Ăn chay, ' OR category='Nhà hàng, ' OR category='Tiệm bánh, ') 
                            
              //               UNION

              //               SELECT p.id, p.food_name, p.rate, p.address, p.image_path,p.category, p.restaurant_id, p.latitude, p.longitude, p.menu, q.name, q.image
              //               FROM STORE p LEFT JOIN FOOD q ON p.restaurant_id = q.restaurant_id
              //               WHERE  food_name like '%$key2%'
              //               OR address like '%$key2%'
              //               OR category like '%$key2%'
              //               OR menu like '%$key2%'
              //               AND (category='Quán ăn, ' OR category='Ăn vặt/vỉa hè, ' OR category='Café/Dessert, ' OR category='Ăn chay, ' OR category='Nhà hàng, ' OR category='Tiệm bánh, ') 
                            
              //               UNION

              //               SELECT p.id, p.food_name, p.rate, p.address, p.image_path,p.category, p.restaurant_id, p.latitude, p.longitude, p.menu, q.name, q.image
              //               FROM STORE p LEFT JOIN FOOD q ON p.restaurant_id = q.restaurant_id
              //               WHERE  food_name like '%$key3%'
              //               OR address like '%$key3%'
              //               OR category like '%$key3%'
              //               OR menu like '%$key3%'
              //               AND (category='Quán ăn, ' OR category='Ăn vặt/vỉa hè, ' OR category='Café/Dessert, ' OR category='Ăn chay, ' OR category='Nhà hàng, ' OR category='Tiệm bánh, ') 
                            
              //               UNION

              //               SELECT p.id, p.food_name, p.rate, p.address, p.image_path,p.category, p.restaurant_id, p.latitude, p.longitude, p.menu, q.name, q.image
              //               FROM STORE p LEFT JOIN FOOD q ON p.restaurant_id = q.restaurant_id
              //               WHERE  food_name like '%$key4%'
              //               OR address like '%$key4%'
              //               OR category like '%$key4%'
              //               OR menu like '%$key4%'
              //               AND (category='Quán ăn, ' OR category='Ăn vặt/vỉa hè, ' OR category='Café/Dessert, ' OR category='Ăn chay, ' OR category='Nhà hàng, ' OR category='Tiệm bánh, ') 
                            
              //               UNION

              //               SELECT p.id, p.food_name, p.rate, p.address, p.image_path,p.category, p.restaurant_id, p.latitude, p.longitude, p.menu, q.name, q.image
              //               FROM STORE p LEFT JOIN FOOD q ON p.restaurant_id = q.restaurant_id
              //               WHERE  food_name like '%$key5%'
              //               OR address like '%$key5%'
              //               OR category like '%$key5%'
              //               OR menu like '%$key5%'
              //               AND (category='Quán ăn, ' OR category='Ăn vặt/vỉa hè, ' OR category='Café/Dessert, ' OR category='Ăn chay, ' OR category='Nhà hàng, ' OR category='Tiệm bánh, ') 
              //               GROUP BY restaurant_id
              //               LIMIT 20";
                            
              //               $topfood = $mysqli->query($sql);
              //               $max = $topfood->num_rows; //The nsumber of result
                            
              //               $arrFood = array(); //0-> $max -1
              //               while( $row = $topfood->fetch_assoc()){
              //                    array_push($arrFood,$row);
              //               }
                          
              //               $the_number_of_items_per_page = 10; //10 datas per page
              //               $page = $_GET["pagenumber"];
              //               $from = $page * $the_number_of_items_per_page;
                            
                            
              //               $newArrayFood = array();
              //               if($from > $max){}
              //               else{
              //                 for($i=$from; ($i <= $from + $the_number_of_items_per_page-1) && ($i <= $max-1); $i = $i + 1){
              //                   array_push($newArrayFood,$arrFood[$i]);
              //                 }  
              //               } 
              //               $result = array('result'=>'success','page'=>$page,'data'=>$newArrayFood);
              //               echo json_encode($result);
              //             }catch(Exception $e){
              //                    $result = array('result'=>'error');  
              //                    echo json_encode($result);  
              //             }

              // } //==3

       }



              
?>
	