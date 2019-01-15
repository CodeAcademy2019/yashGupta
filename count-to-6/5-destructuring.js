// let userArray = process.argv.slice(2);

//     var user={};
//     [,user.username, user.email]= userArray;
//     console.log(user);
var destructuring = (userArray)=>{
    // var user={};
    a=10;
    [,username, email]= userArray;
    var user={}
    user.username=username;
    user.email=email;
    return user

}
//console.log(a);
//console.log(username);
destructuring([1, "jdoe", "jdoe@example.com", "John", "Doe"]);
module.exports=destructuring;
