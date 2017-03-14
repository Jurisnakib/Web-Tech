<?php 
	$host_name='localhost';
	$user_name='root';
	$passpord='';
	$database_name='register';
	$conn=mysqli_connect($host_name,$user_name,$passpord,$database_name) or die(mysql_error());

	if($conn)
	{
		//echo "connected with DB";
	}
	else
	{
		echo "not connect with DB";
	}


?>