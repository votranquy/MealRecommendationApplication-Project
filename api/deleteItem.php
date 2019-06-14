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
			echo("{\"result\":\"HET_HAN\"}");
		}
		else{
			$email = $decoded->email;
			$idbookmark = $obj['idBookmark'];
			$idfood = $obj['idFood'];
            $id = 0;
            //Get Id of user when know email (uncode from token)
            $sql_getid = $mysqli->query("SELECT id FROM USER WHERE email = '$email'");
            while($rowid = $sql_getid->fetch_assoc()){
                $id = $rowid["id"];
            }

            $sql_delete = "DELETE FROM BOOKMARK_SAVE WHERE id_bookmark='$idbookmark' AND id='$idfood'";

            $result = $mysqli->query($sql_delete);
            if($result){
                echo("{\"result\":\"THANH_CONG\"}");
            }
            else{
                echo("{\"result\":\"KHONG_THANH_CONG\"}");
            };
		}
	}
	catch(Exception $e){
		echo("{\"result\":\"LOI\"}");
	}

?>