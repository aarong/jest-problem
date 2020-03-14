jest.useFakeTimers();

describe("Some tests", () => {
  it("first test", done => {
    setTimeout(() => {
      console.log("first timeout fired -- why??");
      done();
    }, 10000000);
  });

  it("second test", done => {
    setTimeout(() => {
      console.log("second timeout fired");
      done();
    }, 10000000);

    jest.advanceTimersByTime(10000000);
  });
});
