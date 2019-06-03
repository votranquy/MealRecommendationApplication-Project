<?php
include "../PHPMailer-master-6_05/PHPMailer-master/src/PHPMailer.php";
include "../PHPMailer-master-6_05/PHPMailer-master/src/Exception.php";
include "../PHPMailer-master-6_05/PHPMailer-master/src/OAuth.php";
include "../PHPMailer-master-6_05/PHPMailer-master/src/POP3.php";
include "../PHPMailer-master-6_05/PHPMailer-master/src/SMTP.php";
 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

include('connect/connect.php');
$json = file_get_contents('php://input');
$obj = json_decode($json, true);
$name = $obj['name'];
$email = $obj['email'];
$password = md5($obj['password']);





if($name !='' && $email != '' && $password!=''){
	$confirmationcode = rand (10000, 99999);
	$sql = "INSERT INTO USER(email,password,name,register_code) VALUES('$email','$password','$name','$confirmationcode')";
	$result = $mysqli->query($sql);
	if($result){
		function SendEmail($usermail,$confirmationcode){
			$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
			try {
				//Server settings
				// $mail->SMTPDebug = 1;                                 // Enable verbose debug output
				$mail->isSMTP();                                      // Set mailer to use SMTP
				$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
				$mail->SMTPAuth = true;                               // Enable SMTP authentication
				$mail->Username = 'votranquy96@gmail.com';                 // SMTP username
				$mail->Password = 'votranquy96@gmail.co m';                           // SMTP password
				$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
				$mail->Port = 587;                                    // TCP port to connect to
				//Recipients
				$mail->CharSet = 'UTF-8';
				$mail->setFrom('votranquy96@gmail.com', 'MealApp');
				$mail->addAddress($usermail);               
				$mail->addReplyTo('votranquy96@gmail.com', 'Information');
				$mail->isHTML(true);                                
				$mail->Subject = 'Mã xác thực đăng ký của bạn';
				$mail->Body    = $confirmationcode;
				$mail->AltBody = '';
				$mail->send();
			} catch (Exception $e) {
				$sql_delete = "DELETE FROM USER WHERE email='$email'";
				$result = $mysqli->query($sql_delete);
				echo("{\"result\":\"KHONG_THANH_CONG\"}");
			}
		}

		SendEmail($email,$confirmationcode);
		//     echo 'Message has been sent';
			echo("{\"result\":\"THANH_CONG\"}");

	}
	else{
		echo("{\"result\":\"KHONG_THANH_CONG\"}");
	};
}
else{
	echo("{\"result\":\"KHONG_THANH_CONG\"}");
}

?>