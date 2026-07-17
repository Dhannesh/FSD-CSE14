import { EventEmitter } from "node:events";

const task = new MyEventEmitter();

const sayHi = (name) => {
  console.log(`Loggedin ${name}`);
};

task.on("greet", sayHi);

task.on("greet", () => {
  console.log("Logged Out");
});

task.once("greet", () => {
  console.log("System started...");
});

// task.off("greet", (name) => {
//   console.log(`System is shutting down by ${name}`);
// });

const shuttingDown = (name) => {
  console.log(`system is shutting down by ${name}`);
};
task.off("greet", shuttingDown);

// task.on("exit", shuttingDown);
task.emit("greet", "Akhil Singh");
task.emit("greet", "Sonia Singh");
task.emit("exit", "Manager");
task.emit("greet", "Rahul Singh");
task.emit("greet", "Manager");
