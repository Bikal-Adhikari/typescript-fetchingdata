class Vehicle {
  // public drive(): void {
  //   console.log("chugga chugga");
  // }
  // color: string;

  constructor(public color: string) {
    // this.color = color;
  }

  protected honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

// class Car extends Vehicle {
//   private drive(): void {
//     console.log("vroom");
//   }

//   startDrivingProcess(): void {
//     this.drive();
//     this.honk();
//   }
// }

// // const vehicle = new Vehicle();
// // vehicle.drive();
// // vehicle.honk();

// const car = new Car();
// car.startDrivingProcess();
// car.honk();
