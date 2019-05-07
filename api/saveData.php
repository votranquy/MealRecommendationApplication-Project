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
    $name         =$obj["name"];
    $restaurantid =$obj["restaurantid"];
    $address      =$obj["address"];
    $category     =$obj["category"];
    $latitude     =$obj["latitude"];
    $longitude    =$obj["longitude"];
    $rate         =$obj["rate"];
    $image_path   =$obj["first_image"];
    $totalReview  =$obj["totalReview"];
    //check if this restaurant is exist
    $sql_check = "SELECT * FROM FOOD
                 WHERE restaurant_id = '$restaurantid' 
                 ";
    $sql_check_result = mysqli_query($conn,$sql_check);
    
    if(mysqli_num_rows($sql_check_result) == 1){
    //Is exist. Update it.
        $sql_update = 
            "UPDATE FOOD 
            SET 
                food_name='$name', 
                address='$address', 
                category='$category', 
                latitude='$latitude', 
                longitude='$longitude',
                rate='$rate', 
                image_path='$image_path',
                totalReview='$totalReview'
            WHERE 
                restaurant_id = '$restaurantid'";
        $sql_update_result=mysqli_query($conn,$sql_update);
        if($sql_update_result){echo("{\"result\":\"UPDATE_THANH_CONG\"}");}
        else{echo("{\"result\":\"KHONG_THANH_CONG\"}");};
    }
    else{
    //Is NOT exist. Insert it.
        $sql_insert = 
            "INSERT INTO FOOD(restaurant_id,food_name,address,category,latitude,
            longitude,rate,	image_path) 
            VALUES('$restaurantid','$name','$address','$category','$latitude','$longitude','$rate','$image_path')";
        $sql_insert_result=mysqli_query($conn,$sql_insert);
        if($sql_insert_result){echo("{\"result\":\"INSERT_THANH_CONG\"}");}
        else{echo("{\"result\":\"KHONG_THANH_CONG\"}");};
    }
?>