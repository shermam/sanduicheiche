describe("removeEcho", () => {
  it("it removes the echoes from words", async () => {
    const removeEcho = require(".");
    expect(removeEcho("sanduicheiche")).toEqual("sanduiche");
    expect(removeEcho("barrilarril")).toEqual("barril");
    expect(removeEcho("ratoato")).toEqual("rato");
    expect(removeEcho("sol")).toEqual("sol");
    expect(removeEcho("coliseueu")).toEqual("coliseu");
    expect(removeEcho("queijoijo")).toEqual("queijo");
    expect(removeEcho("astroastro")).toEqual("astro");
    expect(removeEcho("a")).toEqual("a");
  });
});
