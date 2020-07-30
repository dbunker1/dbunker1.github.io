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