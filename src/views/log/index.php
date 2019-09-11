<?php
  session_start();
  require 'database.php';
  if (isset($_SESSION['user_id'])) {
    $records = $conn->prepare('SELECT id, email, password FROM usuarios WHERE id = :id');
    $records->bindParam(':id', $_SESSION['user_id']);
    $records->execute();
    $results = $records->fetch(PDO::FETCH_ASSOC);
    $user = null;
    if (!empty($results) > 0) {
      $user = $results;
    }
  }
?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>X ONU</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/style.css">
  </head>
  <body>
    <?php require 'partials/header.php' ?>

    <?php if(!empty($user)): ?>
          <br>Bienvenido. <?= $user['email']; ?>
          <br>Sesión iniciada correctamente
          <a href="logout.php">
            Logout
          </a>
        <?php else: ?>
            <h1>Ingresar</h1>

            <a href="login.php">Iniciar Sesión</a> o
            <a href="registro.php">Registrarse</a>
        <?php endif; ?>

  </body>
</html>
