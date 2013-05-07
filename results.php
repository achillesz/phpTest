<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <title>Book-O-Rama Catalog Search Results</title>
</head>
<body>
<h1>Book-O-Rama Search Results</h1>
<?php
$searchtype = $_POST['searchtype'];
$searchterm = $_POST['searchterm'];
if(!$searchtype || !$searchterm){
    echo "you have not entered search details. Please go back and try again.";
    exit;
}
if(!get_magic_quotes_gpc()){
    $searchtype = addslashes($searchtype);
    $searchterm = addslashes($searchterm);
}
@ $db = new mysqli('localhost','bookorama123','books');
if(mysqli_connect_errno()){
    echo "Error: Could not connect to database.Please try again later";
    exit;
}
$query = "select * from books where ".$searchtype." like '%".$searchterm."%'";
$result = $db->query($query);
$num_results = $result->num_rows;

echo "<p>Number of books found: ".$num_results."</p>";
for($i = 0; $i < $num_results; $i++){
    $row = $result->fetch_assoc();
    echo "<p><strong>" .($i + 1).". Title: ";
    echo htmlspecialchars(stripslashes($row['title']));
};

?>
</body>
</html>
