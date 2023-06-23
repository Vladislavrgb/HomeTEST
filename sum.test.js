import {repeatWord} from './sum';

describe('test for repeatWord fuction', () => {
  
  it ('test text', ()=>{
    expect(repeatWord("hello",3)).toBe(`hello, hello, hello`);
    expect(repeatWord(3,3)).toBe(`3, 3, 3`);
    expect(repeatWord("Hi",0)).toBe(`Error, count < 1`);
  })
})
  
  
