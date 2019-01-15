let  html= require('./10-tagged-template-strings');

test('should return the escaped html string', () => {
    expect(html([`<b>`,` says</b>:`], 'domenic', `<dl> is a fun tag`)).toEqual(`<b>domenic says</b>:&lt;dl&gt; is a fun tag"`);
});