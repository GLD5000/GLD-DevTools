/* eslint-disable no-loop-func */
import {
  jumpSearch,
  jumpSearchWithLogs,
  backwardsLinearSearch,
  backwardsLinearSearchWithLogs,
  binarySearch,
  binarySearchWithLogs,
} from "@/utils/algos/searches";

const testArray = [
  1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5,
  5, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 10,
  10, 11, 12,
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
  for (let i = 0; i < Math.max(...testArray); i += 1) {
    searchesArray.forEach((searchFunction) => {
      it(`${searchFunction.name}`, () => {
        expect(searchFunction({ array: testArray, searchValue: i })).toBe(
          testArray.indexOf(i),
        );
      });
    });
  }
});
