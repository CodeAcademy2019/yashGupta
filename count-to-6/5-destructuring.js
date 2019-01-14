// let userArray = process.argv.slice(2);

//     var user={};
//     [,user.username, user.email]= userArray;
//     console.log(user);

function destructuring(userArray){
    var user={};
    [,user.username, user.email]= userArray;
    return user

}
module.exports=destructuring;
