<?php
include('db.php');
$fname=$_POST['fname'];
$lname=$_POST['lname'];
$email=$_POST['email'];
$pass= $_POST['pass'];
$sql= "INSERT INTO `main_user` (`fname`, `lname`, `email`, `pass`) VALUES ('$fname', '$lname', '$email', '$pass')";
$insert=mysqli_query($conn, $sql);
echo "sucessfull complete";
?>