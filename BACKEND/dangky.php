<?php 

  $server_username ="root"; // thông tin đăng nhập host
  $server_password =""; // mật khẩu, trong trường hợp này là trống
  $server_host = "localhost"; // host là localhost
  $database = 'users'; // database là users
  $link = mysqli_connect($server_host,$server_username,$server_password,$database);
  mysqli_query($link,"SET NAMES 'UTF8'");

  $obj= json_decode(file_get_contents('php://input'),true);
  $hoten =$obj["HOTEN"];
  $username =$obj["USERNAME"];
  $password = $obj["PASSWORD"];
  $query = "INSERT INTO NhanVien VALUES(null,'$hoten','$username','$password')";
  mysqli_query($link,$query);
  //printf ("New Record has id %d.\n", mysqli_insert_id($link));
  $last_id =  mysqli_insert_id($link);
  //echo $last_id;
?>
{"id":<?php echo $last_id;?>}



