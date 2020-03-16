const fs = require('fs');
const fetch = require('node-fetch')
let hockeyfeed;
// fetch('https://www.reddit.com/r/hockey.rss')
//     .then(res => res.text())
//     .then(data => hockeyfeed = data)
//     .then()

(async () => {
    hockeyfeed  = await fetch('https://www.reddit.com/r/hockey.rss')
    console.log(hockeyfeed.body)
    // console.log(hockeyfeed.items)
})()

console.log(hockeyfeed)
