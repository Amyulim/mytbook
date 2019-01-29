<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");


  try {
    $conn = new PDO("mysql:host=localhost;dbname=mytbook","root", "root");
    echo "Connected &nbsp;";
  }catch (PDOExpection $e){
    echo "Error" .$e->getMessage();
  }


$user_email = $_POST['user_email'];
$student_id = $_POST['student_id'];
$user_pass = $_POST['user_pass'];


$query = "INSERT INTO users (user_email, student_id, user_pass) VALUES ('$user_email','$student_id','$user_pass')";




//if($result){
//  $id = $conn->lastInsertId();
//  echo json_encode(array(
//    "status"=>true,
//    "id"=>$id
//  ));
//} else {
//  echo json_encode(false);
//}
$result = $conn->query($query);
if($result){
  echo json_encode(true);
} else {
  echo json_encode(false);
}

?>
