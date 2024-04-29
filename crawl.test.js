const {normalizedURL, getURLsFromHTML} =require('./crawl.js')
const {test, expect} = require('@jest/globals')

test('normalizedURL', () => {
    const input = 'https://blog.boot.dev/path'
    const actual = normalizedURL(input)
    const expected ='blog.boot.dev/path'
    expect(actual).toEqual(expected)
})


test('normalizedURL', () => {
    const input = 'https://blog.boot.dev/path/'
    const actual = normalizedURL(input)
    const expected ='blog.boot.dev/path'
    expect(actual).toEqual(expected)
})


test('normalizedURL', () => {
    const input = 'https://BLOG.boot.dev/path/'
    const actual = normalizedURL(input)
    const expected ='blog.boot.dev/path'
    expect(actual).toEqual(expected)
})


test('normalizedURL strip http', () => {
    const input = 'http://blog.boot.dev/path/'
    const actual = normalizedURL(input)
    const expected ='blog.boot.dev/path'
    expect(actual).toEqual(expected)
})

test('getURLsFromHTML', () => {
    const inputHTMLBody = `
    <html>
        <body>
            <a href="https://blog.boot.dev/path/">
                Boot.dev Blog
            </a>
        </body>
    </html>
    `
    const inputBaseURL = "https://blog.boot.dev/path/"
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL)
    const expected = ["https://blog.boot.dev/path/"]
    expect(actual).toEqual(expected)
})


test('getURLsFromHTML relative', () => {
    const inputHTMLBody = `
    <html>
        <body>
            <a href="https://blog.boot.dev/path1/">
                Boot.dev Blog
            </a>
            <a href="/path2/">
                Boot.dev Blog
            </a>
        </body>
    </html>
    `
    const inputBaseURL = "https://blog.boot.dev"
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL)
    const expected = ["https://blog.boot.dev/path1/","https://blog.boot.dev/path2/"]
    expect(actual).toEqual(expected)
})


test('getURLsFromHTML invalid', () => {
    const inputHTMLBody = `
    <html>
        <body>
            <a href="invalid">
                Boot.dev Blog
            </a>
        </body>
    </html>
    `
    const inputBaseURL = "https://blog.boot.dev"
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL)
    const expected = []
    expect(actual).toEqual(expected)
})