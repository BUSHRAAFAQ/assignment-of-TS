let placeToVisit:string[]=["Makka" ,"America","London","Paris","Itley"];
//print the orignal order

console.log("orignal order:" , placeToVisit);

//print your array in alphabetical order

console.log("Alpahbetical order:",placeToVisit
);

//still orignal order by print

console.log(" still orignal order:" , placeToVisit);

//reverse print Alpabetical order

console.log("Reverse Alpahbetical order:",placeToVisit);

//aray is still in its original order

console.log(" orignal order after reverse sort:" , placeToVisit);


//Reverse the order of list

placeToVisit.reverse();
console.log("Reverse order",placeToVisit);

//back to orignal order 

placeToVisit.reverse();
console.log("back to orginal list",placeToVisit);

//sort array by stored in Alphabetical order

console.log("stored in Alpahbetical order:",placeToVisit.slice().sort());

//sort to change array so,its stored reverse in alpabetical order

console.log("stored in Reverse Alpahbetical order:",placeToVisit.slice().sort());

