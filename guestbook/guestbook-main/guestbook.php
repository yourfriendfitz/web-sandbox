<?php
$name = filter_input(INPUT_GET, 'name');
$time = time();

if (!empty($name)){
$host = "localhost:3306";
$dbusername = "root";
$dbpassword = "";
$dbname = "guestbook";

// create connection
$conn = new mysqli ($host, $dbusername, $dbpassword, $dbname);

if (mysqli_connect_error()){
    die('Connect Error('. mysqli_connect_errno() .') '
        . mysqli_connect_error());
}
else{
    $sql = "INSERT INTO guestbook (Name, Timestamp)  
    values ('$name', '$time')";
    if ($conn->query($sql)){
        echo "New Record is inserted successfully";
        sleep(3);
    }
    else{
        echo "Error: ". $sql ."<br>".$conn->error;
    }
    $conn->close();
}
}
else{
    echo "Name should not be empty";
    die();
}

echo '<script type="text/javascript">
    window.open("http://localhost:8000/");
</script>'
?> 