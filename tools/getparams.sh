echo '{"DOMEN": "' > res
echo "$1" >> res
echo '"' >> res
echo ', "ACTIONS": ["' >> res
curl $1 | sed -n 's/.*action="\([^"]*\).*/\1/p' | awk '{print "\", \""$0}' >> res
echo '"], "METHOD": ["' >> res
curl $1 | sed -n 's/.*method="\([^"]*\).*/\1/p' | awk '{print "\", \""$0}' >> res
echo '"], "PARAMS": ["' >> res
curl $1 | sed '1,/<form/d' | sed -n 's/.*name="\([^"]*\).*/\1/p' | awk '{print "\", \""$0}' >> res
echo '"]}' >> res
cat res | sed ':a; /$/N; s/\n//; ta' > params.json
rm res
cat params.json
