/*
{ length : length of password, characters: characters in password}
*/
let Random = require('./random');

class Password {
  constructor(config){
    this._password = null;
    if(config){
      console.log("ndjkanjkdnakj")
      validateConfig(config);
      this.config = config
      return;
    }
    this.config = this._getGetDefaultConfig();
  }

  /** @private */
  _validateConfig(config) {
    Object.keys(config).forEach(key => {
      if (typeof config[key] !== 'number') {
        throw new Error('Invalid config object');
      }
    });
    const confLen = 0;
    Object.keys(config).forEach(key => {
      if (key != 'length' && config[key]) {
        confLen += config[key];
      }
    });
    if (confLen > config.length) {
      throw new Error('Invalid password length');
    }
  }

  /** @private */
  _getGetDefaultConfig(){
    /** @private */
    const _defaultConfg = {
      length: 10,
      UChar: 3,
      LChar: 3,
      SChar: 3,
      Number: 4
    }
    return _defaultConfg;
  }
  /**@public
   * @description this generates a password based on the config supplied
  */
  generate(){

    Random = new Random();

    if(this.config.UChar){
      this._password += Random.genUChar(this.config.UChar);
    }
    if(this.config.LChar){
      this._password += Random.genLChar(this.config.LChar);
    }
    if(this.config.SChar){
      this._password += Random.genSChar(this.config.SChar);
    }
    if(this.config.Number){
      this._password += Random.genNumbers(this.config.Number);
    }
    if(this.config.length !== this._password.length){
      const remaningChar = this.config.length - this._password.length;
      this._password += Random.genRandom(remaningChar);
    }
    return Random.mashString(this._password);  
  }
}

module.exports = Password;