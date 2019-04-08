const { add } = require("./calculator.js");

function honest() {
  return true;
}

test("an honest function returns true", () => {
  expect(honest()).toBeTruthy();
});

// test away!
test("should add 2 and 2 to equal 4", () => {
  //Arrange
  const addMock = jest.fn(add);
  const expected = 4;
  const val1 = 2;
  const val2 = 2;

  //Act
  const sum = addMock(val1, val2);

  //Assert
  expect(addMock).toHaveBeenCalledTimes(1);
  expect(sum).toEqual(expected);
});
