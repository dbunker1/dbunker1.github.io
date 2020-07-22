<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Class Work 8</title>
    </head>
    <body>
        <p>Generating a random number between 1 and 10:
            <?php
            echo rand(1, 10);
            ?>
        </p>
        <p>
        <?php 
        //defining the variables 
            $text = "Hello, World!"; 
  
            $num1 = 10; 
  
            $num2 = 20; 
  
            //echoing the variables 
            echo $text."<br>"; 
  
            echo $num1."+".$num2."="; 
  
            echo $num1 + $num2; 
        ?> 
        </p>
        <?php 
  
        // PHP code to illustrate the  
        // array_diff_assoc() function 
  
        // Input Arrays 
        $array1 = array("10"=>"RAM", "20"=>"LAXMAN", "30"=>"RAVI","40"=>"KISHAN", "50"=>"RISHI"); 
        $array2 = array("10"=>"RAM", "70"=>"LAXMAN","30"=>"KISHAN", "80"=>"RAGHAV"); 
        $array3 = array("30"=>"LAXMAN", "80"=>"RAGHAV"); 
  
        print_r(array_diff_assoc($array1, $array2, $array3)); 
  
        ?> 
        <h2>Exercise 1 </h2>
        <p>
            
            <?php
                //Write a function named hello_world that prints the following console output: Hello world!
                function helloWorld(){
                    echo "Hello World";
                }
                helloWorld();
            ?>
        </p>
        <h2>Exercise 2 </h2>
        <p>
            <?php
                //	Write a function named triangle that accepts an integer parameter representing a size in characters, 
                //  and prints to the console a right-aligned right triangle.
                function triangle($n)
                {
                    if($n == 1)
                    {
                        echo "*";
                    }
                    else{
                        for($i=0;$i<=$n;$i++)
                        {
                            for($j=0;$j<=$i;$j++)
                            {
                                echo "*";
                            }
                            echo "<br>";
                        }
                    }
                }
                triangle(9);
            ?>
        </p>
        <h2>Exercise 3</h2>
        <p>
            String: "Hello there, General Kenobi." <br>
                <?php
                    function word_count($str)
                    {
                        echo str_word_count($str);
                    }
                    word_count("Hello there, General Kenobi.");
                ?>
        </p>
        <h2>Exercise 4</h2>
        <p>
            
                <?php

                    function countWords($str)
                    {
                        
                    }
                    countWords("check check hello hello Hello one two Three");
                ?>
        </p>
        <h2>Exercise 5</h2>
        <p>
            <form method="post">
            Name:  <input type="text" name="username" /><br />
            Age: <input type="text" name="age" /><br />
            Education: <input type="text" name="edu" /><br />
            Email: <input type="text" name="email" /><br />
            Phone: <input type="text" name="phn" /><br />
            <input type="submit" name="submit" value="Submit me!" />
            </form>
                <?php
                    echo $_POST['username'];
                    echo $_REQUEST['username'];
                ?>
        </p>

    </body>
</html>
