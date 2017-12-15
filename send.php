<?php

$name = $_POST['nazvisko'];
$phone = $_POST['telefon'];
$from = 'ant-fl.pro';
$message = "Имя: " . $name . "\r\n" . "Телефон: " . $phone;
mail('sividoff.maxim@yandex.ru', 'Заявка ', $message, 'From:'.$from);

$redirect = isset($_SERVER['HTTP_REFERER'])? $_SERVER['HTTP_REFERER']:'index.html';

exit();

?>