<?php $pageTitle = "Reserve Worker"; $pgNum = "2.2.0"; $pgType = "page"; include('../inc/header.inc.php'); ?>
	
			<!-- Left Hand Content Area -->
		<!--  LH box not used on this page
			<div class="col-left">
		-->
				<!-- LH box module -->
		<!--  LH box not used on this page
				<?php include('../inc/location.inc.php'); ?>
			</div>
		-->
			
		<!-- not used on this page -->	<!-- Right Hand Content Area -->
<div>   <!-- class="col-right" -->
    <br />
	<h2 class="h2center">Reserve Worker</h2>
	
	<br />
    <p style="line-height:1.6em;">When you need help with a big project or with routine work around your home,
	    you are welcome to simply come to the center on the day of your job and 
		a friendly staff member will help you and have you on your way in minutes.
	   To help us connect you with a worker with the desired skills, fill out the below form.
	   We are open from 7am to 5pm, Monday to Saturday, but note that there are fewer workers available 
	    later in the day.
	   (Note: if you have an ongoing project and have found that one of our workers is providing a 
	     valuable service, simply arrange with that worker to continue on consecutive days.)</p>
	<br />
	
	<?php
	include("../php_includes/util.php");
	$htmlformat = true;
	$displayForm = TRUE;
	$firstField = "employerName";
	$focusField = "";
	
	$employerName = "";
	$companyName = "";
	$address = "";
	$city = "";
	$worksite = "";	// renamed field, was $addressCrossStreet
	$zip = "";		// new field
	$email = "";
	$phone = "";
	$hearAboutDWC = "";
	$startDay = "";
	$startTime = "";
	
	define("START_TIME_AM", "am");
	define("START_TIME_PM", "pm");
	$startTimeAmPmChoices = array();
	$startTimeAmPmChoices[START_TIME_AM] = START_TIME_AM;
	$startTimeAmPmChoices[START_TIME_PM] = START_TIME_PM;
	$startTimeAmPm = "";
	
	$jobdesc = "";		// new field
	$nbrworkers = "";	// new field
	$sameAddr = false;	// new checkbox
	$workHours = "";
	$jobSkills = "";
	$payRate = "";
	
	define("WILL_PROVIDE_LUNCH", "Will provide lunch");
	define("RESTROOM_AVAILABLE", "Restroom available");
	define("WILL_BRING_BACK_TO_DWC", "Will bring back to DWC");
	define("WILL_PAY_COMMUTE_TIME", "Will pay commute time");
	define("WILL_PAY_CASH", "Will pay cash");
	$infoChoices = array();
	$infoChoices[WILL_PROVIDE_LUNCH] = WILL_PROVIDE_LUNCH;
	$infoChoices[RESTROOM_AVAILABLE] = RESTROOM_AVAILABLE;
	$infoChoices[WILL_BRING_BACK_TO_DWC] = WILL_BRING_BACK_TO_DWC;
	$infoChoices[WILL_PAY_COMMUTE_TIME] = WILL_PAY_COMMUTE_TIME;
	$infoChoices[WILL_PAY_CASH] = WILL_PAY_CASH;
	$info = array();
	
	define("ENGLISH_NONE", "None");
	define("ENGLISH_UNDERSTAND_ONLY", "Understand only");
	define("ENGLISH_UNDERSTAND_AND_SPEAK", "Understand and speak");
	define("ENGLISH_UNDERSTAND_AND_SPEAK_WELL", "Understand and speak well");
	$englishLevelChoices = array();
	$englishLevelChoices[ENGLISH_NONE] = ENGLISH_NONE;
	$englishLevelChoices[ENGLISH_UNDERSTAND_ONLY] = ENGLISH_UNDERSTAND_ONLY;
	$englishLevelChoices[ENGLISH_UNDERSTAND_AND_SPEAK] = ENGLISH_UNDERSTAND_AND_SPEAK;
	$englishLevelChoices[ENGLISH_UNDERSTAND_AND_SPEAK_WELL] = ENGLISH_UNDERSTAND_AND_SPEAK_WELL;
	$englishLevel = "";
	
	if (isset($_POST["cSubmit"])) {
		// edit form
		$errorCount = 0;
		define("FIELD_REQUIRED_YES", TRUE);
		define("FIELD_REQUIRED_NO",  FALSE);
		
		$employerName = validateField($_POST['employerName'], "Name", "employerName", 
		                              FIELD_REQUIRED_YES);
		$companyName = validateField($_POST['companyName'], "Company", "companyName", 
		                             FIELD_REQUIRED_NO);
		$address  = validateField($_POST['address'], "Address", "address", FIELD_REQUIRED_YES);
		$city  = validateField($_POST['city'], "City", "city", FIELD_REQUIRED_YES);
		$zip  = validateField($_POST['zip'], "Zip", "zip", FIELD_REQUIRED_YES);
		if(! empty($zip)) validateZip($zip, "Zip", "zip");		
		$phone = validateField($_POST['phone'], "Phone", "phone", FIELD_REQUIRED_YES);
		if ((string)$phone !== "")
		    validatePhone($phone, "Phone", "phone");
		$email = validateField($_POST['email'], "E-mail address", "email", FIELD_REQUIRED_NO);
		if ((string)$email !== "")
		    validateEmail($email, "E-mail Address", "email");
		$hearAboutDWC  = validateField($_POST['hearAboutDWC'], "How did you hear about us", 
	                                   "hearAboutDWC", FIELD_REQUIRED_NO);
		
		$jobdesc  = validateField($_POST['jobdesc'], "Job description", "jobdesc", FIELD_REQUIRED_NO);
		$worksite  = validateField($_POST['worksite'], "Work site", "worksite", FIELD_REQUIRED_NO);
		$sameAddr = $_POST['sameAddr'];
		$startDay  = validateField($_POST['startDay'], "Start date", "startDay", FIELD_REQUIRED_YES);
		if ((string)$startDay !== "")
		    validateDate($startDay, "Start Date", "startDay");
		$startTime  = validateField($_POST['startTime'], "Start time", "startTime", FIELD_REQUIRED_YES);
		if ((string)$startTime !== "")
		    validateTime($startTime, "Start Time", "startTime");
		$startTimeAmPm  = validateField($_POST['startTimeAmPm'], "Start time am/pm", 
		                                "startTime", FIELD_REQUIRED_YES);
		$workHours  = validateField($_POST['workHours'], "Estimate work hours", "workHours", FIELD_REQUIRED_YES);
		if ((string)$workHours !== "")
		    validateNumeric($workHours, "Estimate work hours", "workHours");
		$jobSkills  = validateField($_POST['jobSkills'], "Job skills", "jobSkills", FIELD_REQUIRED_YES);
		$nbrworkers  = validateField($_POST['nbrworkers'], "Number of workers","nbrworkers", FIELD_REQUIRED_NO);
		$payRate  = validateField($_POST['payRate'], "Pay rate", "payRate", FIELD_REQUIRED_NO);
		// Per Ana's request 6/5/2014 to set Pay rate as text field
		//if ((string)$payRate !== "")
		//    validateMoney($payRate, "Pay rate", "payRate");
		$info = $_POST['info'];   // not validated since check box & not required
		$englishLevel  = validateField($_POST['englishLevel'], "English level needed", 
		                               "", FIELD_REQUIRED_YES);
		
		if ($errorCount > 0)
		    $displayForm = TRUE;
		else {
			// check error_reporting() above
			$to_address = "Maria Marroquin <maria@dayworkercentermv.org>" . ", "
				. "Ana Cruz-Barajas <ana@dayworkercentermv.org>" . ", "
				. "Marie Chin <marie@dayworkercentermv.org>";

			$subject = "Reserve Worker from " . $employerName . " via DWC website";
			
			$cDetails = '';
			if($htmlformat) {
				$wsite = nl2br($worksite);
				$cDetails = <<<EOT
<html>
<head><title>RESERVE WORKER from Day Worker Center website</title></head><body>
<p>&nbsp;</p>
 
<table style="width:100%" border="0">
<tr><td colspan="2"><strong>EMPLOYER</strong></td></tr>
<tr><td colspan="2" style="border-bottom:1px solid #000;"></td></tr>
<tr><td>Name: </td><td>$employerName</td></tr> 
<tr><td>Company:</td><td>$companyName</td></tr> 
<tr><td>Address:</td><td>$address</td></tr>
<tr><td>City/Zip</td><td>$city / $zip</td></tr> 
<tr><td>Phone:</td><td>$phone</td></tr>
<tr><td>Email:</td><td><a href="mailto:{$email}">$email</a></td></tr> 
<tr><td>How did you hear about us?</td><td>$hearAboutDWC</td></tr> 
<tr><td colspan="2">&nbsp;</td></tr>
EOT;
			$payRate = trim($payRate);
			if (is_numeric($payRate) && substr($payRate,0,1) !== "$")
			    $payRate = "$" . $payRate;
				$cDetails .= <<<EOT
<tr><td colspan="2">&nbsp;</td></tr>
<tr><td colspan="2"><strong>JOB INFORMATION</strong></td></tr>
<tr><td colspan="2" style="border-bottom:1px solid #000;"></td></tr>
<tr><td>Job description</td><td>$jobdesc</td></tr> 
<tr><td style="vertical-align:top">Work site:</td><td>$wsite</td></tr>
<tr><td>Start date/time:</td><td>$startDay @{$startTime} $startTimeAmPm</td></tr> 
<tr><td>Estimate work hours:</td><td>$workHours</td></tr> 
<tr><td>Job skills:</td><td>$jobSkills</td></tr>
<tr><td>Number of workers:</td><td>$nbrworkers</td></tr> 
<tr><td>Pay rate:</td><td>$payRate</td></tr>
<tr><td style="vertical-align:top">Check all that apply:</td><td>
EOT;
			if (!empty($info)) {
				foreach ($infoChoices as $infoChoice) {
					if (in_array($infoChoice, $info))
					    $cDetails .= " _x_ " . $infoChoice . '<br>';
					else
					    $cDetails .= " ___ " . $infoChoice . '<br>';
				}
			}
			$cDetails .= <<<EOT
</td></tr>
<tr><td>English level needed:</td><td>$englishLevel</td></tr>
</table>
<p>&nbsp;</p>
<p>&nbsp;</p>
<hr>			
<p>For office use: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Worker name(s)</p>
</body></html>
EOT;
			}
			else {
			$cDetails = "RESERVE WORKER from Day Worker Center website" . PHP_EOL
			    . PHP_EOL 
				. "EMPLOYER: " . PHP_EOL 
				. "Name: " . $employerName . PHP_EOL 
				. "Company: " . $companyName . PHP_EOL 
				. "Address: " . $address . PHP_EOL
				. "City: " . $city . "     Zip: " . $zip . PHP_EOL 
				. "Phone: " . $phone . "          Email: " . $email . PHP_EOL 
				. "How did you hear about us? " . $hearAboutDWC . PHP_EOL; 
			
			$payRate = trim($payRate);
			if (is_numeric($payRate) && substr($payRate,0,1) !== "$")
			    $payRate = "$" . $payRate;
			$cDetails .= PHP_EOL 
			    . "JOB INFORMATION: ". PHP_EOL
			    . "Job description: " . $jobdesc . PHP_EOL 
			    . "Work site: " . $worksite. PHP_EOL
				. "Start date: " . $startDay 
				. "     Start time: " . $startTime . $startTimeAmPm 
				. "          Estimate work hours: " . $workHours . PHP_EOL 
				. "Job skills: " . $jobSkills . PHP_EOL
				. "Number of workers: " . $nbrworkers . PHP_EOL 
				. "Pay rate: " . $payRate . PHP_EOL 
				. "Check all that apply: " . PHP_EOL;
			if (!empty($info)) {
				foreach ($infoChoices as $infoChoice) {
					if (in_array($infoChoice, $info))
					    $cDetails .= " _x_ " . $infoChoice . PHP_EOL;
					else
					    $cDetails .= " ___ " . $infoChoice . PHP_EOL;
				}
			}
			$cDetails .= "English level needed: " . $englishLevel . PHP_EOL;
			
			$cDetails .= PHP_EOL
			    . "__________________________________________________________________________" . PHP_EOL
				. "For office use:           Worker name(s)" . PHP_EOL;
			}
			$ctx = 'text';
			if($htmlformat) $ctx = 'html';
			$headers = "Reply-To: " . $employerName . " <" . $email . '>' . PHP_EOL;
			$headers .= "Content-type: text/{$ctx}" . PHP_EOL;
			
			$result = mail($to_address, $subject, $cDetails, $headers);
			
			error_log("SEND EMAIL: ". $result);
			
			if (! $result) {
				$errmsg = "There was a problem sending your email.";
				$errorCount++;
			}
			
			/* Replace with dialog box
			print '<br />';
			print "<div style='border:1px solid #CCC;border-radius:10px;background-color:{$bgcolor};'>";
			print "<div style='text-align:center;font-size:1.4em;padding-top:30px;padding-bottom:30px;'>$msg</div></div><br/>";
			
			 clear $_POST so that the form is not sticky
			$_POST = array();
			$displayForm = FALSE;
			 */
		}
	}
	
	if ($displayForm) {
		//include("../../php_includes/autoglobalsDump.php");
		if ($focusField === "")
		    $focusField = $firstField;
	?>
	    <div id="errorMsgArea"> </div>
		
		<p>Please fill out this form to reserve a worker. &nbsp;&nbsp;(* indicate required fields)</p>

		<form id="cReserve" name="cReserve" action="<?php echo $_SERVER['SCRIPT_NAME']; ?>"
		      method="post" class="form">
		    
		    <h3 style="color:#C25028">Employer</h3>
		    <hr>
		    
		    <fieldset>
				<div>
					<label for="employerName" style="text-align:right;padding:2px 10px;cursor:default;">* Name:</label>
					<div class="iefix">
						<input type="text" id="employerName" name="employerName" class="type_text" required
							value="<?php echo $employerName;?>" />
					</div>
				</div>
				
				<div>
					<label for="companyName"  style="text-align:right;padding:2px 10px;cursor:default">Company (if applicable):</label>
					<div class="iefix">
						<input type="text" id="companyName" name="companyName" class="type_text" 
						       value="<?php echo $companyName; ?>" />
					</div>
				</div>
				
				<div>
					<label for="address"  style="text-align:right;padding:2px 10px;cursor:default;">* Address:</label>
					<div class="labelFF iefix">
						<input type="text" id="address" name="address" class="type_text" required
						       value="<?php echo $address; ?>" />
					</div>
				</div>
				
				<div>
					<label for="city"  style="text-align:right;padding:2px 10px;cursor:default;">* City:</label>
					<div class="labelFF iefix">
						<input type="text" id="city" name="city" class="type_textFF"  required
						       value="<?php echo $city; ?>" /> &nbsp;&nbsp;&nbsp;
						<label for="zip" class="labelFF">* Zip: </label>
						<input type="text" id="zip" name="zip" class="type_textFF" size="10" required
							value="<?php echo $zip;?>"/>
					</div>
				</div>				
				
				<div class="labelFF">
					<label for="phone"  style="text-align:right;padding:2px 10px;cursor:default;">* Phone:</label>
					<div class="labelFF iefix">
						<input type="text" id="phone" name="phone" class="type_textFF"  required
						       value="<?php echo $phone; ?>" />
					</div>
				</div>
				
				<div class="labelFF">
					<label for="email" style="text-align:right;padding:2px 10px;cursor:default;">E-mail address:</label>
					<div class="labelFF iefix">						
						<input type="text" id="email" name="email" class="type_text" 
						       value="<?php echo $email; ?>" />
					</div>
				</div>
				
				<div>
					<label for="hearAboutDWC" style="text-align:right;padding:2px 10px;cursor:default;">How did you hear about us?</label>
					<div class="iefix">
						<input type="text" id="hearAboutDWC" name="hearAboutDWC" 
						       class="type_textFF" size="75" 
							   value="<?php echo $hearAboutDWC; ?>" />
					</div>
				</div>
			</fieldset>
			
			<br />
			<h3 style="color:#C25028">Job Information</h3>
			<hr>
			
			<fieldset>
				<div>
					<label for="jobdesc"  style="text-align:right;padding:2px 10px;cursor:default;">Job description:</label>
					<div class="iefix">
						<input type="text" id="jobdesc" name="jobdesc" 
						       class="type_textFF" size="75"
							   value="<?php echo $jobdesc; ?>" />
					</div>
				</div>
				
				<div>
					<label for="worksite"  style="text-align:right;padding:2px 10px;cursor:default;">Work site:</label>
					<div class="labelFF iefix">
						<textarea id="worksite" name="worksite" class="type_textFF" rows="2" cols="50"><?php echo $worksite;?></textarea>
						<div style="display:inline;vertical-align:top;">&nbsp;&nbsp;
						<input type="checkbox" class="checkbox" name="sameAddr" id="sameAddr" <?php if($sameAddr) echo "checked='checked'";?>> Same as above
						</div>
					</div>
				</div>
				
				<div class="labelFF">
					<label for="startDay" style="text-align:right;padding:2px 10px;cursor:default;">* Start date:</label>
					<div class="labelFF iefix">
						<input type="text" id="startDay" name="startDay" class="type_textFF" placeholder="mm/dd/yyyy" required
						       value="<?php echo $startDay; ?>" /> &nbsp;&nbsp;
						<label for="startTime" class="labelFF">* Start time:</label>
						<input type="text" id="startTime" name="startTime" class="type_textFF" size="8" required
						       value="<?php echo $startTime; ?>" />
					<?php
						echo '<input type="radio" id="startTimeAmPm" name="startTimeAmPm" class="radio" style="vertical-align:middle;" required ';
						    if ($startTimeAmPm == START_TIME_AM) echo " checked='checked'";
						    echo    'value="' . $startTimeAmPmChoices[START_TIME_AM] . '" />';
						    echo    $startTimeAmPmChoices[START_TIME_AM] . '&nbsp;&nbsp;';
						echo '<input type="radio" id="startTimeAmPm" name="startTimeAmPm" class="radio" style="vertical-align:middle;" required ';
						    if ($startTimeAmPm == START_TIME_PM) echo " checked='checked'";
						    echo    'value="' . $startTimeAmPmChoices[START_TIME_PM] . '" />';
						    echo    $startTimeAmPmChoices[START_TIME_PM];
					?>
					</div>
				</div>
				
				<div>
					<label for="workHours"  style="text-align:right;padding:2px 10px;cursor:default;">* Estimate work hours:</label>
					<input type="text" id="workHours" name="workHours" class="type_textFF" required
						value="<?php echo $workHours; ?>" />
				</div>
				
				<div>
					<label for="jobSkills" style="text-align:right;padding:2px 10px;cursor:default;">* Job skills:</label>
					<div class="iefix">		
						<input type="text" id="jobSkills" name="jobSkills" class="type_textFF" size="75" required
						       value="<?php echo $jobSkills; ?>" />
					</div>
				</div>
				
				<div>
					<label for="nbrworkers"  style="text-align:right;padding:2px 10px;cursor:default;">* Number of workers:</label>
					<input type="text" id="nbrworkers" name="nbrworkers" class="type_textFF" required 
						value="<?php echo $nbrworkers; ?>" />
				</div>
				
				<div>
					<label for="payRate" style="text-align:right;padding:2px 10px;cursor:default;">Pay rate:</label>
					<div class="iefix">
						<input type="text" id="payRate" name="payRate" class="type_textFF" 
						       value="<?php echo $payRate; ?>" />
					</div>
				</div>
				
				<div class="labelFF">
					<label for="info" style="text-align:right;padding:2px 10px;cursor:default;">Check all that apply:</label>
					<div class="iefix" style="margin-left:20px">
					<?php
					    $infoIntersect = array_intersect($info, $infoChoices);
						echo '<input type="checkbox" id="info" name="info[]" class="checkbox" ';
						    if (in_array(WILL_PROVIDE_LUNCH, $infoIntersect)) echo " checked='checked'";
						    echo    'value="' . $infoChoices[WILL_PROVIDE_LUNCH] . '" />';
						    echo    "&nbsp;&nbsp;".$infoChoices[WILL_PROVIDE_LUNCH] . "<br />";
						echo '<input type="checkbox" id="info" name="info[]" class="checkbox" ';
						    if (in_array(RESTROOM_AVAILABLE, $infoIntersect)) echo " checked='checked'";
						    echo    'value="' . $infoChoices[RESTROOM_AVAILABLE] . '" />';
						    echo    "&nbsp;&nbsp;".$infoChoices[RESTROOM_AVAILABLE] . "<br />";
						echo '<input type="checkbox" id="info" name="info[]" class="checkbox" ';
						    if (in_array(WILL_BRING_BACK_TO_DWC, $infoIntersect)) echo " checked='checked'";
						    echo    'value="' . $infoChoices[WILL_BRING_BACK_TO_DWC] . '" />';
						    echo    "&nbsp;&nbsp;".$infoChoices[WILL_BRING_BACK_TO_DWC] . "<br />";
						echo '<input type="checkbox" id="info" name="info[]" class="checkbox" ';
						    if (in_array(WILL_PAY_COMMUTE_TIME, $infoIntersect)) echo " checked='checked'";
						    echo    'value="' . $infoChoices[WILL_PAY_COMMUTE_TIME] . '" />';
						    echo    "&nbsp;&nbsp;".$infoChoices[WILL_PAY_COMMUTE_TIME] . "<br />";
						echo '<input type="checkbox" id="info" name="info[]" class="checkbox" ';
						    if (in_array(WILL_PAY_CASH, $infoIntersect)) echo " checked='checked'";
						    echo    'value="' . $infoChoices[WILL_PAY_CASH] . '" />';
						    echo    "&nbsp;&nbsp;".$infoChoices[WILL_PAY_CASH] . "<br />";
					?>
					</div>
					<label for="englishLevel" style="text-align:right;padding:2px 10px;cursor:default;">* English level needed:</label>
					<div class="iefix" style="margin-left:20px;">
					<?php
						echo '<input type="radio" id="englishLevel" name="englishLevel" class="radio" required ';
						    if ($englishLevel == ENGLISH_NONE) echo " checked='checked'";
						    echo    'value="' . $englishLevelChoices[ENGLISH_NONE] . '" />';
						    echo    "&nbsp;&nbsp;".$englishLevelChoices[ENGLISH_NONE] . "<br />";
						echo '<input type="radio" id="englishLevel" name="englishLevel" class="radio" required ';
						    if ($englishLevel == ENGLISH_UNDERSTAND_ONLY) echo " checked='checked'";
						    echo    'value="' . $englishLevelChoices[ENGLISH_UNDERSTAND_ONLY] . '" />';
						    echo    "&nbsp;&nbsp;".$englishLevelChoices[ENGLISH_UNDERSTAND_ONLY] . "<br />";
						echo '<input type="radio" id="englishLevel" name="englishLevel" class="radio" required ';
						    if ($englishLevel == ENGLISH_UNDERSTAND_AND_SPEAK) echo " checked='checked'";
						    echo    'value="' . $englishLevelChoices[ENGLISH_UNDERSTAND_AND_SPEAK] . '" />';
						    echo    "&nbsp;&nbsp;".$englishLevelChoices[ENGLISH_UNDERSTAND_AND_SPEAK] . "<br />";
						echo '<input type="radio" id="englishLevel" name="englishLevel" class="radio" required ';
						    if ($englishLevel == ENGLISH_UNDERSTAND_AND_SPEAK_WELL) echo " checked='checked'";
						    echo    'value="' . $englishLevelChoices[ENGLISH_UNDERSTAND_AND_SPEAK_WELL] . '" />';
						    echo    "&nbsp;&nbsp;".$englishLevelChoices[ENGLISH_UNDERSTAND_AND_SPEAK_WELL];
					?>
					</div>
				</div>
				
				<hr>
				
				<div style="margin:0;padding:0">
					<div class="iefix" style="text-align:center">
						<input type="submit" name="cSubmit" value="Submit" style="padding:6px 20px;color:#C25028"/>
					</div>
				</div>
			</fieldset>
		</form>
		<script type="text/javascript">
			if (document.getElementById) {
				var cReserveId = document.getElementById("cReserve");
				cReserveId.elements['<?php echo $focusField; ?>'].focus();
			}
			else {
				this.form.elements['<?php echo $focusField; ?>'].focus();
			}
		</script>
		
		<br />
		<p>If you are having trouble with this form and 
		    want to send an email directly to the Center, click 
			<a href="mailto:info@dayworkercentermv.org?Subject=Reserve%20Worker%20by%20email">here</a>.
		</p>
	<?php
    }
	 ?>
	
	<br />
    <p>Visit our <a href="services.php">Services</a> page for a list of ways that our workers can help 
	    you with your projects.</p>
