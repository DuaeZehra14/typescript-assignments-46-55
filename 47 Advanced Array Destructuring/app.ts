// Question 47: Advanced Array Destructuring: Given an array of 
// objects representing different laptops, each with 
// properties make, model, and year, use array 
// destructuring to assign the first
//  and second laptops to variables.
//  Then, log these variables.



let laptops = [
    {make : "Acer",model:"corei5", year:2022.},
    {make : "Apple",model:"MacBook", year:2023.},
    {make : "Hp",model:"Envy", year:2022.}

]
let [laptop1 , laptop2] = laptops;
console.log(laptop1);
console.log(laptop2);

