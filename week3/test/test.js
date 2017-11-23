let numbers = [1,2,3,4,5,6,7,8,9,10];
let double = numbers.map(x => x * 2);            
let dobule2 = numbers.map(function(x){
   return x = x * 2;
})
console.log(double,dobule2);
let isEven = numbers.filter(x => x % 2 == 0); 
console.log(isEven);
let isEvenLoop = numbers.filter(function(x){
   return x = x % 2 == 0 ;
console.log(isEvenLoop);
let isOdd = numbers.filter(x => x % 2);
console.log(isOdd);
let isOddLoop = numbers.filter(function(x){
   return x = x % 2;
});
console.log(isOddLoop);