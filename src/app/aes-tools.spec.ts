import { AesTools } from './aes-tools';

describe('AesTools', () => {
  it('should encrypt', () => {
    var aesToolsObj = new AesTools('test');
    var result = aesToolsObj.aes_encrypt('<p>hello</p>');
    console.log(result)
    expect(result).toEqual('32TUnzigcWsPzFC5mNznjw==');
  });
  
  it('should decrypt', () => {
    var aesToolsObj = new AesTools('test');
    var result = aesToolsObj.aes_decrypt('32TUnzigcWsPzFC5mNznjw==');
    console.log(result)
    expect(result).toEqual('<p>hello</p>');
  });
});