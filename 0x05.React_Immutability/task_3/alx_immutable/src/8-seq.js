const { Seq } = require("immutable");

function printBestStudents(grades) {
  Seq(grades)
    .filter((student) => student.score >= 70)
    .map((student) => ({
      ...student,
      firstName:
        student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1),
      lastName:
        student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1),
    }))
    .forEach((student) => console.log(JSON.stringify(student)));
}

// Test
const grades = {
  1: {
    score: 99,
    firstName: "Fred ",
    lastName: "Swaniker",
  },
  2: {
    score: 50,
    firstName: "John",
    lastName: "Doe",
  },
  3: {
    score: 80,
    firstName: "jane",
    lastName: "doe",
  },
};

printBestStudents(grades);
