curl $(cat sitemap) | sed '1,/<form/d' | sed -n 's/.*name="\([^"]*\).*/\1/p'


