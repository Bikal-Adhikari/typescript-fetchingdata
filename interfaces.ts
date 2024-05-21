// interface Vehicle {
//   name: string;
//   year: Date;
//   broken: boolean;
//   summary(): string;
// }
interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "Civic",
  year: new Date("2000"),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar.`;
  },
};

// const printVehicle = (vehicle: Reportable): void => {
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
  // console.log(`Name: ${vehicle.name}`);
  // console.log(`Year: ${vehicle.year}`);
  // console.log(`Broken? ${vehicle.broken}`);
};

printSummary(oldCivic);
printSummary(drink);
// printVehicle(oldCivic);
