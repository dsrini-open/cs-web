<html lang="en">
<head>
<title>Charles Sampson Web page</title>
<link href="styles/layout.css" rel="StyleSheet" type="text/css">
<link href="styles/Menu.css" rel="StyleSheet" type="text/css">
<SCRIPT language=JavaScript type=text/javascript src="styles/dropdown.js"> </SCRIPT>
</head>
<body>

<?php include("left_header.php"); ?>

<td class="content">

<h3> Consultation Capabilities</h3>

<?php
chdir("Files");
$file = 'consultation.txt';
$fileHandle = fopen($file, 'r');
$data = file_get_contents($file);
$dataArray = explode("\n", $data);
$format = '<li>%s</li><br/>' ;
echo '<table width="600">';
echo '<tr> <td align = "justify">';
echo '<ul>';


foreach($dataArray as $eachDataArray) 
{ 
	$eachDataArrayTrimmed = trim($eachDataArray,'\n');
	$eachDataArrayTrimmed = trim($eachDataArrayTrimmed);
	$eachDataArrayTrimmed = str_replace('&nbsp;','',$eachDataArrayTrimmed);
	$html = htmlentities($eachDataArrayTrimmed,ENT_QUOTES);
	if(strlen($html) > 0)
		printf($format, $html); 
} 

echo '</ul>';
echo '</td></tr>';
echo '<tr><td>';
echo 'To Consult Dr. Charles Sampson on any of the above areas / on anything regarding public affairs please send an email to him regarding the same.';
echo '</td></tr>';
echo '</table>';
echo '<br />';
fclose($fileHandle);
?>
</td>

<?php include("right_footer.php"); ?>

</table>
</body>
</html>