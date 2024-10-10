//specail massage for Admin oneUser......forEach()to use for others 
let userName=["AsadAdmin","ASif","Adil","Ali","Ahmed"];
userName.forEach(oneUser=>{
    if(oneUser==="AsadAdmin"){
    
    console.log(`Hello ${oneUser},would you like to see my status reports?`);
}else{
    console.log(`Hello ${oneUser},thanks alot for logging in again.`);
};
});
    
