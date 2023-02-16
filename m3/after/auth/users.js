export default class User {
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

export function getTeam() {
  return [
    new User("Bob", "Smith"),
    new User("Jake", "Urizto"),
    new User("Jose", "Garcia")
  ];
} 

export function sortTeam(theTeam) {
  theTeam.sort((a,b) => a.lastName.localeCompare(b.lastName));
}