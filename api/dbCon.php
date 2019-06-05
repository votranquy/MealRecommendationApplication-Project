<?php 
    $server_username ="root"; // thông tin đăng nhập host
    $server_password =""; // mật khẩu, trong trường hợp này là trống
    $server_host = "localhost"; // host là localhost
    $database = 'MealApp'; // database là website
    $conn = mysqli_connect($server_host,$server_username,$server_password,$database);
    mysqli_query($conn,"SET NAMES 'UTF8'");
  
  
    //$sql = "SELECT * FROM KhoaHoc";
    //$query = mysqli_query($conn,$sql);
    
?>