<!-- Banner and Statement container -->
<?
		//Set Class Vars
		$class = '';
		$subnum = substr($pgNum, 0, 1);
		
		//Check Section
		switch($subnum)
		{
			case '1':
				$class = 'imageAboutUs';
				break;
			case '2':
				$class = 'imageEmployers';
				break;
			case '3':
				$class = 'imageWorkers';
				break;
			case '4':
				$class = 'imageVolunteers';
				break;
			case '5':
				$class = 'imageDonate';
				break;
			default:
				$class = '';
		}
?>
<div id="banner">	
	<div id="statement">
	<? 
	if ($pgType == "home"){ ?>		
		<h2><!--img src="/img/mission.png" alt="Mission" /-->MISSION</h2>
		
<p style="font-size:100%;">Connect workers and employers in a safe and supportive environment. Empower workers to improve their socio-economic condition through fair employment, education, and job skills training. Participate in advocacy efforts that support the day laborer community.</p>

	<? } else { ?>

		<h2><!--img src="/img/empowering.png" alt="Empowering Others" /-->EMPOWERING OTHERS</h2>

<p>&nbsp;</p><p>"We are realizing our dreams here" </p><div align="right"><p>"Aqui estamos realizando <br />nuestros suenos"</p></div>
	<? }
	?>
	</div>
	<div class="banner <? echo($class);?>">
	<? 
	if ($pgType == "home"){ 
		include('news.inc.php'); 
	} 
	?>	
	</div>		
</div>
