<?php


try {
  $conn = new PDO("mysql:host=k9xdebw4k3zynl4u.cbetxkdyhwsb.us-east-1.rds.amazonaws.com;dbname=od7e1lmerptv21bg", "a9uyw0nx8yll3o97", "karbogix1o6dosfv");
  echo "Conneted!"
} catch (PDOException $e) {
  echo "Error".$e->getMessage();
}


$user_email = $_POST['user_email'];
$student_id = $_POST['student_id'];
$user_pass = $_POST['user_pass'];


$query = "INSERT INTO users (user_email, student_id, user_pass) VALUES ('$user_email','$student_id','$user_pass')";


$result = $conn->query($query);

if($result){
  $id = $conn->lastInsertId();
  echo json_encode(array(
    "status"=>true,
    "id"=>$id
  ));
} else {
  echo json_encode(false);
}

?>