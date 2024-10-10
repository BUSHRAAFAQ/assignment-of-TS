"use strict";
//else and if determination
//created a veriables by the help of compersion operators
let age = 25;
//less than 2 years (person is a baby)
//use if conditions
if (age < 2) {
    console.log("you are a baby boy");
}
//person 2 years old....but less than 4 (person is a toddler)
else if (age > 2 && age < 4) {
    console.log("you are a toddler");
}
//person ateast 4 years old ....but less than 13 (person is a kid)
else if (age >= 4 && age < 13) {
    console.log("you are a kid");
}
//person ateast 20 years old ....but less than  65 (person is an adullt)
else if (age >= 20 && age < 65) {
    console.log("you are an adult");
}
//person age is 65 0r older ....(person will be elders)
else if (age == 65) {
    console.log("you are an elder");
}
