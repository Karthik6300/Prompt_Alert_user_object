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

let divn=document.createElement("div")
let img = document.createElement("img")
img.setAttribute("src","https://i.gifer.com/g0hD.gif")
divn.append(img)
document.body.append(divn)


