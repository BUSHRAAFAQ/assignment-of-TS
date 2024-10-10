let guestList:string[]= ["Asif","Afaq","Adil", "Khan","Arbaz"];
//print messag
    
    
// remove guests from the list
 while(guestList.length>2){
        let removedGuest:string |undefined = guestList.pop();
     if(removedGuest !== undefined){
         console.log(`Sorry ${removedGuest}, we can't invite you.`);
    }
}
// //forEach method
 guestList.forEach(guest=>{
     console.log(`Dear ${guest} you are still invited for dinner`);
})
// // splice method
 guestList.splice(0,guestList.length);
 //print updated empty list
console.log("updated list of guest:",guestList);