const expect = chai.expect;

describe("Celcius to Fahrenheit", () => {
  it("Zero degrees Celcius should Equal 32 degrees Fahrenheit", () => {
    expect(celsiusToFahrenheit(0)).to.equal(
      32,
      "Please check your math in CelciusToFarenheit"
    );
  });
});
