wget --spider --recursive --no-verbose --output-file=crawler.txt $1
echo "--------------SITE MAP-------------" >info
sed -n "s@.\+ URL:\([^ ]\+\) .\+@\1@p" crawler.txt | sed "s@&@\&amp;@" >> info
echo "--------------INFORMATION----------" >> info
nslookup -q=ns $1 >> info
echo "--------WHOIS INFO-----------" >> info
whois $1 >> info
echo "--------ROBOTS.TXT-----------" >> info
curl $1/robots.txt >> info
echo "--------NMAP SCANNING--------" >> info
nmap -T4 -sS -n $1 >> info

