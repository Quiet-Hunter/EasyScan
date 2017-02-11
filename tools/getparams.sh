echo "ACTION: " > res
curl $1 | sed -n 's/.*action="\([^"]*\).*/\1/p' >> res
echo "METHOD: " >> res
curl $1 | sed -n 's/.*method="\([^"]*\).*/\1/p' >> res
echo "PARAMS: " >> res
curl $1 | sed '1,/<form/d' | sed -n 's/.*name="\([^"]*\).*/\1/p' >> res
cat res
