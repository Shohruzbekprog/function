function sum (a) {
  if (a >= 0){
  a = a / a;
  }else {
    a = (a / a) - 2;
  }
  console.log(a);
}
sum (4)