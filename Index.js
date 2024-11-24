const studentsUtils = require("./students");
const yargs = require("yargs");

// add, remove, list, read students.
// Adding student
yargs.command({
  command: "add",
  description: "adding a student",
  builder: {
    name: {
      describe: "Takes in students full name",
      demandOption: true,
      type: "string",
    },
    age: {
      describe: "Takes in students age",
      demandOption: true,
      type: "number",
    },
    class: {
      describe: "Takes in students class",
      demandOption: true,
      type: "number",
    },
  },
  handler(argv) {
    console.log("Adding Student...");
    studentsUtils.addStudents(argv.name, argv.age, argv.class);
    // console.log()
  },
});

// removing a student
yargs.command({
  command: "remove",
  description: "removing a student",
  builder: {
    name: {
      describe: "Takes in students full name",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    studentsUtils.removeStudent(argv.name);
  },
});
// Listing all student
yargs.command({
  command: "list",
  description: "Listing all students",
  handler() {
    console.log("Listing all students");
    studentsUtils.listStudents();
  },
});

// reading all student
yargs.command({
  command: "read",
  description: "reading all student",
  builder: {
    name: {
      describe: "Takes in students full name",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    console.log("reading all student");
    studentsUtils.readStudents(argv.name);
  },
});

yargs.argv;

// studentsUtils.getStudents()
