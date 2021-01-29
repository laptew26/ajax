<?php
$email = $_POST['email'];
$password = $_POST['password'];
echo '<div class="alert alert-success" role="alert">
  Отправка проведена успешно! Почта: '.$email.' Пароль: '.$password.'
</div>';
?>