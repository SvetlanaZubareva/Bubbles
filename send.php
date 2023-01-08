<?php
$name = $_GET['name'];
$tel = $_GET['tel'];

$name = htmlspecialchars($name);
$tel = htmlspecialchars($tel);

$name = urlencode($name);
$tel = urlencode($tel);

$name = trim($name);
$tel = trim($tel);

if (mail("se.berseneva@gmail.com",
     "Pest Reject",
     "Имя: ".$name."\n".
     "Телефон ".$tel,
     "From: se.berseneva@gmail.com \r\n")
){
     header("Location: /thank_you.html");
}

else {
     echo ("Error");
}

?>