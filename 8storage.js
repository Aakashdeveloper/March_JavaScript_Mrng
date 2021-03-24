>localStorage
    # persitent Storage
    # we have to manully remove
    # save wrt to browser

localStorage.setItem('__location__','delhi')

localStorage.getItem('__location__')
"delhi"
localStorage.removeItem('__location__')

localStorage.getItem('__location__')
null

> sessionStorage
    # Non Persistent Storage
    # remove as soom as we close tab / remove manully
    # save wrt to tab

sessionStorage.setItem('__location__','delhi')
sessionStorage.getItem('__location__')
"delhi"
sessionStorage.removeItem('__location__')
sessionStorage.getItem('__location__')
null


> cookies
    # Save wrt to website
    # expire in time 

document.cookie
"_ga=GA1.2.1880173027.1602255983; city=London; origin=delhi; _gid=GA1.2.424099808.1616507723; _gat_gtag_UA_131256843_1=1"
document.cookie="mydata=test; expires=Thru, 25 Mar 2021 01:00:00 UTC"
    
document.cookie
"_ga=GA1.2.1880173027.1602255983; city=London; origin=delhi; _gid=GA1.2.424099808.1616507723; mydata=test"