<?php
    use \Firebase\JWT\JWT;
    require __DIR__ . '/vendor/autoload.php';
    include('function.php');
    include('connect/connect.php');

    $json = file_get_contents('php://input');
    $obj = json_decode($json, true);
    $token = $obj['token'];
    $key = "example_key";
    // p: bookmark
    // q: bookmark save 
    // t: food

    try{
		$decoded = JWT::decode($token, $key, array('HS256'));
		if($decoded->expire < time()){
			echo 'HET_HAN';
		}
		else{
			$email = $decoded->email;
			// $name = $obj['name'];
			// $phone = $obj['phone'];
            // $address = $obj['address'];

            $sql_getid = $mysqli->query("SELECT id FROM USER WHERE email = '$email'");

            while ($row = $sql_getid->fetch_assoc()) {
                $id = $row["id"];
            }
            
            $bookmark = $mysqli->query(
                "SELECT id as idbookmark, bookmark_name
                FROM BOOKMARK
                WHERE id_user = '$id'
                GROUP BY id"
            );
            $array =   array();
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
                    $fooditem = $mysqli->query("SELECT * FROM FOOD WHERE restaurant_id = '$idfood'");
                    while($rowfood = $fooditem->fetch_object()){
                        array_push($arrFood,$rowfood);
                    }
                }
                $row->food = $arrFood;
                array_push($array,$row);
            }

            echo json_encode($array);

		}
	}
	catch(Exception $e){
		echo 'LOI';
	}

?>