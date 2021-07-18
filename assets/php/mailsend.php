<?php

$fio = $_POST['fullName'];
$email = $_POST['email'];
$message = $_POST['notes'];
$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);
$message = htmlspecialchars($message);
$fio = urldecode($fio);
$email = urldecode($email);
$message = urldecode($message);
$fio = trim($fio);
$email = trim($email);
$message = trim($message);
if (mail("gerasim1305@gmail.com", "Заявка с сайта", "Message:".$message ,"ФИО:".$fio.". E-mail: ".$email ,"From: aloeseller.tk \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}

?>