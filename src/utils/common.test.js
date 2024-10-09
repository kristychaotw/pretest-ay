import { addComma, getNumberIntervals } from "./common";

it("add comma to the given number", () => {
  let mockInput = -7855948.9527;
  let expectedResult = "-7,855,948.9527";
  expect(addComma(mockInput)).toBe(expectedResult);
});

it("get intervals of overlapping and not include intervals within 0-20 and giving arrays", () => {
  let mockInput = [
    [6, 11],
    [5, 8],
    [17, 20],
    [7, 7],
    [14, 17],
  ];
  let expectedResult = {
    overlap: [
      [6, 8],
      [17, 17],
    ],
    notInclude: [
      [0, 4],
      [12, 13],
    ],
  };
  expect(getNumberIntervals(mockInput)).toEqual(expectedResult);
});
