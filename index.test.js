describe("removeEcho", () => {
  it.each`
    input              | output
    ${'sanduicheiche'} | ${'sanduiche'}
    ${'barrilarril'}   | ${'barril'}
    ${'ratoato'}       | ${'rato'}
    ${'sol'}           | ${'sol'}
    ${'coliseueu'}     | ${'coliseu'}
    ${'queijoijo'}     | ${'queijo'}
    ${'astroastro'}    | ${'astro'}
    ${'a'}             | ${'a'}
  `("it returns '$output' for input: '$input' ", async ({input, output}) => {
    const removeEcho = require(".");

    expect(removeEcho(input)).toEqual(output);
  });
});
