/**Prime factor product of a number: 
 * The prime factor product of 40 is 2*2*2*5;
*/


/**A number is prime if it's got only 2 divisors : 1 and itself 
 * O and 1 are not prime
*/

let IsPrime = (number)=>{
    let divisors = 0;
    for(let i = 1; i<=number; i++){
        if(number % i == 0){
            divisors++;
        }
    }
    if(divisors == 2){
        return true;
    }
    else{
        return false;
    }
}

//Find all prime factor of the number and put them in an array
let FindPrimeFactors = (number)=>{
    let array = [];
    let newarray = [];
    for(let i = 1; i<number; i++){
        if(IsPrime(i)&& number%i == 0){ 
            /**If i is prime and i divides number, we push i in the empty array */
            array.push(i);
        }
    }
    //Now we have all prime divisors of the number

    for(let i of array){
        let Newnumber = number/i;
        //check if newnumber (number already devided by i) is still divisible by i;
        while (Newnumber % i == 0) {
            newarray.push(i);
            Newnumber = Newnumber/i;
        }
    }
    let lastarray = array.concat(newarray);
    return lastarray;
}


let PrimeFactorProduct = (number)=>{
    if(IsPrime(number)){
        return number;
    }
    else{
        let lastarray = FindPrimeFactors(number);
        let line = "";
        lastarray.sort((a,b)=> {
            return parseInt(a) - parseInt(b);
        })
        for(let i = 0; i<lastarray.length-1; i++){
            line+=lastarray[i]+"*";
        }
        return line+lastarray[lastarray.length-1];
    }
}


//Product of common divisors with the lowest exponent,
let LargestCommonDivisors = (number1, number2)=>{
    if(IsPrime(number1) || IsPrime(number2)){ //if one of the two numbers is prime
        return 1;
    }
    else{
        let PrimeFactorProduct1 = PrimeFactorProduct(number1).split('*');
        let PrimeFactorProduct2 = PrimeFactorProduct(number2).split('*');
        let result = 1;
        for(let i = 0; i<PrimeFactorProduct1.length; i++){
            if(PrimeFactorProduct1[i] == PrimeFactorProduct2[i]){
                result*=parseInt(PrimeFactorProduct1[i]);
            }
        }
        return result;
    }
}
