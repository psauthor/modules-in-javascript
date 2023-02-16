// import foo from "dns";

// foo.lookup("pluralsight.com", function (e, addr) {
//   console.log(`Address(es): ${addr}`);
// });

import quux, { capitalize, favoriteColors } from "./utils.js";
import User, { getTeam, sortTeam } from "./auth/index.js";

console.log(`${quux.appName} v${quux.version}`);

console.log(capitalize("Hello World"));

favoriteColors.forEach((c) => console.log(c));

const user = new User("Shawn", "Wildermuth");
console.log(user.format());

const team = getTeam();

sortTeam(team);
team.forEach(t => console.log(t.format()));
team.length = 0;
console.log(`Team Length: ${team.length}`);
console.log("-----------------------------------");

import { getTeam as getTeam2 } from "./auth/index.js";
const team2 = getTeam2();
team2.forEach(t => console.log(t.format()));
console.log(`Team Length: ${team2.length}`);

