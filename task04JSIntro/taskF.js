function primeOrNot(n){
  for (i=2;i<n;i++){
    if(n%2===0){
      return false;
    }
    return true;
  }
}
console.log(primeOrNot(4));
console.log(primeOrNot(3));
