function countWords(inputWords) {
      return inputWords.reduce(function(countArray, word){
        if (word in countArray){
            countArray[word]= ++countArray[word] ;
        }
        else{
            countArray[word]=1;
        }
    return countArray;
    }, {});

  }
  module.exports = countWords