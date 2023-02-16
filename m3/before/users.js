class User {
  firstName = "";
  lastName = "";
  birthdate = new Date();
  phone = "";

  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }

  format() {
    return `${this.lastName}, ${this.firstName}`;
  }
}

const team = [
  new User("Bob", "Smith"),
  new User("Jake", "Urizto"),
  new User("Jose", "Garcia")
];

function sortTeam(theTeam) {
  theTeam.sort((a,b) => a.lastName.localeCompare(b.lastName));
}