<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Отправляем данные на почту
  $to = 'gurupinterest@yandex.ru';
  $subject = 'New feedback from ' . $name;
  $body = "Name: $name\nEmail: $email\nMessage:\n$message";
  $headers = "From: $email\r\nReply-To: $email\r\n";
  mail($to, $subject, $body, $headers);

  // Отправляем ответ клиенту
  header('Content-Type: application/json');
  echo json_encode(['status' => 'success']);
} else {
  // Отправляем ответ клиенту
  header('Content-Type: application/json');
  echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
}
