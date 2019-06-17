<?php
  include "../PHPMailer-master-6_05/PHPMailer-master/src/PHPMailer.php";
  include "../PHPMailer-master-6_05/PHPMailer-master/src/Exception.php";
  include "../PHPMailer-master-6_05/PHPMailer-master/src/OAuth.php";
  include "../PHPMailer-master-6_05/PHPMailer-master/src/POP3.php";
  include "../PHPMailer-master-6_05/PHPMailer-master/src/SMTP.php";
   
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;
  use \Firebase\JWT\JWT;
    require __DIR__ . '/vendor/autoload.php';
    include('function.php');
    include('connect/connect.php');
    $json = file_get_contents('php://input');
    $obj = json_decode($json, true);
    $email = $obj['email'];
    try{
      if($email != ""){
        $sql = $mysqli->query("SELECT * FROM USER WHERE email = '$email'");
        $result1 = mysqli_fetch_assoc($sql);
        if($result1){
          $confirmationcode = rand (10000, 99999);
          $sql = "UPDATE USER SET forgetpassword_code='$confirmationcode' WHERE 
                   email = '$email'";       
          $result2 = $mysqli->query($sql);
          if($result2){
                        $mail = new PHPMailer(true);                           
                        try {
                            $mail->isSMTP();                                      // Set mailer to use SMTP
                            $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
                            $mail->SMTPAuth = true;                               // Enable SMTP authentication
                            $mail->Username = 'votranquy96@gmail.com';                 // SMTP username
                            $mail->Password = 'votranquy96@gmail.co m';                           // SMTP password
                            $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
                            $mail->Port = 587;                                    // TCP port to connect to
                            $mail->CharSet = 'UTF-8';
                            $mail->setFrom('votranquy96@gmail.com', 'MealApp');
                            $mail->addAddress($email);               // Name is optional
                            $mail->addReplyTo('votranquy96@gmail.com', 'Information');
                            $mail->isHTML(true);                                  // Set email format to HTML
                            $mail->Subject = 'Mã xác thực của bạn';
                            $mail->Body    = $confirmationcode;
                            $mail->send();
                          echo("{\"result\":\"success\"}");
                        } catch (Exception $e) {
                          echo("{\"result\":\"fail\"}");
                        }
          }
          else{
            echo("{\"result\":\"fail\"}");
          };              
        }
        else{echo("{\"result\":\"fail\"}");};
      }else{echo("{\"result\":\"fail\"}");}   
    }
    catch(Exception $e){echo("{\"result\":\"error\"}");}
?>