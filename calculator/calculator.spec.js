const { add } = require("./calculator.js");

function honest() {
  return true;
}

describe("honest function", () => {
  test("an honest function returns true", () => {
    expect(honest()).toBeTruthy();
  });
});
describe("calculator.js", () => {
  // test away!
  test("should add 2 and 2 to equal 4", () => {
    //Arrange
    const addMock = jest.fn(add);
    const expected = 4;
    const expected2 = 6;
    const val1 = 2;
    const val2 = 2;
    const val3 = 4;

    //Act
    const sum = addMock(val1, val2);
    const sum2 = addMock(val1, val3);

    //Assert
    expect(addMock).toHaveBeenCalledTimes(2);
    expect(sum).toEqual(expected);
    expect(sum2).toEqual(expected2);
  });

  it("should return the passed value, if only one provided", () => {
    const addMock = jest.fn(add);
    const val1 = 2;

    const sum = addMock(val1);

    expect(addMock).toHaveBeenCalledTimes(1);
    expect(sum).toEqual(val1);
  });

  it("should calculate the sum of any number of arguments", () => {
    const addMock = jest.fn(add);
    const val1 = 2;
    const val2 = 3;
    const val3 = 4;
    const total = 9;

    const sum = addMock(val1, val2, val3);

    expect(addMock).toHaveBeenCalledTimes(1);
    expect(sum).toEqual(total);
  });

  it("should calculate sum from an array", () => {
    const addMock = jest.fn(add);
    const arr = [1, 2, 3, 4];
    const total = 10;

    const sum = addMock(arr);

    expect(addMock).toHaveBeenCalledTimes(1);
    expect(sum).toEqual(total);
  });
});
