// var foot = {
//     kick: function () {
//         this.yelp = "Ouch!";
//         setImmediate(()=>(this.yelp));
//     }
// };
// foot.kick();

var foot={
    kick: function () {
                this.yelp = "Ouch!";
                setImmediate(()=>{console.log(this.yelp)
                    return this.yelp
                });
            }
}
module.exports=foot;