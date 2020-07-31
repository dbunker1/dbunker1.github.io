<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "db";
    $conn = mysqli_connect($servername, $username, $password, $dbname);

   

    $sql = "delete from addressbook where Firstname='$_POST[fname]'";
    if (mysqli_query($conn, $sql)) 
    {
        echo "Delete record successfully";
    } 
    else 
    {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
    mysqli_close($conn);
?>