"use strict"
//sample data
let shippingInfo = {
    name: "Tasneema Nolen",
    address: "3905 Buffington Place",
    city: "Union City", state: "Georgia", zip: "30291",
};

function printContact(myInfo) {
    console.log (myInfo.name)
    console.log (myInfo.address)
    console.log (myInfo.city + ", "+ myInfo.state + " " + myInfo.zip)
};

printContact(shippingInfo);