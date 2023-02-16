import thePeople from "./people.cjs";
//import lodash from "lodash";

const { people, countPeople } = thePeople;

const count = countPeople;

//const somePeople = lodash.take(people, 2);

const routes = [
  { pattern: "/api/people", result: people },
  { pattern: "/api/people/count", result: people.length },
  { pattern: "/api/people/1", result: people[0] },
  { pattern: "/api/people/1/age", result: people[0].age },
];

export default routes;
