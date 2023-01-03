const { MarkovMachine } = require("./markov");

describe("markov machine", function () {
  test('make chains', function () {
    let mm = new MarkovMachine('i am not sam i am dan');
    let chain = Array.from(mm.chains.keys());
    expect(chain.length).toEqual(6);
    expect(chain[0]).toEqual('i');
  });
  test('test static func', function () {
    let chain = [1, 2, 3, 4];
    expect(chain).toContain(MarkovMachine.choice(chain));
  });
  test('make text', function () {
    let mm = new MarkovMachine('i am not sam i am dan');
    let result = mm.makeText();
    expect(result).not.toEqual('undefined');
  });
});
