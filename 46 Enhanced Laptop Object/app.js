var laptop = {
    make: "Acer",
    model: "corei5",
    year: "2022",
    screen: "15.60 display",
    storage: "8GB of RAM",
    descirbe: function () {
        console.log("This laptop is a ".concat(this.make, " ").concat(this.model, " ").concat(this.year, " and this laptop has a ").concat(this.screen, " with ").concat(this.storage));
    }
};
laptop.descirbe();
