// Question 48: Combining Arrays with Spread Operator:
// Suppose you're comparing prices of two different
// sets of laptops. Use the spread operator to
// combine these arrays into a single array
// sorted in ascending order, then 
// // log the result.



let priceSet1 =[22000,28000,30500];
let priceSet2 =[40000,47500,55000];
let combinedPrices = [...priceSet1,...priceSet2].sort((a,b)=>a - b);
console.log(combinedPrices);


