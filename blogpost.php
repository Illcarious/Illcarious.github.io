<?php
$files = scandir('./_posts');
$count = 0;
foreach($files as $file){
    echo '<a href="./$file" >$count++</a>';
}
?>