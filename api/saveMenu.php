<?php 
    //Server config
    $server_username ="root"; 
    $server_password =""; 
    $server_host = "localhost"; 
    $database = 'MealApp'; 
    $conn = mysqli_connect($server_host,$server_username,$server_password,$database);
    mysqli_query($conn,"SET NAMES 'UTF8'");
  
    //Receive datas from frontend
    $obj= json_decode(file_get_contents('php://input'),true);

    $restaurantid =$obj["restaurant_id"];
    $food_id      =$obj["food_id"];
    $name         =$obj["name"];
    $price         =$obj["price"];
    $image         =$obj["image"];
    if($name!=""){
        $sql_update = "INSERT INTO FOOD(restaurant_id,	food_id,name,	price,image) VALUES('$restaurantid','$food_id','$name','$price','$image')";
        $sql_update_result=mysqli_query($conn,$sql_update);
        if($sql_update_result){echo("{\"result\":\"INSERT_MENU_THANH_CONG\"}");}
        else{echo("{\"result\":\"INSERT_MENU_KHONG_THANH_CONG\"}");};
    }else{
        echo("{\"result\":\"INSERT_MENU_KHONG_THANH_CONG\"}");
    }
?>