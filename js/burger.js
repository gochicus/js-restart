const toppingData = [{ name: cheese, price: 50, cal: 20 }, { name: potato, price: 30, cal: 15 }, { name: salad, price: 20, cal: 5 }];
const sizeData = [{ size: big, price: 100, cal: 80 }, { size: small, price: 70, cal: 60 }];
const souseData = [{ add: mayonese, price: 10, cal: 15 }, { add: souse, price: 10, cal: 15 }];

class Order {
    constructor(size, add, toppings) {
        this.size = size;
        this.add = add;
        this.toppings = toppings;
        this.overallPrice = [];
        this.overallCal = [];
        this.finalPrice = 0;
        this.finalCal = 0;
    }
    _getSize() {
        let size = document.querySelector("#size-choice").value;
        for (size in sizeData) {
            sizeData.price.push(overallPrice);
            sizeData.cal.push(overallCal);
        }
        return this.size = size;
    }
    _getAdd() {
        let add = document.querySelector("#spices-choice").value;
        for (add in souseData) {
            souseData.price.push(overallPrice);
            souseData.cal.push(overallCal);
        }
        return this.add = add;
    }
    _getAdd() {
        let toppings = document.querySelector("#toppings-choice").value;
        for (toppings in toppingData) {
            toppingData.price.push(overallPrice);
            toppingData.cal.push(overallCal);
        }
        return this.toppings = toppings;
    }
    _calCount() {
        let finalCal = overallCal.reduce((acc, item) => acc += item);
        return this.finalCal = finalCal;

    }
    _priceCount() {
        let finalPrice = overallPrice.reduce((acc, item) => acc += item);
        return this.finalPrice = finalPrice;
    }
    _render() {
        return document.querySelector("#buy").insertAdjacentHTML("afterend", `<p>${finalCal}</p> /n <p>${finalPrice}</p>`);

    }

}
let result = new Order();
document.querySelector("#buy").addEventListener("click", result);