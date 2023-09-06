<?php
include_once('./_common.php');

// 페이지 제목(웹 접근성 관련)
$g5['title'] = '회사소개';

// 페이지마다 head 다를 때 CSS 추가해서 디자인 바꾸기
add_stylesheet('<link rel="stylesheet" href="'.G5_CSS_URL.'/font-awesome/css/font-awesome.min.css">', 0);

include_once(G5_PATH.'/head.php');

?>


about

<?php
include_once(G5_PATH.'/tail.php');