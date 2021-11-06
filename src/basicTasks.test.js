import {
  objWithNewFields,
  objWithSum,
  objWithRes,
  objWithNums
} from "./basicTasks";

describe("should test basicTasks", () => {
  it("should test objWithNewFields", () => {
    expect(objWithNewFields.name).toEqual("Felix");
    expect(objWithNewFields.age).toEqual(7);
  });

  it("should test objWithRes", () => {
    expect(objWithRes.res).toEqual("n is equal 3");
  });

  it("should test objWithSum 10 + 10", () => {
    expect(objWithSum.sum).toEqual(20);
  });

  it("should test objWithNums", () => {
    expect(objWithNums.nums).toEqual([2, 3]);
  });
});
