function getShortMessages(messages) {
    var filtered= messages.filter(function charLength(message){
        if (message.message.length<50){
            return true   
        }
    }).map(function(a){
        return a.message
    })
    return filtered
}

  module.exports = getShortMessages