const soma = require('./soma')

test('a soma 1 + 2 é igual a 3', () => {
    expect(soma(1,2)).toBe(3);
});