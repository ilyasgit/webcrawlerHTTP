process.argv


const {crawlPage} = require('./crawl.js')

async function main() {
    if(process.argv.lenght < 3){
        console.log('no website provided')
        process.exit(1)
    }
    if(process.argv.lenght > 3){
        console.log('to many commant line args')
        process.exit(1)
    }
    for (const arg of process.argv){
        console.log(arg)
    }

    const baseURL = process.argv[2]

    console.log(`starting crawl ${baseURL}`)
    const pages = await crawlPage(baseURL, baseURL, {})

    for (const page of Object.entries(pages)){
        console.log(page)
    }
}

main()