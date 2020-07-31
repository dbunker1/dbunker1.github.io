<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "db";
    $conn = mysqli_connect($servername, $username, $password, $dbname);

   

    $sql = "UPDATE addressbook SET Lastname='$_POST[lname]',phonenumber='$_POST[phone]',emailid='$_POST[email]',alternateaddress='$_POST[altadd]',address='$_POST[address]' WHERE Firstname='$_POST[fname]'";
    if (mysqli_query($conn, $sql))
    {
        echo "Update record successfully";
    } 
    else 
    {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
    mysqli_close($conn);
?>