</div>


		<div id="overlay"></div>
		<?php 
		if (isset($_POST["cSubmit"])) {
			$header = 'Success';
			$body = "Thank you for completing the reserve worker form.<br /><br />
					An email with your info has been sent to our staff.<br>
					Please call us if you have any question at 650-903-4102.";
			if($errorCount > 0) {
				$header = 'Error';
				$body = $errmsg;
			}
		?>
			<!-- modal dialog content -->
			<div class="ovdialog">
				<h3 style="text-align:center"><?php echo $header;?></h3>
				<hr>
				<p><?php echo $body;?></p>
			</div>
		<?php 
		}
		?>
				
		<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
		<script>
		$(document).ready(function(){
			$("#sameAddr").change(function(){
				var $cbox = $(this);
				if($cbox.prop('checked')) {
					$('#worksite').val($('#address').val() + "\n" + $('#city').val() + ', ' + $('#zip').val());
				}
				else {
					$('#worksite').val('');
				}
			}).change();
		
			<?php if (isset($_POST["cSubmit"])) { ?>

				$("#overlay").show();			
				$('.ovdialog').fadeIn(500);
				$(document).click(function(e){
					$('#overlay').hide();
					$('.ovdialog').fadeOut(500);
					<?php if(! $errorCount) { ?>
					window.location = "/";
					<?php } ?>
				});
				
			<?php } ?>
		});
		</script>

<?php include('../inc/footer.inc.php'); ?>
