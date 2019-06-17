<?php
    use \Firebase\JWT\JWT;
    require __DIR__ . '/vendor/autoload.php';
    include('function.php');
    include('connect/connect.php');

    $json = file_get_contents('php://input');
    $obj = json_decode($json, true);
    $token = $obj['token'];
    $idbookmark = $obj['idbookmark'];
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
              
                     $bookmarksave = $mysqli->query(
                            "SELECT p.id_food  as id, t.food_name, q.image,q.id as idoffood, t.rate, t.address, t.image_path, t.category, t.restaurant_id, t.latitude,t.longitude,q.name, t.menu
                            FROM BOOKMARK_SAVE p 
                            LEFT JOIN FOOD q ON p.id_food = q.id
                            INNER JOIN STORE t ON q.restaurant_id=t.restaurant_id
                            WHERE id_bookmark = '$idbookmark'");

                     $array = array();


                     while ($row = $bookmarksave->fetch_object()){
                            array_push($array,$row);
                     }

                     $sql_getBookmarkName = $mysqli->query("SELECT * FROM BOOKMARK WHERE id='$idbookmark'");
                     while ($row_getBookmarkName = $sql_getBookmarkName->fetch_assoc()) {
                            $bookmarkName = $row_getBookmarkName["bookmark_name"];
                     }

                     
                     $result = array('result'=>'success','data'=>$array,'bookmarkname'=>$bookmarkName);

                     echo json_encode($result);

		}
	}
	catch(Exception $e){
		echo("{\"result\":\"LOI\"}");
	}
?>