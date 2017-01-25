echo -e "--------------SITE MAP-------------\n" 
wget --spider --recursive --no-verbose --output-file=crawler.txt $1
sed -n "s@.\+ URL:\([^ ]\+\) .\+@\1@p" crawler.txt | sed "s@&@\&amp;@" 
echo -e "\n\n--------------INFORMATION----------\n" 
nslookup -q=ns $1 
echo -e "\n\n--------WHOIS INFO-----------\n" 
whois $1 
echo -e "\n\n--------ROBOTS.TXT-----------\n"
curl $1/robots.txt 
echo -e "\n\n--------NMAP SCANNING--------\n" 
nmap -T4 -sS -n $1 

