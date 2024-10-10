//make a list for five users or more newUsers name by loop functions
let current_users=["Asad","asif","Adil","fatima","Nighat","bushra"];
let new_users=["Asma","Asif","Adil","Ali","Fatima","Bushra","Arifa","Muskan"];
 new_users.forEach(new_one_users=>{
    let our_condition=current_users.some
    (current_one_users=>current_one_users.toLowerCase()===new_one_users.toLowerCase())
if(our_condition){
    console.log(`sorry ${new_one_users} is already taken!`)

 }else{
    console.log(`this userName ${new_one_users} is available`);
 }
})