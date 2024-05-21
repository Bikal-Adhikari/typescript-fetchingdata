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

// const printVehicle = (vehicle: Reportable): void => {
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
  // console.log(`Name: ${vehicle.name}`);
  // console.log(`Year: ${vehicle.year}`);
  // console.log(`Broken? ${vehicle.broken}`);
};

printSummary(oldCivic);
// printVehicle(oldCivic);
