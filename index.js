let obj = {
    Username: prompt("Enter User Name"),
    Productname: prompt("Product_name"),
    Price: prompt("Price of Purchasing "),
    Day: prompt("Day of Purchasing"),
    Ocassion:prompt("Occassion of purchasing"),
    Platform: prompt("Purchasing platform"),
};

alert(
    `${obj.Username} has purchased a ${obj.Productname} which costs ${obj.Price} on ${obj.Day} on ocassion of ${obj.Ocassion} in ${obj.Platform}`
);

let img = document.createElement("img")
img.setAttribute("src","https://i.gifer.com/g0hD.gif")
let div=document.createElement("div")
document.div.append(img)
document.body.append(div)


