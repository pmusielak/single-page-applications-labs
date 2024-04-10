
let car = { model : 'FORD',
price: 30000,
power: 10,
powerup: function(power_up_value) {
    this.power += power_up_value;
}
}
function Car(model, price, power) {
    this.model = model;
    this.price = price;
    this.power = power;
} 

Car.prototype.powerup = function(power_up_value) {
    return this.power += power_up_value; 
}
Car.prototype.toString = function() {
    return "model: " + this.model + ", price: " + this.price + ",power: " + this.power;
}

function carFactory(){
    Cars = []
    Cars.push(new Car("Nick's", 7, 2), new Car("Chris's", 6, 3), new Car("Pablos's", 10, 20));
    Cars[0].powerup(10);
    Car_in_a_string = Cars[0].toString();
    console.log(Car_in_a_string);
    for(car of Cars){
        console.log(car);
    }
    const stringed_Object = JSON.stringify(Cars[0]);
    console.log(stringed_Object);
    const JSON_Car = '{"model":"Alizee\'s","price": 5,"power": 2}'
    Car_from_a_json = JSON.parse(JSON_Car);
    console.log(Car_from_a_json);
}

carFactory();