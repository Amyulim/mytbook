<?php
echo "HELLP"

try {
  $conn = new PDO("mysql:host=k9xdebw4k3zynl4u.cbetxkdyhwsb.us-east-1.rds.amazonaws.com;dbname=hxx7ktin4x3q7iue", "caqwo1iz5lww951z", "zqigtmtt81za05j2");
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
<h2>POST Data</h2>
 <?php 
  if (count($_POST) == 0)
     echo "<p><em>There are no POST variables</em></p>";
  foreach ($_POST as $key => $value) 
  { 
      echo "<strong>" . $key . "=</strong>" . $value . "</br>";
  }  