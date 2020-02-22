function Person(n, a, j, g) {
  this.name = n;
  this.job = j;
  this.age = a;
  this.grade = g;
  this.sayHello = () => alert("hEllo");
}

function Employee(name, age, job, grade) {
  Person.call(this, name, age, job, grade);

}

Employee.prototype.showInfos = function() {
  alert(`${this.name} ${this.age} ${this.job} ${this.grade}`);
}

const roni = new Employee("Roni", 15, "physisict", 9);

roni.showInfos();
roni.sayHello();


// const roni = {
//   name:"Roni",
//   age:15,
//   job:"student"
// };

// function showInfos(exists) {
//   console.log(this.name, this.age, this.job, exists);
// }

// showInfos.call(roni, "Yes");