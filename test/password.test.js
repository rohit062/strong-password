let password = require('../lib/password');

const iChars = new RegExp(/[^A-Za-z0-9]/);
const iNumber =  new RegExp(/\d/);
const upperCaseReg = new RegExp(/[A-Z]/);
const lowerCaseReg = new RegExp(/[a-z]/);

describe('Testing Password Generator Class', () => {

  /**
   * Test cases with config
   */
  describe('Testing Password Generator Class With custom config', () => {

    test('Validate  Password 1', () => {
      let __pwdConfig = {
        length: 11,
        UChar: 2,
        LChar: 3,
        SChar: 4,
        Number: 2
      };
      let __pwdObject = new password(__pwdConfig);
      let sPwd = __pwdObject.generate();
      expect(sPwd.length).toBe(__pwdConfig.length); // check the length of the pwd
      expect(sPwd.split('').filter(c => upperCaseReg.test(c)).length).toBe(__pwdConfig.UChar); // check no of upper case character
      expect(sPwd.split('').filter(c => lowerCaseReg.test(c)).length).toBe(__pwdConfig.LChar); // check no of lower case character 
      expect(sPwd.split('').filter(c => iChars.test(c)).length).toBe(__pwdConfig.SChar); // check no of Special character 
      expect(sPwd.split('').filter(c => iNumber.test(c)).length).toBe(__pwdConfig.Number); // check no of number
    })

    test('Validate  Password 2', () => {
      let __pwdConfig = {
        length: 11,
        UChar: 1,
        LChar: 3,
        Number: 2
      };
      let __pwdObject = new password(__pwdConfig);
      let sPwd = __pwdObject.generate();
      expect(sPwd.length).toBe(__pwdConfig.length); // check the length of the pwd
      expect(sPwd.split('').filter(c => upperCaseReg.test(c)).length).toBeGreaterThanOrEqual(__pwdConfig.UChar); // check no of upper case character
      expect(sPwd.split('').filter(c => lowerCaseReg.test(c)).length).toBeGreaterThanOrEqual(__pwdConfig.LChar); // check no of lower case character 
      expect(sPwd.split('').filter(c => iNumber.test(c)).length).toBeGreaterThanOrEqual(__pwdConfig.Number); // check no of number
    })

    test('Validate  Password 3 (Password with only number)', () => {
      let __pwdConfig = {
        length: 5,
        Number: 5
      };
      let __pwdObject = new password(__pwdConfig);
      let sPwd = __pwdObject.generate();
      expect(sPwd.length).toBe(__pwdConfig.length); // check the length of the pwd
      expect(sPwd.split('').filter(c => iNumber.test(c)).length).toBeGreaterThanOrEqual(__pwdConfig.Number); // check no of number
    })

    test('Validate  Password 3 (Password with only number)', () => {
      let __pwdConfig = {
        length: 6,
        UChar: 3,
        LChar: 3,
      };
      let __pwdObject = new password(__pwdConfig);
      let sPwd = __pwdObject.generate();
      expect(sPwd.length).toBe(__pwdConfig.length); // check the length of the pwd
      expect(sPwd.split('').filter(c => upperCaseReg.test(c)).length).toBeGreaterThanOrEqual(__pwdConfig.UChar); // check no of upper case character
      expect(sPwd.split('').filter(c => lowerCaseReg.test(c)).length).toBeGreaterThanOrEqual(__pwdConfig.LChar); // check no of lower case character 
      
    })

  });

  /**
   * Wrong pwd config
   */
  describe('Testing Password Generator Class Without Wrong config', () => {
    let __pwdConfig = {
      length: 13,
      UChar: 2,
      LChar: 3,
      SChar: 9,
      Number: 2
    };
    test('Creating password object with wrong config', () => {
      expect(() => { new password(__pwdConfig) }).toThrowError(Error);
    });
  });

  /**
   * Test case without config -> using the default config
   */
  // describe('Testing Password Generator Class Without config', () => {

  // });

});