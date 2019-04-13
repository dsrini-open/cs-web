<?php

function LoadGif($count, $folder)
{
	$folder = 'images/count';
	$counter_len=strlen($count);
	$counter_digits = array();
	$counter_width = 0;
	$counter_height = 0;
	for ($i = 0; $i < $counter_len; $i++) {
		$counter_digits[$i] = @imagecreatefromgif('./images/count/'.substr($count, $i, 1).'.gif');
		$counter_width += imagesx($counter_digits[$i]);
		if ($counter_height < imagesy($counter_digits[$i]))
			$counter_height = imagesy($counter_digits[$i]);
	}
	$im = imagecreatetruecolor($counter_width, $counter_height);
	$xpos = 0;
	for ($i = 0; $i < $counter_len; $i++) {
		imagecopy($im, $counter_digits[$i], $xpos, 0, 0, 0, imagesx($counter_digits[$i]), imagesy($counter_digits[$i]));
		$xpos += imagesx($counter_digits[$i]);
	}

	for ($i = 0; $i < $counter_len; $i++) {
		imagedestroy($counter_digits[$i]);
	}
    if(!$im)
    {
        $im = imagecreatetruecolor (150, 30);
        $bgc = imagecolorallocate ($im, 255, 255, 255);
        $tc = imagecolorallocate ($im, 0, 0, 0);

        imagefilledrectangle ($im, 0, 0, 150, 30, $bgc);
        imagestring ($im, 1, 5, 5, 'Error loading ' . $imgname, $tc);
    }

    return $im;
}

$counterid=((isset($_GET['counterid'])) ? $_GET['counterid'] : 0);
$style=((isset($_GET['style'])) ? $_GET['style'] : 1);
//chdir("images/count");
$file = './images/count/'.$counterid.'.txt';
if (file_exists($file)) {
	$counterf=file($file);
	$counter=$counterf[0];
} else {
	$counter=0;
}
$counter++;
$f=fopen($file,"w");
fputs($f, $counter);
fclose($f);

header('Content-Type: image/gif');

$img = LoadGif($counter, $style);

imagegif($img);
imagedestroy($img);

?>
