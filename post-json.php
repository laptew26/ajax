<?php

$email = $_POST['email'];
$password = $_POST['password'];
$radio = $_POST['radio'];

/*if (0 < $_FILES['file']['error']) {
    echo 'Error: ' . $_FILES['file']['error'] . '<br>';
} else {
    move_uploaded_file($_FILES['file']['tmp_name'], 'img/'.$_FILES['file']['name']);
}*/
$checkNew = $_POST['checkNew'];
$checkOff = $_POST['checkOff'];
$checkEl = $_POST['checkEl'];

$json = array(
    'email' => $email,
    'password' => $password,
    'radio' => $radio,
    //'img' => 'img/'.$_FILES['file']['name'],
    'checkNew' => $checkNew,
    'checkOff' => $checkOff,
    'checkEl' => $checkEl,
);

echo json_encode($json);

?>