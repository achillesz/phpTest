<!DOCTYPE html>
<html>
<head>
    <title>BOB 的表单</title>
</head>
<body>
<h1>Bob 's Auto Parts </h1>
<h2>Order Results</h2>
<p>Order processed.</p>
<?php
    echo "<p>Order processed at";
    echo date('H:i,jS F Y');
    echo "</p>";
    $tireqty = $_POST['tireqty'];
    $oilqty = $_POST['oilqty'];
    $sparkqty = $_POST['sparkqty'];
    echo "$tireqty $oilqty $sparkqty<Br>";
    echo $tireqty + $oilqty + $sparkqty;
    $DOCUMENT_ROOT = $_SERVER['DOCUMENT_ROOT'];
    @ $fp = fopen("$DOCUMENT_ROOT/../order.txt","ab",true);
    if(!$fp){
        echo 'no open';
        exit;
    }
    $outputstring = "$tireqty $oilqty $sparkqty";
    fwrite($fp,$outputstring,strlen($outputstring));
    flock($fp,LOCK_UN);
    fclose($fp);
    echo 'end';
?>
</body>
</html>