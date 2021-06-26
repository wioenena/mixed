/* eslint-disable no-restricted-properties */
export const intRanges = {
    int8: {
        min: -128,
        max: 127
    },
    int16: {
        min: -32768,
        max: 32767
    },
    int32: {
        min: -2147483648,
        max: 2147483647
    },
    int64: {
        min: 0,
        max: Math.pow(2, 63) - 1
    },
    uint8: {
        max: 255
    },
    uint16: {
        max: 65535
    },
    uint32: {
        max: 4294967295
    },
    uint64: {
        max: Math.pow(2, 64) - 1
    }
};

/**
 *
 * The base class.
 * @export
 * @class Mixed
 */
export class Mixed {
    public static intRanges = intRanges;

    public intRanges = intRanges;

    /**
     *
     * Generates a random float number.
     * @param {number} [min=0]
     * @param {number} [max=10]
     * @returns {number}
     * @memberof Mixed
     */
    public randomFloat(min: number = 0, max: number = 10): number {
        return (Math.random() * (max + 1 - min)) + min;
    }

    /**
     *
     * Generates a random integer number.
     * @param {number} [min]
     * @param {number} [max]
     * @returns
     * @memberof Mixed
     */
    public randomInt(min?: number, max?: number) {
        return Math.floor(this.randomFloat(min, max));
    }

    /**
     *
     * Returns a random element(s) from an array.
     * @param {unknown[]} list
     * @param {number} [limit]
     * @returns {unknown}
     * @memberof Mixed
     */
    public choice(list: unknown[], limit: number): unknown[];
    public choice<T>(list: T[], limit: number): T[];
    public choice<T>(list: T[]): T;
    public choice(list: unknown[], limit?: number): unknown {
        if (typeof limit === "number") {
            const result = [];

            for (let i = 0; i < limit; i++) {
                result.push(this.randomInt(0, list.length - 1));
            }

            return result;
        }

        return list[this.randomInt(0, list.length - 1)];
    }

    /**
     *
     * Randomly distributes the elements of the specified list.
     * @param {unknown[]} list
     * @memberof Mixed
     * @returns {void}
     */
    public shuffle<T>(list: T[]): void;
    public shuffle(list: unknown[]): void {
        let length = list.length;
        while (0 !== length--) {
            const r = this.randomInt(0, length);
            [list[length], list[r]] = [list[r], list[length]]
        }
    }

    /**
     *
     * Generates random numbers in int8 ranges.
     * @param {number} [min=intRanges.int8.min]
     * @param {number} [max=intRanges.int8.max]
     * @returns
     * @memberof Mixed
     */
    public randomInt8(min: number = intRanges.int8.min, max: number = intRanges.int8.max) {
        if (min < intRanges.int8.min || max > intRanges.int8.max)
            throw new Error("The specified range does not match the ranges of int8.");

        return this.randomInt(min, max);
    }

    /**
     *
     * Generates random numbers in uint8 ranges.
     * @param {number} [min=0]
     * @param {number} [max=intRanges.uint8.max]
     * @memberof Mixed
     */
    public randomUint8(min: number = 0, max: number = intRanges.uint8.max) {
        if (min < 0 || max > intRanges.uint8.max)
            throw new Error("The specified range does not match the ranges of uint8.");

        return this.randomInt(min, max);
    }

    /**
     *
     * Generates random numbers in int16 ranges.
     * @param {number} [min=intRanges.int16.min]
     * @param {number} [max=intRanges.int16.max]
     * @returns
     * @memberof Mixed
     */
    public randomInt16(min: number = intRanges.int16.min, max: number = intRanges.int16.max) {
        if (min < intRanges.int16.min || max > intRanges.int16.max)
            throw new Error("The specified range does not match the ranges of int16.");

        return this.randomInt(min, max);
    }

    /**
     *
     * Generates random numbers in uint16 ranges.
     * @param {number} [min=0]
     * @param {number} [max=intRanges.uint16.max]
     * @memberof Mixed
     */
    public randomUint16(min: number = 0, max: number = intRanges.uint16.max) {
        if (min < 0 || max > intRanges.uint16.max)
            throw new Error("The specified range does not match the ranges of uint16.");

        return this.randomInt(min, max);
    }

    /**
     *
     * Generates random numbers in int32 ranges.
     * @param {number} [min=intRanges.int32.min]
     * @param {number} [max=intRanges.int32.max]
     * @memberof Mixed
     */
    public randomInt32(min: number = intRanges.int32.min, max: number = intRanges.int32.max) {
        if (min < intRanges.int32.min || max > intRanges.int32.max)
            throw new Error("The specified range does not match the ranges of int32.");

        return this.randomInt(min, max);
    }

    /**
     *
     * Generates random numbers in uint32 ranges.
     * @param {number} [min=0]
     * @param {number} [max=intRanges.uint8.max]
     * @memberof Mixed
     */
    public randomUint32(min: number = 0, max: number = intRanges.uint32.max) {
        if (min < 0 || max > intRanges.uint32.max)
            throw new Error("The specified range does not match the ranges of uint32.");

        return this.randomInt(min, max);
    }

    /**
     *
     * Generates random numbers in int64 ranges.
     * @param {number} [min=intRanges.int64.min]
     * @param {number} [max=intRanges.int64.max]
     * @returns
     * @memberof Mixed
     */
    public randomInt64(min: number = intRanges.int64.min, max: number = intRanges.int64.max) {
        if (min < intRanges.int64.min || max > intRanges.int64.max)
            throw new Error("The specified range does not match the ranges of int64.");

        return this.randomInt(min, max - 1);
    }

    /**
     *
     * Generates random numbers in uint64 ranges.
     * @param {number} [min=0]
     * @param {number} [max=intRanges.uint8.max]
     * @memberof Mixed
     */
    public randomUint64(min: number = 0, max: number = intRanges.uint64.max) {
        if (min < 0 || max > intRanges.uint64.max)
            throw new Error("The specified range does not match the ranges of uint64.");

        return this.randomInt(min, max);
    }

    /**
     *
     * Generates random boolean.
     * @returns {boolean}
     * @memberof Mixed
     */
    public randomBoolean(): boolean {
        return Boolean(this.randomInt(0, 1)).valueOf();
    }

    /**
     *
     * Generates random binary.
     * @param {number} [binaryLength=10]
     * @returns {string}
     * @memberof Mixed
     */
    public randomBinary(min: number = 0, max: number = 10): string {
        return this.randomInt(min, max).toString(2);
    }
}
