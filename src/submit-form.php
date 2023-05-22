<?php
  // Проверка наличия данных формы
  if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Валидация данных формы
    if (empty($name) || empty($email) || empty($message)) {
      http_response_code(400);
      echo "Ошибка: не все поля заполнены!";
      exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      http_response_code(400);
      echo "Ошибка: неправильный формат адреса электронной почты!";
      exit;
    }

    // Отправка сообщения на почту
    $to = "mister.slaus@gmail.com";
    $subject = "Новое сообщение от $name";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $message_body = "Имя: $name\nEmail: $email\n\n$message";
    $success = mail($to, $subject, $message_body, $headers);

    if (!$success) {
      http_response_code(500);
      echo "Ошибка: сообщение не отправлено!";
      exit;
    }

    echo "Спасибо за отправку сообщения!";
  } else {
    http_response_code(400);
    echo "Ошибка: данные формы не отправлены!";
    exit;
  }
?>
