./tools/dirsearch/dirsearch.py -u $1 -e php,txt,html -w /usr/share/dirb/wordlists/common.txt -x 503,403 --random-agent > ./dirs
cat ./dirs
