const EventEmitter = require("events"); 
const eventEmitter = new EventEmitter(); 

eventEmitter.on("myjob1", () => {
    console.log("Event for MyJob1 trigggered");
}); 
eventEmitter.on("myjob2", () => {
    console.log("Event for MyJob2 trigggered");
}); 
eventEmitter.on("myjob3", () => {
    console.log("Event for MyJob3 trigggered");
}); 

eventEmitter.emit("myjob1");
eventEmitter.emit("myjob2");
eventEmitter.emit("myjob3");

class Employee extends EventEmitter {
    constructor(name, sal) {
        super();
        this._name = name; 
        this._sal = sal; 
    }
    get name() {return this._name};
    set name(name) {this._name = name}

    get sal() {return this._sal}
    set sal(sal) {this._sal = sal}

}

e1 = new Employee("Rajkumar", 1212); 
e2 = new Employee("Rajat", 1313); 

e1.on("emp", () => {
    console.log(`Employee Name ${e1.name}, Emp Sal ${e1.sal}`);
})

e2.on("emp", () => {
    console.log(`Employee Name ${e2.name}, Emp Sal ${e2.sal}`);
})

e1.emit("emp");
console.log("---------------------------");
e2.emit("emp");