import Mixed from "../mod.ts";

const list = [0, 1, 3, 6, 2, 4];

function test(testName: string, cb: Function) {
    console.log(`Starting ${testName} test.`);

    for (let i = 0; i < 5; i++) {
        cb();
    }

    console.log(`${testName} test finished.`);
}

test("randomFloat", () => console.log(Mixed.randomFloat()));
test("randomInt", () => console.log(Mixed.randomInt()));
test("choice", () => console.log(Mixed.choice(list)));
test("multipleChoice", () => console.log(Mixed.choice(list, 10)));
test("shuffle", () => {
    console.log(list);
    Mixed.shuffle(list);
    console.log(list, "\n\n\n");
});
test("randomInt8", () => console.log(Mixed.randomInt8()));
test("randomUint8", () => console.log(Mixed.randomUint8()));
test("randomInt16", () => console.log(Mixed.randomInt16()));
test("randomUint16", () => console.log(Mixed.randomUint16()));
test("randomInt32", () => console.log(Mixed.randomInt32()));
test("randomUint32", () => console.log(Mixed.randomUint32()));
test("randomInt64", () => console.log(Mixed.randomInt64()));
test("randomUint64", () => console.log(Mixed.randomUint64()));
test("randomBoolean", () => console.log(Mixed.randomBoolean()));
test("randomBinary", () => console.log(Mixed.randomBinary()));
