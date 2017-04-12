echo "<h4> WPScan </h4><p>"
wpscan -u $1 --follow-redirection --batch --no-banner | sed 's/$/ <br>/' 
echo "</p><h4> JoomScan </h4><p>"
droopescan scan joomla -u $1 | sed 's/$/ <br>/'
echo "</p>"
echo "</p><h4> DroopeScan </h4><p>"
droopescan scan drupal -u $1 | sed 's/$/ <br>/'
echo "</p>"
echo "</p><h4> Moodle scanner </h4><p>"
droopescan scan moodle -u $1 | sed 's/$/ <br>/'
echo "</p>"
echo "</p><h4> Silverstripe scanner </h4><p>"
droopescan scan silverstripe -u $1 | sed 's/$/ <br>/'
echo "</p>"


