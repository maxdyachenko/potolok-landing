<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$time = $_POST['time'];
$from = 'ant-fl.pro';
$message = "Имя: " . $name . "\r\n" . "Телефон: " . $phone . "\r\n" . "Время: " . $time;
mail('sividoff.maxim@yandex.ru', 'Заявка ', $message, 'From:'.$from);

$redirect = isset($_SERVER['HTTP_REFERER'])? $_SERVER['HTTP_REFERER']:'index.html';

exit();


?>