<?php 
    //Server config
    $server_username ="root"; 
    $server_password =""; 
    $server_host = "localhost"; 
    $database = 'MealRecommendationApp'; 
    $conn = mysqli_connect($server_host,$server_username,$server_password,$database);
    mysqli_query($conn,"SET NAMES 'UTF8'");
  

    //Receive datas from frontend
    $obj= json_decode(file_get_contents('php://input'),true);
    $restaurantid =$obj["restaurantid"];
    $menu         =$obj["menu"];

 

    $sql_update = 
        "UPDATE FOOD 
        SET 
        menu='$menu'
        WHERE 
            restaurant_id = '$restaurantid'";
    $sql_update_result=mysqli_query($conn,$sql_update);
    if($sql_update_result){echo("{\"result\":\"THANH_CONG\"}");}
    else{echo("{\"result\":\"KHONG_THANH_CONG\"}");};

?>