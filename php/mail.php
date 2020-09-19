<?php

$recepient = "okriuchkov@gmail.com";
$sitename = "www.open.com";

$name = trim($_POST["userName"]);
$number = trim($_POST["userNumber"]);
// $message = trim($_POST["message"]);

$pagetitle = "Свяжитесь с нами";
mail($recepient, $pagetitle, $name);

?>