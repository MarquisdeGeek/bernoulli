function reduce(numerator,denominator){
	var gcdfn = function gcd(a,b){
		return b ? gcdfn(b, a%b) : a;
	};
	gcd = gcdfn(numerator,denominator);

	return [numerator/gcd, denominator/gcd];
}

function calculateBernoulli(n) {
	var numerator = [];
	var denominator = [];

	for(var m=0;m<=n;++m) {
		numerator[m] = 1;
		denominator[m] = (m+1);
		for(var j=m;j>=1;--j) {

			// The calculation is:
			//A[j-1] = j * (A[j-1] - A[j]);

			// Change the fractions to have the same denom
			var newdenominator = denominator[j-1] * denominator[j];
			numerator[j-1] *= denominator[j];
			numerator[j] *= denominator[j-1];
			denominator[j-1] = denominator[j] = newdenominator;

			// Subtract
			numerator[j-1] = numerator[j-1] - numerator[j];

			// Apply the j* .. bit
			numerator[j-1] *= j;

			// Reduce
			var r = reduce(numerator[j-1], denominator[j-1]);
			numerator[j-1] = r[0];
			denominator[j-1] = r[1];
			
		}
	}
	return [ numerator[0] , denominator[0] ];
}
