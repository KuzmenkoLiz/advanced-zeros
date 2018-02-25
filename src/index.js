module.exports = function getZerosCount(number, base) {
  // your implementation
  /**/
  var zerosCount = 0;
  
  while(number){
    for (var i = 0; i < base; i++) {
      number = Math.floor(number/Math.pow(5, i));
      zerosCount += number;
    }
  }
  return zerosCount;

}