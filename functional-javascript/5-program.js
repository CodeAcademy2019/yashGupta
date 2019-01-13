function checkUsersValid(goodUsers) {   
    return function allUsersValid(submittedUsers) {
        return goodUsers.every(function(goodUser){
            return submittedUsers.some(function(submittedUser){
                return submittedUser.id===goodUser.id
            })
        } )
    };
  }
  module.exports = checkUsersValid