//add if tests from ex.30(array not empty)print massage we need to find some users)
let userName=["AsadAdmin","ASif","Adil","Ali","Ahmed"];
userName=[]
if (userName.length==0){
    console.log("we need to find some users!")
}else{
userName.forEach(oneUser=>{
    if(oneUser==="AsadAdmin"){
    
    console.log(`Hello ${oneUser},would you like to see my status reports?`);
}else{
    console.log(`Hello ${oneUser},thanks alot for logging in again.`);
};
})}