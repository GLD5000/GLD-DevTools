/* eslint-disable no-loop-func */
import {
  jumpSearch,
  jumpSearchWithLogs,
  backwardsLinearSearch,
  backwardsLinearSearchWithLogs,
  binarySearch,
  binarySearchWithLogs,
  arraysMatch,
  arrayIsSubset,
} from "@/utils/algos/searches";

const testArrayA = [
  1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5,
  5, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 10,
  10, 11, 12,
];

const testArrayB = [
  1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5,
  5, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 10,
  10, 11, 12,
];
const testArrayC = [
  1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5,
  5, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 10,
  10, 11,
];
const searchesArray = [
  jumpSearch,
  jumpSearchWithLogs,
  binarySearch,
  binarySearchWithLogs,
  backwardsLinearSearch,
  backwardsLinearSearchWithLogs,
];
describe("searches work", () => {
  for (let i = 0; i < Math.max(...testArrayA); i += 1) {
    searchesArray.forEach((searchFunction) => {
      it(`${searchFunction.name}`, () => {
        expect(searchFunction({ array: testArrayA, searchValue: i })).toBe(
          testArrayA.indexOf(i),
        );
      });
    });
  }
});

it("array matcher works", () => {
  expect(arraysMatch(testArrayA, testArrayB)).toBeTruthy();
  expect(arraysMatch(testArrayA, testArrayC)).toBeFalsy();
});

it("array subset works", () => {
  expect(arrayIsSubset(testArrayA, [1, 2, 3])).toBeTruthy();
  expect(arrayIsSubset(testArrayA, [1, 7, 3])).toBeTruthy();
  expect(arrayIsSubset(testArrayA, [0, 2, 3])).toBeFalsy();
});
