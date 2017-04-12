gobuster -e -u $1 -t 50 -w ./tools/wordlists/small.txt -r | sed 's/$/ <br>/'
