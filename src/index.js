module.exports = function getZerosCount(number, base) {
  // your implementation
  /**/
  var zerosCount = 0;
  
  for (var i = 0; i < base; i++) {
    numbe = Math.floor(number/Math.pow(num, i));
    zerosCount += numbe;
  }
  
  return zerosCount;

}