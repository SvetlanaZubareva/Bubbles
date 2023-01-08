<?php
$name = $_GET['name'];
$tel = $_GET['tel'];

$name = htmlspecialchars($name);
$tel = htmlspecialchars($tel);

$name = urlencode($name);
$tel = urlencode($tel);

$name = trim($name);
$tel = trim($tel);

if (mail("to_mail@mail.ru",
     "Pest Reject",
     "Имя: ".$name."\n".
     "Телефон ".$tel,
     "From: script@mail.ru \r\n")
){
     header("Location: /thank_you.html");
}

else {
     echo ("Error");
}

?>