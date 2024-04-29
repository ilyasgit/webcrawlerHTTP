const {normalizedURL} =require('./crawl.js')
const {test, expect} = require('@jest/globals')

test('normalizedURL', () => {
    const input = ''
    const actual = normalizedURL(input)
    const expected =''
    expect(actual).toEqual(expected)
})