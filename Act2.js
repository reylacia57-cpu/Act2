const user1 = { id: 1, profile: { name: "Alice", address: { city: "Calbayog" } } };
const user2 = { id: 2, profile: null };

const { profile: p1 } = user1;
const { profile: p2 } = user2;

console.log(p1?.address?.city);
console.log(p2?.address?.city);