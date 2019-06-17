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
	$email = $obj['email'];

if($email != ''){
	$confirmationcode = rand (10000, 99999);
	$sql = "UPDATE USER SET register_code='$confirmationcode' WHERE 
           email = '$email'";
           
	$result = $mysqli->query($sql);
	if($result){
	
		$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
		try {
		    //Server settings
		    // $mail->SMTPDebug = 2;                                 // Enable verbose debug output
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
		//     $mail->addAddress('joe@example.net', 'Joe User');     // Add a recipient
		    $mail->addAddress($email);               // Name is optional
		    $mail->addReplyTo('votranquy96@gmail.com', 'Information');
		//     $mail->addCC('cc@example.com');
		//     $mail->addBCC('bcc@example.com');
		 
		    //Attachments
		//     $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
		//     $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
		 
		    //Content
		    $mail->isHTML(true);                                  // Set email format to HTML
		    $mail->Subject = 'Mã xác thực đăng ký của bạn';
		    $mail->Body    = $confirmationcode;
		    // $mail->AltBody = '';

		    $mail->send();
		//     echo 'Message has been sent';
			echo("{\"result\":\"success\"}");
		} catch (Exception $e) {
			echo("{\"result\":\"fail\"}");
		}
	}
	else{
		echo("{\"result\":\"fail\"}");
	};
}
else{
	echo("{\"result\":\"fail\"}");
}

?>