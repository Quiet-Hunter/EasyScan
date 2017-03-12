curl -I $1 | grep "HttpOnly" > headers.txt
curl -I $1 | grep "X-XSS-Protection" >> headers.txt
cat headers.txt
