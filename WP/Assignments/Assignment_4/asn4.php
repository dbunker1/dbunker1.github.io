<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "Homework";
    $conn = mysqli_connect($servername, $username, $password, $dbname);

    if (!$conn) 
    {
        die("Connection failed: " . mysqli_connect_error());
    }

    $sql = "INSERT INTO addressbook (Firstname, Lastname,phonenumber,emailid,alternateaddress,address)

    VALUES

    ('$_POST[fname]','$_POST[lname]','$_POST[phone]','$_POST[email]','$_POST[altadd]','$_POST[address]')";
    if (mysqli_query($conn, $sql)) 
    {
        echo "Insert record successfully";
    } 
    else 
    {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
    mysqli_close($conn);
?>