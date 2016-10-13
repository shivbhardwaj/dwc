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
  <table width="100%" border="0" cellspacing="0" cellpadding="0" summary="Donate">
    <tr>
      <td><form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
        <table width="100%" border="0" cellspacing="0" cellpadding="5" summary="Choose how your donation will be used">
          <tr>
            <td><strong>Choose how your donation will be used</strong></td>
            <td>
              <p>
                <input name="item_name" type="radio" value="DWC - General Operations" checked="checked" />
                <strong>General Operations</strong> -
				Your donation goes to help fund ongoing operations of the DWC.
              </p>
              <p>
                <input name="item_name" type="radio" value="DWC - Capital Campaign" />
                <strong>Capital Campaign</strong> -
				Your donation goes toward the essential renovations required on our new Escuela Ave facility.
				The campaign allowed us to buy the property but now we need to raise over $400,000 before January 2010 to complete the necessary renovations and move in to the Center's future home.</p>
            </td>
          </tr>
          <tr>
            <td>
              <input type="hidden" name="cmd" value="_donations" />
              <input type="hidden" name="business" value="craig@dayworkercentermv.org" />
              <input type="hidden" name="no_shipping" value="1" />
              <input type="hidden" name="return" value="http://www.dayworkercentermv.org/" />
              <input type="hidden" name="cancel_return" value="http://www.dayworkercentermv.org/" />
              <input type="hidden" name="currency_code" value="USD" />
              <input type="hidden" name="tax" value="0" />
              <input type="hidden" name="lc" value="US" />
              <input type="hidden" name="bn" value="PP-DonationsBF" />
              <img alt="Donate to DWC Mountain View" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" /> </td>
            <td><input type="image" src="https://www.paypal.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit2" alt="Donate to the DWC Facility Campaign Fund" /></td>
          </tr>
        </table>
        </form></td>
      <td>&nbsp;</td>
    </tr>
  </table>
  <p><br />
    Prefer to send a check: If so, please mail it to:
    Day Worker Center of Mountain View,
    113 Escuela Ave., Mountain View, CA 94040  </p>
</div>
<?php include('inc/footer.inc.php'); ?>
