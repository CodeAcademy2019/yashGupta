module.exports = function average(...args) {
    var result=0;
    args.forEach(function(value){
        result+=value;
    })
    var fResult=result/args.length;
    return fResult;
};