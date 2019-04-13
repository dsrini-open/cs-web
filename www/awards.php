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

<h3> Awards / Fellowships </h3>
<?php
chdir("Files");
$file = 'csvitae.htm';
$fileHandle = fopen($file, 'r');
$data = file_get_contents($file);
echo '<table width="600">';
echo '<tr> <td align = "justify">';
function remove_HTML($s , $keep , $expand){
        /**///prep the string
        $s = ' ' . $s;
        /**///initialize keep tag logic
        if(strlen($keep) > 0){
            $k = explode('|',$keep);
            for($i=0;$i<count($k);$i++){
                $s = str_replace('<' . $k[$i],'[{(' . $k[$i],$s);
                $s = str_replace('</' . $k[$i],'[{(/' . $k[$i],$s);
            }
        }
        //begin removal
        /**///remove comment blocks
        while(stripos($s,'<!--') > 0){		$html = $eachDataArray;
		printf($format, $html); 
            $pos[1] = stripos($s,'<!--');
            $pos[2] = stripos($s,'-->', $pos[1]);
            $len[1] = $pos[2] - $pos[1] + 3;
            $x = substr($s,$pos[1],$len[1]);
            $s = str_replace($x,'',$s);
        }
        /**///remove tags with content of expandbetween them
        if(strlen($expand) > 0){
            $e = explode('|',$expand);
            for($i=0;$i<count($e);$i++){
                while(stripos($s,'<' . $e[$i]) > 0){
                    $len[1] = strlen('<' . $e[$i]);
                    $pos[1] = stripos($s,'<' . $e[$i]);
                    $pos[2] = stripos($s,$e[$i] . '>', $pos[1] + $len[1]);
                    $len[2] = $pos[2] - $pos[1] + $len[1];
                    $x = substr($s,$pos[1],$len[2]);
                    $s = str_replace($x,'',$s);
                }
            }
        }
        /**///remove remaining tags
        while(stripos($s,'<') > 0){
            $pos[1] = stripos($s,'<');
            $pos[2] = stripos($s,'>', $pos[1]);
            $len[1] = $pos[2] - $pos[1] + 1;
            $x = substr($s,$pos[1],$len[1]);
            $s = str_replace($x,'',$s);
        }
        /**///finalize keep tag
        for($i=0;$i<count($k);$i++){
            $s = str_replace('[{(' . $k[$i],'<' . $k[$i],$s);
            $s = str_replace('[{(/' . $k[$i],'</' . $k[$i],$s);
        }
        return trim($s);
    }
$data = remove_HTML($data,"body|u|i|p", "head|style");

if ( strcmp($data,$dummy) != 0) {
// Output formatting from html file

	$dataArray = explode("<p", $data);
	$format = '<li>%s</li><br/>' ;
	$format2 = '' ;
	$i = 0;
	$note = 0;

	foreach($dataArray as $eachDataArray) 
	{ 
		$start_pos = strpos($eachDataArray,'class=');
		if ( $start_pos == '1'){
			$end_pos = strpos($eachDataArray,'>',$start_pos);
			$eachDataArray = substr_replace($eachDataArray,'', $start_pos, $end_pos - $start_pos + 1 );
		}
		$eachDataArray = str_replace('</p>','',$eachDataArray);
		
		if(strstr($eachDataArray,'Awards/Fellowships/Training'))
		{
			echo '<ul>';
			$i = 1;
			continue;
		}
		if($i == 0)
			continue;
		if($note == 1)
			break;
		if(stristr($eachDataArray,'Elected to Sigma Rho'))
			$note = 1;
		$eachDataArrayTrimmed = trim($eachDataArray,'\n');
		$eachDataArrayTrimmed = trim($eachDataArrayTrimmed);
		$eachDataArrayTrimmed = str_replace('&nbsp;','',$eachDataArrayTrimmed);
		$html = $eachDataArrayTrimmed;
		if( !empty($eachDataArrayTrimmed)) 
			printf($format, $html); 
	}

}
echo ' </ul>';
echo '</td></tr> </table>';
fclose($fileHandle);
?>

</td>

<?php include("right_footer.php"); ?>

</body>
</html>