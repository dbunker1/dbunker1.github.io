<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "College";
    $conn = mysqli_connect($servername, $username, $password, $dbname);

    if (!$conn) 
    {
        die("Connection failed: " . mysqli_connect_error());
    }

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