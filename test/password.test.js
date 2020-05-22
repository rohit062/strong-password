let password = require('../lib/password');

const iChars = "~`!#$%^&*+=-[]\\';,/{}|\":<>?";
const iNumber = "~`!#$%^&*+=-[]\\';,/{}|\":<>?";
const upperCaseReg = new RegExp(/[A-B]/g);
const lowerCaseReg = new RegExp(/[A-B]/g);

describe('Testing Password Generator Class', () => {

  /**
   * Test cases with config
   */
  describe('Testing Password Generator Class With custom config', () => {
    let __pwdConfig = {
      length: 11,
      UChar: 2,
      LChar: 3,
      SChar: 4,
      Number: 2
    };
    let __pwdObject = new password(__pwdConfig);
    let sPwd = __pwdObject.generate();
    test('Check Property Exists', () => {
      console.log("djkandnak",sPwd,sPwd.split('').filter(c => { console.log(c,upperCaseReg.test(c)); console.log(c === upperCaseReg.test(c))}).length);
      // expect(sPwd.length).toBe(__pwdConfig.length); // check the length of the pwd
      // expect(sPwd.split('').filter(c => c === upperCaseReg.test(c)).length).tbBe(__pwdConfig.UChar); // check no of upper case character
      // expect(sPwd.split('').filter(c => c === lowerCaseReg.test(c)).length).tbBe(__pwdConfig.LChar); // check no of lower case character 
      // expect(sPwd.split('').filter(c => iChars.indexOf(c) != -1).length).tbBe(__pwdConfig.SChar); // check no of Special character 
      // expect(sPwd.split('').filter(c => iNumber.indexOf(c) != -1).length).tbBe(__pwdConfig.Number); // check no of number

    })
    test('Check Property Exists', () => {

    })
  });

  /**
   * Wrong pwd config
   */
  // describe('Testing Password Generator Class Without Wrong config', () => {
  //   let __pwdConfig = {
  //     length: 13,
  //     UChar: 2,
  //     LChar: 3,
  //     SChar: 4,
  //     Number: 2
  //   };
  //   test('Creating password object with wrong config', () => {
  //     expect(() => { new password(__pwdConfig) }).toThrowError(Error);
  //   });
  // });

  /**
   * Test case without config -> using the default config
   */
  // describe('Testing Password Generator Class Without config', () => {

  // });

});