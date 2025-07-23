<?php
   include 'db.php';
   header("Access-Control-Allow-Origin: *");
   header("Access-Control-Allow-Headers: Content-Type");
   header('Content-Type: application/json');
   $data = json_decode(file_get_contents("php://input"), true);
   $username = $data['username'];
   $password = $data['password'];

   $stmt = $conn->prepare("SELECT password FROM users WHERE username = ?");
   $stmt->bind_param("s", $username);
   $stmt->execute();
   $stmt->store_result();

   if ($stmt->num_rows > 0) {
       $stmt->bind_result($hash);
       $stmt->fetch();
       if (password_verify($password, $hash)) {
           echo json_encode(["success" => true]);
       } else {
           echo json_encode(["success" => false, "error" => "Invalid credentials"]);
       }
   } else {
       echo json_encode(["success" => false, "error" => "User not found"]);
   }
   $stmt->close();
   $conn->close();
   ?>