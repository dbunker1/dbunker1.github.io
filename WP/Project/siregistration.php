<?php
  $firstname = filter_input(INPUT_POST, 'firstname');
  $lastname = filter_input(INPUT_POST, 'lastname');
  echo $firstname;

  if(!empty($firstname)){
    if(!empty($password)){
      $host = "localhost:3306";
      $dbusername = "root";
      $dbpassword = "";
      $dbname = "userinfo";

      $conn = new myslqi($host, $dbusername, $dbpassword, $dbname);
      if(mysqli_connect_error()){
        die('Connect Error ('. mysqli_connect_errorno() .') ' . mysqli_connect_error());
      }
      else {
        $sql = "INSERT INTO info_user (firstname, lastname) values ('$firstname', '$lastname')";
        if($conn->query($sql)){
          echo "New record has been inserted";
        }
        else{
          echo "Error: ".$sql."<br>".$conn->error;
        }
        $conn->close();
      }
    }
  }
?>
