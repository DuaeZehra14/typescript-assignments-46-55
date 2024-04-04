// Question 46: Enhanced Laptop Object: Construct
//  an object for a laptop including properties 
//  make, model, year, and a method describe()
//   that logs a sentence about the laptop.




let laptop = {
    make:"Acer",
    model:"corei5",
    year:"2022",
    screen:"15.60 display",
    storage:"8GB of RAM",
    descirbe : function(){
        console.log(`This laptop is a ${this.make} ${this.model} ${this.year} and this laptop has a ${this.screen} with ${this.storage}.`)
    }
};

laptop.descirbe();