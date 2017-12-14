<?php
if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['lastname'])) {$lastname = $_POST['lastname'];}
if (isset($_POST['email'])) {$email = $_POST['email'];}
if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
if (isset($_POST['time'])) {$time = $_POST['time'];}
if (isset($_POST['date'])) {$date = $_POST['date'];}
if (isset($_POST['car'])) {$car = $_POST['car'];}
if (isset($_POST['comment'])) {$comment = $_POST['comment'];}

$message;

if ($name) {
	$message .= "Name: $name\n";
}

if ($lastname) {
	$message .= "Lastname: $lastname\n";
}

if ($email) {
	$message .= "Email: $email\n";
}

if ($phone) {
	$message .= "Phone: $phone\n";
}

if ($time) {
	$message .= "Time: $time\n";
}

if ($date) {
	$message .= "Date: $date\n";
}

if ($comment) {
	$message .= "Question: $comment\n";
}

if ($car) {
	$subject = "Booking car: $car";
} else {
	$subject = "New message";
}

$to = "rockefeller.corp@gmail.com";
$headers = "Content-type: text/plain; charset = UTF-8";

$send = mail($to, $subject, $message, $headers);
?>
