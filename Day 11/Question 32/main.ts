//-------------------------QUESTION 32----------------------------------

//Creating a Array of current user 
let current_users: string[] = ["kinza", "Hamza", "Areeba", "ali", "Usman"];

//Creating a Array of new user

let new_users: string[] = ["Zara", "Osama", "Kiran", "Ali", "hammad"];

// loop through new_users to Check For UserName Avaibility

new_users.forEach(new_one_user =>{
    let our_condition = current_users.some(current_one_users => current_one_users.toLowerCase() === new_one_user.toLowerCase())
    // Print Different Messages Using If_Else statments  
    if(our_condition){
        console.log(`sorry ${new_one_user} is already taken!`)
        }else{
            console.log(`This Username ${new_one_user} is available`)
        }

})