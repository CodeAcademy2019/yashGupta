let userArray = process.argv.slice(2);

    var user={};
    [,user.username, user.email]= userArray;
    console.log(user);