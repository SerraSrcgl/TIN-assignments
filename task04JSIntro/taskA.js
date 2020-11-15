//iterative implementation of factorial
function factorial(num){
	var factorial=1;

	for(var i=1;i<=num;i++){
		factorial*=i;

	}
	return factorial;
}
 
 console.log(factorial(4));

//recursive factorial

function recfactorial(N){
	
    if(N=== 0) {
        return 1
    } else {
        return N * factorial(N - 1);
    }
}
 
console.log(recfactorial(6));


