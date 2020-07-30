<!Doctype html>
<html>

    <head>

        <title>HomeWork 3</title> 
        <link rel="stylesheet" href="hw3.css">
    </head>

    <body>

        <form method="post" action="<?php echo htmlentities($_SERVER['PHP_SELF']); ?>"> 

        <textarea class="select" cols="150" rows="15" name="text" required></textarea><br/>

            Text Color: <select name="color" class="select" required>

                <option value='white'>White</option>
                <option value='green'> green</option>
                <option value='blue'>blue</option>
                <option value='purple'>purple</option>

            </select>

           Background Color:  <select name="bgcolor" class="select" required>

                <option value='#D35400'>Brown</option>
                <option value='#FF333F'>Red</option>
                <option value='#333FFF'>Blue</option>
                <option value='black'>black</option>

            </select>

             Font Style: <select name="font" class="select" required>

                <option value="times new roman">Times New Roman</option>
                <option value='courier'>Monospaced</option>
                <option value='Arial'>Arial</option>

            </select><br>

            <input class="select button" type="submit" name="s">

        </form>

    </body>

</html>

<?php

    if(isset($_POST['s'])) 

    {

        $color= $_POST['color']; 
        $bgcolor= $_POST['bgcolor'];
        $font= $_POST['font'];
        $text=$_POST['text'];

    echo "<pre style='width:*; color:$color; background-color:$bgcolor;font-family:$font; font-size:40px;'> ".$text." </pre>  ";

    }

?>