

<?php 
use \Firebase\JWT\JWT;
require __DIR__ . '/vendor/autoload.php';
include('function.php');
include('connect/connect.php');
  $json = file_get_contents('php://input');
  $obj = json_decode($json, true);
  $token = $obj['token'];
  $yourlatitude = $obj['latitude'];
  $yourlongitude = $obj['longitude'];
  $key = "example_key";

  try{
        $decoded = JWT::decode($token, $key, array('HS256'));
        if($decoded->expire < time()){
            //Suggested the hot for user who doesn't log in base on location

            $sql = "SELECT q.id, q.name, q.image, q.price, q.average_score, q.total_vote, p.food_name, p.rate, p.address, p.category, p.restaurant_id, p.latitude, p.longitude,
            ABS(SQRT( POW(p.longitude-'$yourlongitude',2)-POW('p.latitude-$yourlatitude',2) )) as distance
            FROM FOOD q INNER JOIN STORE p ON p.restaurant_id = q.restaurant_id
            WHERE address LIKE '%Đà Nẵng%'
            AND average_score > 0
            AND (category='Quán ăn, ' OR category='Ăn vặt/vỉa hè, ' OR category='Café/Dessert, ' OR category='Ăn chay, ' OR category='Nhà hàng, ' OR category='Tiệm bánh, ') 
            AND NOT image = '/style/images/deli-dish-no-image.png'
            ORDER ORDER BY RAND()
            ";

            $food = $mysqli->query($sql);
            $arrFood = array();
            while( $row = $food->fetch_assoc()){
                array_push($arrFood,$row);
            }
            $result = array('result'=>'success','data'=>$arrFood);
            echo json_encode($result);

        }
        else{  

            $email = $decoded->email; //Get email
            $sql_getid = $mysqli->query("SELECT id FROM USER WHERE email = '$email'");
            while ($row = $sql_getid->fetch_assoc()) {
                   $iduser = $row["id"];
            }//From email, get id of user

            //Algorithm for Suggestion

            $sql = "SELECT q.id, q.name, q.image, q.price, q.average_score, q.total_vote, p.food_name, p.rate, p.address, p.category, p.restaurant_id, p.latitude, p.longitude,
            ABS(SQRT( POW(p.longitude-'$yourlongitude',2)-POW('p.latitude-$yourlatitude',2) )) as distance
            FROM FOOD q INNER JOIN STORE p ON p.restaurant_id = q.restaurant_id
            WHERE address LIKE '%Đà Nẵng%'
            AND average_score > 0
            AND (category='Quán ăn, ' OR category='Ăn vặt/vỉa hè, ' OR category='Café/Dessert, ' OR category='Ăn chay, ' OR category='Nhà hàng, ' OR category='Tiệm bánh, ') 
            AND NOT image = '/style/images/deli-dish-no-image.png'
            -- ORDER BY ABS(SQRT( POW(p.longitude-'$yourlongitude',2)-POW('p.latitude-$yourlatitude',2)))
                -- ORDER BY average_score DESC
            ORDER BY RAND()
            ";
                

            $food = $mysqli->query($sql);
            
            $arrFood = array(); //0-> $max -1
            while( $row = $food->fetch_assoc()){
                array_push($arrFood,$row);
            }
            $result = array('result'=>'success','data'=>$arrFood);
            echo json_encode($result);
        }
    }catch(Exception $e){
        $result = array('result'=>'error');  
        echo json_encode($result);  
    }  
?>