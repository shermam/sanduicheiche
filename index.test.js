const removeEcho = require(".");

describe("removeEcho", () => {
  it.each`
    input              | output
    ${"sanduicheiche"} | ${"sanduiche"}
    ${"barrilarril"}   | ${"barril"}
    ${"ratoato"}       | ${"rato"}
    ${"sol"}           | ${"sol"}
    ${"coliseueu"}     | ${"coliseu"}
    ${"queijoijo"}     | ${"queijo"}
    ${"astroastro"}    | ${"astro"}
    ${"a"}             | ${"a"}
    ${"bananaana"}     | ${"banana"}
  `("it returns '$output' for input: '$input' ", ({ input, output }) => {
    expect(removeEcho(input)).toEqual(output);
  });
});
