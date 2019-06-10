
<?php
$username = "root"; // Khai báo username
$password = "root";      // Khai báo password
$server   = "localhost:3306";   // Khai báo server
$dbname   = "mealapp";      // Khai báo database

// Tạo kết nối tới MySQL database server
$db_connection = new mysqli($server, $username, $password, $dbname);
// $conn = mysqli_connect($servername, $username, $password, $database);
// Kiểm tra kết nối
// if ($db_connection->connect_error) {
//     die("Lỗi kếtt nối tới cơ sở dữ liệu. Chi tiết lỗi: " . $db_connection->connect_error);
// } 

// echo "Kết nối thành công!";
if(!$conn){
    echo("Fail!");
}else{
    echo("Success");
}
?>