class Random {
  constructor(){
    this._characterSet = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&*()123456789`;
    this._ualpha = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    this._lalpha = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
    this._specialChar = `!@#$%&*()`;
    this._numbers = `123456789`;
  }

  genUChar(length){
    return this._generateString(this._ualpha, length);
  }

  genLChar(length){
    return this._generateString(this._lalpha, length);
  }

  genSChar(length){
    return this._generateString(this._specialChar, length);
  }

  genNumbers(length){
    return this._generateString(this._numbers, length);
  }

  getCustom(charSet, length){
    return this._generateString(charSet,length);
  }
  
  genRandom(length){
    return this._generateString(this._characterSet, length);
  }
  _generateString(charSet, length){
    let str = '';
    for(let iter = 0; iter < length; iter++){
      const rand = Math.floor( Math.random() * charSet.length );
      str += charSet[rand];
    }
    return str;
  }

  mashString(string){
    const stringArr = string.split('');
    for(let iter = 0; iter < string.length/2; iter++){
      const randI = Math.floor( Math.random() * string.length );
      const randJ = Math.floor( Math.random() * string.length );
      [stringArr[randI],stringArr[randJ]] = [stringArr[randJ],stringArr[randI]];
    }
    return stringArr.join('');
  }

}

module.exports = Random;
