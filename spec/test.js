var miModulo = require("../index.js");

describe("A suite", function() {
  var resultado;

  it("contains spec with an expectation", function() {
    resultado = miModulo.sumar(4, 5);
    expect(resultado).toBe(9);
  });
});


