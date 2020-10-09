class Car {
  constructor() {
    this.vehicles = [];
  }

  add(){
    this.vehicles.push('BMW');
    console.log(this.vehicles);
  }
}

const MyCars = new Car();

document.getElementById('newcar').onclick = function() {
  MyCars.add();
}
