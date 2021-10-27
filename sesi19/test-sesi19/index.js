// const hello: string = 'Hello World';
// console.log(hello);
var Customer = /** @class */ (function () {
    function Customer(name, age, money) {
        this.items = ['buku', 'laptop'];
        this.name = name;
        this.age = age;
        this.money = money;
    }
    Customer.prototype.updateDataMoney = function (money) {
        this.money = money;
    };
    Customer.prototype.addItem = function (itemName) {
        this.items.push(itemName);
    };
    return Customer;
}());
var yew = new Customer('Y e w', 22, 1999000);
yew.updateDataMoney(20021999);
yew.addItem('smartphone');
console.log(yew);
var Shop = /** @class */ (function () {
    function Shop() {
        this.customers = [];
    }
    Shop.prototype.addCustomer = function (newCustomer) {
        this.customers.push(newCustomer);
    };
    return Shop;
}());
var shopE = new Shop();
shopE.addCustomer(yew);
console.log(shopE);
