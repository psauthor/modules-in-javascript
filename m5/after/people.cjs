const { take } = require("lodash");

const people = take([
  {
    id: 1,
    name: "Shawn",
    age: 42,
  },
  {
    id: 2,
    name: "Jake",
    age: 22,
  },
  {
    id: 3,
    name: "Mike",
    age: 32,
  },
], 2);

function countPeople() {
  return people.length;
}

module.exports = {
  people,
  countPeople
};
