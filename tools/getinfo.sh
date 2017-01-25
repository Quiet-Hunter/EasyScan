wget --spider --recursive --no-verbose --output-file=crawler.txt $1
printf "--------------SITE MAP-------------\n" 
sed -n "s@.\+ URL:\([^ ]\+\) .\+@\1@p" crawler.txt | sed "s@&@\&amp;@" 
printf "\n\n--------------INFORMATION----------\n" 
nslookup -q=ns $1 
printf "\n\n--------WHOIS INFO-----------\n" 
whois $1 
printf "\n\n--------ROBOTS.TXT-----------\n"
curl $1/robots.txt 
printf "\n\n--------NMAP SCANNING--------\n" 
nmap -T4 -sS -n $1 

