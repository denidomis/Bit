// const objektas = {
//   spalva: "raudona",
//   sayHello() {
//     console.log("hello");
//   },
//   hello: () => {
//     console.log("hellos");
//   },
//   hi: function () {
//     console.log("hi");
//   },
// };

// objektas.hi();

class Person {
  name;
  height;
  nationality = "Lithuanian";
  constructor(name, height) {
    console.log("name: " + name);
    console.log("height: " + height);
    this.name = name;
    this.height = height;
  }
}

const petras = new Person("Petras", 1.87);
console.log(petras);
