import Mixed from "../mod.ts";

console.log(Mixed.randomFloat(8));
console.log(Mixed.randomInt());
const list = [0, 1, 3, 6, 2, 4];
console.log(Mixed.choice(list));
console.log(Mixed.choice(list, 10));
console.log(list);
Mixed.shuffle(list);
console.log(list);
console.log(Mixed.randomInt8());
console.log(Mixed.randomUint8());
console.log(Mixed.randomInt16());
console.log(Mixed.randomUint16());
console.log(Mixed.randomInt32());
console.log(Mixed.randomUint32());
console.log(Mixed.randomInt64());
console.log(Mixed.randomUint64());
console.log(Mixed.randomBoolean());
console.log(Mixed.randomBinary());

console.log(Mixed.randomInt(0, 1));
