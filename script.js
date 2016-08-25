function thisWorks(a,b,c) {
  return a*b-c;
}
x = thisWorks(3,5,10);
if (x == 5) {
  console.log("Hey this works!")
}
else {
  console.log("Boo. This does not work...yet!");
}
