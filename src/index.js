module.exports = function getZerosCount(number, base) {
  // your implementation
  
  var zerosCount = 0;
  var first = 2;

  while (first <= base) {
    if (base%first == 0) {
      mem = base;
      base = Math.floor(base/first);
    } else {
      first++;
    }
  }

  for (let i = 1; i < 40; i++) {
    num = Math.pow(mem, i);
    if (number <= num) {
      del = i;
    }
  }
  
  for (let i = 1; i <= del; i++) {
    //if (i%mem == 0) {
      pow = Math.pow(mem, i);
      rem = Math.floor(number/pow);
      zerosCount += rem;
    //}
  }

  return zerosCount;

}