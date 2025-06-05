const reverseAndCombineWords = require('./Q1');

test("Throw error if empty string", () => {
    expect(() => { reverseAndCombineWords("") }).toThrow("Empty String not allowed")
})

test("Reverses string",() => {
    expect(reverseAndCombineWords("abc def")).toEqual("cbafed") 
})

test("Reverses string 2",() => {
    expect(reverseAndCombineWords("abc def ghi 123")).toEqual("defabc123ghi") 
})
test("Reverses string 3",() => {
    expect(reverseAndCombineWords("abc def gh34 434ff 55_eri 123 343")).toEqual("43hgff434cbafed343ire_55321") 
})