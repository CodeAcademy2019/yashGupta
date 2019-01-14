console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

String.prototype.allReplace = function(obj) {
    var retStr = this;
    for (var x in obj) {
        retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
    }
    return retStr;
};
var htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
  };
  var pattern = /[&<>"']/g;
var html1= process.argv[3];
  function html(html1) {
    // what goes here?
    return (html1.allReplace(htmlEscapes));
    // don't forget to return the escaped string!
}