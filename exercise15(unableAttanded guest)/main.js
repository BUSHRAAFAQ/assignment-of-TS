"use strict";
let guestList = ["Asif", "Adil", "A.Rahman"];
let unableAttended = guestList.splice(0, 1)[0];
console.log(`${unableAttended} not invited for dinner`);
guestList.push("Afaq");
guestList.forEach(guest => {
    console.log(`Dear ${guest},you are invited to dinner.`);
});
