<?php $pageTitle = "Home"; $pgNum = "0.0.0"; $pgType = "home"; include('inc/header.inc.php'); ?>

<div style="margin:0 auto;font-size:1em;padding:25px 40px;text-align:center;font-family:helvetica,arial,sans-serif">
The Day Worker Center of Mountain View is a 501(c)3 non-profit (Federal Tax Identification Number: 20-2874108).
</div>

<style>
#resource-fair {
	background-color:#ffffff;
	border-radius:15px;
	border-color:#eee;
	font-family:helvetica,Arial,sans-serif;
	padding:30px 20px;
	margin-bottom:24px;
}
#resource-fair h2 {
	font-family: inherit;
	font-size:2.5em;
	font-weight:bold;
	text-align:center;
	color:#FF8C00;
}
#resource-fair h3 {
	font-family: inherit;
	font-size:1.8em;
	color:#1E90FF;
}
#resource-fair h4 {
	font-family:helvetica,Arial,sans-serif;
	font-size:1.5em;
}
#resource-fair ul li {
	font-family:helvetica,Arial,sans-serif;
		font-size:1.2em;
		line-height:1.5em;
}
#resource-fair ul {
	list-style-position:inside;
}
</style>
<div id="resource-fair">
<img src="img/deferred_action.jpg" style="width:100%">
</div>

	<div class="box left">
	  <a href="/aboutus/facility.php"><span>Our new home!</span></a></div>
	<div class="box middle">
	  <!-- img has "Click to Reserve Worker Online" -->
	  <a href="/employers/reserveworker.php"></a></div>
	<!-- alternative based on previous configuration
	  <a href="/aboutus/facility.php">
	    <img src="/img/img_hire_merged.jpg" alt="Reserve Worker Online"><span></span></a></div>
	  -->
	<div class="box right">
	  <a href="/volunteer/index.php"><span>Consider giving or volunteering</span></a></div>

	<?php include('inc/footer.inc.php'); ?>
