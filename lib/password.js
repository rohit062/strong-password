let Random = require('./random');

class Password {
  constructor(config){
    this._password = '';
    if(config){
      this._validateConfig(config);
      this.config = config
      return;
    }
    this.config = this._getDefaultConfig();
  }

  /** @private */
  _validateConfig(config) {

    if(!config.length){
      throw new Error('specify length of password');
    }

    Object.keys(config).forEach(key => {
      if (typeof config[key] !== 'number') {
        throw new Error('Invalid config object');
      }
    });
    let confLen = 0;
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
  _getDefaultConfig(){
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

    let random = new Random();
    
    if(this.config.UChar){
      this._password += random.genUChar(this.config.UChar);
    }
    if(this.config.LChar){
      this._password += random.genLChar(this.config.LChar);
    }
    if(this.config.SChar){
      this._password += random.genSChar(this.config.SChar);
    }
    if(this.config.Number){
      this._password += random.genNumbers(this.config.Number);
    }
    if(this.config.length !== this._password.length){
      const remaningChar = this.config.length - this._password.length;
      this._password += random.genRandom(remaningChar);
    }
    return random.mashString(this._password);  
  }
}

module.exports = Password;