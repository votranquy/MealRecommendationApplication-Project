<?php
    use \Firebase\JWT\JWT;
    require __DIR__ . '/vendor/autoload.php';
    include('function.php');
    include('connect/connect.php');

    $json = file_get_contents('php://input');
    $obj = json_decode($json, true);
    $token = $obj['token'];
    $key = "example_key";

    try{
		$decoded = JWT::decode($token, $key, array('HS256'));
		if($decoded->expire < time()){
			echo("{\"result\":\"TOKEN_HET_HAN\"}");
		}
		else{
			$email = $decoded->email;

            $sql_getid = $mysqli->query("SELECT id FROM USER WHERE email = '$email'");

            while ($row = $sql_getid->fetch_assoc()) {
                $id = $row["id"];
            }
            
            $bookmark = $mysqli->query(
                "SELECT id as idbookmark, bookmark_name
                FROM BOOKMARK
                WHERE id_user = '$id'
                GROUP BY id 
                ORDER BY id DESC"
            );
            $array = array();
            while ($row = $bookmark->fetch_object()){
                $arrFood =  array();
                $idbookmark=$row->idbookmark;
                $group = $mysqli->query(
                    "SELECT *
                    FROM BOOKMARK_SAVE
                    WHERE id_bookmark= '$idbookmark'"
                );
                while($rowgroup = $group->fetch_object()){
                    $idfood = $rowgroup->id_food;
                    $fooditem = $mysqli->query("SELECT 
                    p.id as sttfood, p.food_id, p.name, p.price, p.image,
                    q.id, q.restaurant_id, q.food_name, q.address, q.category, 
                    q.latitude, q.longitude, q.rate, q.worktime, q.menu, q.image_path, q.totalReview 
                     FROM FOOD p INNER JOIN STORE q ON p.restaurant_id = q.restaurant_id WHERE food_id = '$idfood'");
                    while($rowfood = $fooditem->fetch_object()){
                        array_push($arrFood,$rowfood);
                    }
                }
                $row->food = $arrFood;
                array_push($array,$row);
            }
            $result = array('result'=>'success','data'=>$array);
            echo json_encode($result);
		}
	}
	catch(Exception $e){
		echo("{\"result\":\"LOI\"}");
	}
?>