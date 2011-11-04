<?php 
header('Content-Type: text/plain'); 
$csv = file_get_contents('supInfo.csv'); 
echo $csv; 
?> 