
// Question 51: Refactoring to Arrow Functions:
// Take a simple function that calculates
// the area of a rectangle and refactor 
// it into an arrow function


// Original function for calculating the area of a rectangle
function calculateArea1(width: number, height: number): number {
    return width * height;
}

// Refactored into an arrow function
let calculateAreaArrow1 = (width: number, height: number): number => width * height;

// Example usage of the arrow function
console.log(calculateAreaArrow1(5, 7)); // Logs the area of the rectangle

//Similarly we can calculate more areas like this

function calculateArea2 (width : number , height : number):number{
    return width *height;
}
let calculateAreaArrow2 =( width : number,height : number):number => width*height;
console.log(calculateAreaArrow2(7,4));






















