function sum (a, b, c) {
  d = b ** 2 - 4 * a * c
  if (d > 0){
  d = d + 2;
  }else if (d = 0) {
    d = d + 1;
  }else {
    d = d + 0
  }
  console.log(d);
}
sum (4,7,5)