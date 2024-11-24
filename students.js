const fs = require("fs");

const getStudents = () => {
  console.log("Getting Students");
};

const addStudents = (name, age, Class) => {
  const students = loadStudents();
  const duplicateData = students.filter((student) => student.name === name);

  if (duplicateData.length === 0) {
    students.push({
      name: name,
      age: age,
      class: Class,
    });
    saveStudents(students);
    console.log("Added a student.");
  } else {
    console.log("Record already in system");
  }
};

const removeStudent = (name) => {
  const students = loadStudents();
  const newStudents = students.filter((student) => student.name !== name);

  saveStudents(newStudents);

  if (students.length > newStudents.length) {
    console.log("Removed" + name);
  } else {
    console.log("No such student found");
  }
};

const listStudents = () => {
  const students = loadStudents();
  students.forEach((student) => {
    console.log(
      "Name: " +
        student.name +
        ", Class: " +
        student.class +
        ", Age: " +
        student.age
    );
  });
};

const readStudents = (name) => {
  const students = loadStudents();

  const foundStudent = students.find((student) => student.name === name);

  if (foundStudent) {
    console.log("Student found");
    console.log(
      "Name: " +
        foundStudent.name +
        ", Class: " +
        foundStudent.class +
        ", Age: " +
        foundStudent.age
    );
  } else {
    console.log("No student found!");
  }
};

const saveStudents = (students) => {
  const stringData = JSON.stringify(students);
  fs.writeFileSync("students.json", stringData);
};

const loadStudents = () => {
  try {
    const dataBuffer = fs.readFileSync("students.json");
    const JSONdata = JSON.parse(dataBuffer.toString());
    return JSONdata;
  } catch (e) {
    return [];
  }
};

// console.log(loadStudents())

module.exports = {
  getStudents: getStudents,
  addStudents: addStudents,
  removeStudent: removeStudent,
  listStudents: listStudents,
  readStudents: readStudents,
};
