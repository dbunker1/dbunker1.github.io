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

    $sql = "SELECT * FROM addressbook WHERE Firstname='$_POST[firstname]'";
    if($result = mysqli_query($conn, $sql))
    {
        if(mysqli_num_rows($result) > 0)
        {
            echo "<table>";
            echo "<tr>";
            echo "<th>id</th>";
            echo "<th>first_name</th>";
            echo "<th>last_name</th>";
            echo "<th>email</th>";
            echo "</tr>";

            while($row = mysqli_fetch_array($result))
            {
                echo "<tr>";
                echo "<td>" . $row['Firstname'] . "</td>";
                echo "<td>" . $row['Lastname'] . "</td>";
                echo "<td>" . $row['phonenumber'] . "</td>";
                echo "<td>" . $row['emailid'] . "</td>";
                echo "<td>" . $row['alternateaddress'] . "</td>";
                echo "<td>" . $row['address'] . "</td>";
                echo "</tr>";
            }
            echo "</table>";
            mysqli_free_result($result);

        }
        else
        {
            echo "No records matching your query were found.";
        }
    }
    else 
    {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
    mysqli_close($conn);
?>