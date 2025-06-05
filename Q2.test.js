const titleCase = require('./Q2')



test("returns empty string when title is empty", () => {
    expect(() => { titleCase("", "a the").toBe("") })
})

test("Convert minorWords string to lowercase array for easy checking", () => {
    expect(() => { titleCase("a clash of KINGS", "a an the of").toBe("A Clash of Kings") })
})

test("Split the title into words", () => {
    expect(() => { titleCase("THE WIND IN THE WILLOWS", "The In").toBe("The Wind in the Willows") })
})

test(" first letter uppercase, rest lowercase", () => {
    expect(titleCase("the quick brown fox")).toBe("The Quick Brown Fox")
})
