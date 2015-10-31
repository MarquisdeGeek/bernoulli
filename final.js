
function calculateBern(n) {
	function g(a,b){
	    return b ? g(b, a%b) : a;
	}
	var N = [];
	var D = [];
	var m=0, j, gcd;
	var jm1;
	var tempNjm1, tempDjm1;

	for(;m<=n;) {
		N[j=jm1=m] = 1;
		D[m] = ++m;
		for(;jm1;) {
			tempNjm1 =  N[--jm1] * D[j] - (N[j] *= tempDjm1 =  D[jm1]);

			// Reduce
			r = g(tempNjm1*=j, tempDjm1 = D[j] = tempDjm1 * D[j]);
			N[jm1] = tempNjm1/r;
			D[--j] = tempDjm1/r;
		}
	}
	return [ N[0] , D[0] ];	
}
