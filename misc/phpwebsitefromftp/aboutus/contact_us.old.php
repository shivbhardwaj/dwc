<?php $pageTitle = "Contact Us"; $pgNum = "1.6.0"; $pgType = "page"; include('../inc/header.inc.php'); ?>
	
			<!-- Left Hand Content Area -->
			<div class="col-left">
				<!-- LH box module -->
				<?php include('../inc/location.inc.php'); ?>
			</div>
			
			<!-- Right Hand Content Area -->
			<div class="col-right">
			<h2>Contact Us</h2>
			
			<h4>Street Address:</h4>
			<p>113 Escuela Ave.<br />
				Mountain View, CA 94040<br />
				650-903-4102<br />
				650-903-4106
			</p>

			<p>Please fill out this form to contact us.<br />
			   (* indicate required fields)</p>		
				
			<?php
			//error_reporting(E_ALL | E_STRICT);
            //define("DEBUG_CU", FALSE);
			
            include("../php_includes/util.php");
			
			$displayForm = TRUE;
			$firstField = "firstName";
			$focusField = "";
			
			$firstName = "";
			$lastName = "";
			$email = "";
			$phone = "";
            $message = "";
            
			if (isset($_POST["cSubmit"])) {
				// edit form
				$errorCount = 0;
				define("FIELD_REQUIRED_YES", TRUE);
				define("FIELD_REQUIRED_NO",  FALSE);
				if (DEBUG_CU) echo "<p>before firstName</p>\n";
				$firstName = validateField($_POST['firstName'], "First Name", "firstName", 
                                           FIELD_REQUIRED_YES);
				if (DEBUG_CU) echo "<p>before lastName</p>\n";
				$lastName  = validateField($_POST['lastName'], "Last Name", "lastName", 
                                           FIELD_REQUIRED_YES);
				if (DEBUG_CU) echo "<p>before email</p>\n";
				$email = validateField($_POST['email'], "E-mail Address", "email", FIELD_REQUIRED_NO);
                if ((string)$email !== "")
                    validateEmail($email, "E-mail Address", "email");
				if (DEBUG_CU) echo "<p>before phone</p>\n";
				$phone = validateField($_POST['phone'], "Phone", "phone", FIELD_REQUIRED_NO);
                //if ((string)$phone !== "")
                //    validatePhone($phone, "Phone", "phone");
				if ((string)$phone === "" && (string)$email === "") {
					echo "One of E-mail Address or Phone is required.<br />\n";
					++$errorCount;
				}
				if (DEBUG_CU) echo "<p>before message</p>\n";
				$message  = validateField($_POST['message'], "Your message", "message", 
                                          FIELD_REQUIRED_YES);
				
				if ($errorCount > 0) {
				    $displayForm = TRUE;
					echo "<br />\n";
				}
				else {
					$to_address = "Ana Cruz-Barajas <ana@dayworkercentermv.org>" . ", "
					    . "Maria Marroquin <maria@dayworkercentermv.org>";
					
					$from_name = $firstName . ' ' . $lastName;
					
					$subject = "Contact Us request from " . $from_name . " via DWC website";
					
					$cDetails = "Contact Us request from Day Worker Center website: "
					    . PHP_EOL 
						. PHP_EOL . "First Name: " . $firstName
						. PHP_EOL . "Last Name: " . $lastName 
						. PHP_EOL
						. PHP_EOL . "Email: " . $email 
						. PHP_EOL . "Phone: " . $phone 
						. PHP_EOL 
						. PHP_EOL . "Message: " . $message;
					
					$headers = "Reply-To: " . $from_name . " <" . $email . '>' . PHP_EOL;
					
					$result = mail($to_address, $subject, $cDetails, $headers);
					if ($result) {
                    //if ($firstName >= "M") {
						print '<br />';
						print '<table width="360" cellpadding=3 cellspacing=0 border=0>';
						print '  <tr>
						           <td></td>
								   <td class="pageCopySmall_noMargin">
								     <div align="center">
								       Thank you for your inquiry.<br /><br />
									   An email with your info has been sent to our staff. 
									   We will contact you shortly.</div></td>
						           <td></td>
							     </tr>
							   </table>';
					}
					else
					    echo "There was a problem sending your email.<br />\n";
					
					// clear $_POST so that the form is not sticky
					$_POST = array();
					
					$displayForm = FALSE;
				}
			}
			
			if ($displayForm) {
                //include("../../php_includes/autoglobalsDump.php");
				if ($focusField === "")
				    $focusField = $firstField;
			?>
				
				<form id="cInfo" name="cInfo" action="<?php echo $_SERVER['SCRIPT_NAME']; ?>"
				      method="post" class="form">
					<fieldset>
						<div>
							<label for="firstName">* First Name:</label>
							<div class="iefix">
								<input id="firstName" name="firstName" type="text" class="type_text" 
								       value="<?php echo $firstName; ?>" />
							</div>
						</div>
						<div>
							<label for="lastName">* Last Name:</label>
							<div class="iefix">
								<input id="lastName" name="lastName" type="text" class="type_text" 
								       value="<?php echo $lastName; ?>" />
							</div>
						</div>
						<div>
							<label for="email">E-mail Address:</label>
							<div class="iefix">
								<input id="email" name="email" type="text" class="type_text" 
								       value="<?php echo $email; ?>" />
							</div>
						</div>
						<div>
							<label for="phone">Phone:</label>
							<div class="iefix">
								<input id="phone" name="phone" type="text" class="type_text" 
								       value="<?php echo $phone; ?>" />
							</div>
						</div>
						(* One of E-mail Address or Phone is required)<br /><br />
						<div>
							<label for="message">* Your message:</label>
							<div class="iefix">
								<textarea id="message" name="message" 
								          class="type_text"><?php echo $message; ?></textarea>
							</div>
						</div>
						<div>
							<div class="iefix">
								<input type="submit" name="cSubmit" value="Submit" />
							</div>
						</div>
					</fieldset>
				</form>
				<script type="text/javascript">
					if (document.getElementById) {
						var cInfoId = document.getElementById("cInfo");
						cInfoId.elements['<?php echo $focusField; ?>'].focus();
					}
					else {
						this.form.elements['<?php echo $focusField; ?>'].focus();
					}
				</script>
			<?php
			}
			 ?>
			
			</div>


<?php include('../inc/footer.inc.php'); ?>
