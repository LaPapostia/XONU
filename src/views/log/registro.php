<?php
   require 'database.php';

  $message = '';

   if (!empty($_POST['email']) && !empty($_POST['password'])) {
  $sql = "INSERT INTO usuarios (email, password) VALUES (:email, :password)";
  $stmt = $conn->prepare($sql);
  $stmt->bindParam(':email', $_POST['email']);
  $password = password_hash($_POST['password'], PASSWORD_BCRYPT);
  $stmt->bindParam(':password',$password);


  if ($stmt->execute()) {
    $message = 'Usuario creado correctamente';
  } else {
    $message = "Lo sentimos, no se ha podido registrar";
  }
}
?>