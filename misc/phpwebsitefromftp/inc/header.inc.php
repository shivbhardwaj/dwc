<?php 	
		$siteName = "Day Worker Center"; 
		$pageNumSplit = explode( '.', $pgNum ); // creates an array where "A.B.C.D.etc" gets split into $array[0] = A, $array[1] = B, etc.
		$section[$pageNumSplit[0]] = true; $page[$pageNumSplit[1]] = true; $subpage[$pageNumSplit[2]] = true; 		
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="eng">
<head>
	<meta http-equiv="content-type" content="text/html; charset=iso-8859-1" />
	<title><?php echo $siteName . " : " . $pageTitle; ?></title>
	<meta name="description" content="Day Worker Center of Mountain View" /> 
	<meta name="keywords" content="Dayworker Center, Mountain View, jornaleros, laborers, jobs, workers" />
	<script language="javaScript" type="text/javascript" src="../js/global.js"></script>

	<link href="/css/global.css" rel="stylesheet" type="text/css"/>	
	
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-22255021-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
</head>
<!-- page layout declared in body tag -->
<body id="<?php echo $pgType; ?>" onload="load()">
<!-- Page container -->
<div id="container">
	<a name="top"></a>
	<!-- Header -->
	<div id="header">
		<h1><a href="/" title="Day Worker Center">Day Worker Center of Mountain View</a></h1>
		<!--
		<div id="language" lang="es">[ <a href="#">En Espa&ntilde;ol</a> ]</div>
		 -->
		<?php include('navmain.inc.php'); ?>
	</div>
		<?php include('banner.inc.php'); ?>
		
	<!-- Main Content container -->
	<div id="content">
	

