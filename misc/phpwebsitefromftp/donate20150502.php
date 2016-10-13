<?php $pageTitle = "Donate"; $pgNum = "5.0.0"; $pgType = "page"; include('inc/header.inc.php'); ?>
<!-- Left Hand Content Area -->

<div class="col-left">
  <!-- LH box module -->
  <?php include('inc/location.inc.php'); ?>
</div>
<!-- Right Hand Content Area -->
<div class="col-right">
  <h2>Donate</h2>
  <p>The Day Worker Center of Mountain View is a 501(c)3 non-profit that has been supported by grants from organizations such as the Silicon Valley Community Foundation, Philanthropic Ventures Foundation, the Zellerbach Foundation, the Mountain View Voice, the Catholic Campaign For Human Development (just to name a few), and supporters like you.
     Funding from foundations is wonderful but is not something that an organization can rely on forever.
	 To survive, we must increase the  support we get from individuals like you.
	 Can you help us today with an online donation or check?</p>

<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
    <input type="hidden" name="item_name" value="DWC - General Operations" />
	<input type="hidden" name="cmd" value="_donations" />
	<input type="hidden" name="business" value="craig@dayworkercentermv.org" />
	<input type="hidden" name="no_shipping" value="1" />
	<input type="hidden" name="return" value="http://www.dayworkercentermv.org/" />
	<input type="hidden" name="cancel_return" value="http://www.dayworkercentermv.org/" />
	<input type="hidden" name="currency_code" value="USD" />
	<input type="hidden" name="tax" value="0" />
	<input type="hidden" name="lc" value="US" />
	<input type="hidden" name="bn" value="PP-DonationsBF" />
	<img src="https://www.paypal.com/en_US/i/scr/pixel.gif" alt="Donate to DWC of Mountain View" border="0" width="1" height="1" />
    <input type="image" src="https://www.paypal.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit2" alt="Donate to the DWC General Operations Fund" />
</form>

<br />
<p>
    Prefer to send a check? If so, please mail it to:
    Day Worker Center of Mountain View,
    113 Escuela Ave., Mountain View, CA 94040  </p>
	
	<hr>
	<div style="margin:0 auto;font-size:1em;padding:15px 40px;text-align:center;font-family:helvetica,arial,sans-serif">
	The Day Worker Center of Mountain View is a 501(c)3 non-profit<br>(Federal Tax Identification Number: 20-2874108).
	</div>

</div>


<?php include('inc/footer.inc.php'); ?>
