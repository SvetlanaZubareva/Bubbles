use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require "./PHPMailer/src/Exception.php";
require "./PHPMailer/src/PHPMailer.php";

$mail = new PHPMailer(true);
$mail-> CharSet = "UTF-8";
$mail-> setLanguage("ru", "phpmailer/language/");
$mail-> IsHTML(true);

//от кого письмо
$mail-> setFrom("se.berseneva@gmail.com", "Заказ");

//кому отправить
$mail-> addAdress("se.berseneva@gmail.com");

//Тема письма
$mail-> Subject = "Заказ";

//Тело письма

$body = "<h1> Заказ </h1>";

if(trim(!empty($_POST ["name"]))){
    $body.="<p><strong>Имя</strong>".$_POST["name"]."</p>"
}

if(trim(!empty($_POST ["data"]))){
    $body.="<p><strong>Дата</strong>".$_POST["data"]."</p>"
}
if(trim(!empty($_POST ["tel"]))){
    $body.="<p><strong>Телефон</strong>".$_POST["tel"]."</p>"
}
if(trim(!empty($_POST ["clock"]))){
    $body.="<p><strong>Время звонка</strong>".$_POST["clock"]."</p>"
}

//Отправляем 
if(!$mail->send()) {
    $message = "Ошибка";
}else{
    $message = "Данные отправились";
}

$response = ["message" => $message]

header("Content-type: application/json");
echo json_encode($response);