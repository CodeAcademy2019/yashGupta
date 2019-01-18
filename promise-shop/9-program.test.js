let parsedPromise = require('./9-program.js');

describe ('promise', ()=>{
    it('should reject the promise and return an error', ()=>{
        return (expect(parsedPromise(343)).rejects.toEqual(`[SyntaxError: Unexpected token u in JSON at position 0]`))
    });
  it ('should resolve the promise and return the json object', ()=>{
    return (expect(parsedPromise({name: 'Yash'})).resolves.toEqual()
  );
  })
});