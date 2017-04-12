#echo -e "<br><h4>SITE MAP</h4>" 
#wget --spider --recursive --no-verbose --output-file=crawler.txt $1
#sed -n "s@.\+ URL:\([^ ]\+\) .\+@\1@p" crawler.txt | sed "s@&@\&amp;@" | sed 's/$/ <br>/'
#rm crawler.txt

echo -e "<br><h4>DNS INFO</h4>"
nslookup -q=ns $1 | sed 's/$/ <br>/'
echo -e "<br><h4>ROBOTS.TXT</h4>"
curl $1/robots.txt | sed 's/$/ <br>/'
echo -e "<br><h4>NMAP SCANNING</h4>" 
nmap -T4 -sS -n $1 | sed 's/$/ <br>/'
echo -e "<br><h4>SITEMAP.XML</h4>"
curl $1/sitemap.xml | sed 's/$/ <br>/'
echo -e "<br><h4>WHOIS INFO</h4>"
whois $1 | sed 's/$/ <br>/'

