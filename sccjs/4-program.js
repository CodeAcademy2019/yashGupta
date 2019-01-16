function foo() {
    quux=2;
    //console.log(quux)
   var bar;
   function zip(){
       var quux=3; 
       bar=true;
       //console.log(quux);
   }
   return zip;
}