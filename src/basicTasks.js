// Task 1 - add new fields name with value "Felix", and age - 7
const objWithNewFields = {
  name: "Felix",
  age: 7
};
// Task 1 - end

// Task 2 - add new field sum, that should contain sum of fields a + b
const objWithSum = {
  a: 10,
  b: 10
};

objWithSum.sum = objWithSum.a + objWithSum.b;

// Tsk 3 - end

// Task 3 - rewrite nums array with [2,3] array
const objWithNums = {
  nums: [1]
};

objWithNums.nums = [2, 3];

// Tsk 3 - end
// not needed
const objWithRes = {
  n: 3,
  res: "n is equal 3"
};

export { objWithNewFields, objWithSum, objWithRes, objWithNums };
