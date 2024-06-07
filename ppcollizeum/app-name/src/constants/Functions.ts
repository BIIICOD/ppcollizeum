export function countUniqueStrings(arr: string[]): { [key: string]: number } {
    const result: { [key: string]: number } = {};

    for (const value of arr) {
        if (result[value]) {
            result[value]++;
        } else {
            result[value] = 1;
        }
    }
    return result;
}