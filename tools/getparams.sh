curl $1 | sed '1,/<form/d' | sed -n 's/.*name="\([^"]*\).*/\1/p'


