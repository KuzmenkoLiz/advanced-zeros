module.exports = function getZerosCount(number, base) {
  // your implementation
  
  var zerosCount = 0;
  /*var first = 2;

  while (first <= base && base <= 256) {
    if (base%first == 0) {
      base = Math.floor(base/first);
    } else {
      first++;
    }
  }*/
  
  while(number){
    for (var i = 1; i <= base/2; i++) {
      number = Math.floor(number/Math.pow(5, i));
      zerosCount += number;
    }
  }
  return zerosCount;

}