// let  Username=prompt("Enter User Name")
// let Productname=prompt("Product Name") 
// let Price=prompt("Price of the Product")
// let Day=prompt("Day of purchasing")
// let Ocassion=prompt("Ocassion of Purchasing")
// let Platform=prompt("Purchasing platform")


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
