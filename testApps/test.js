const fs = require('fs');
const parseString = require('xml2js').parseString;
const fetch = require('node-fetch')
const Parser = require('rss-parser'); 
let parser = new Parser()

// fetch('https://www.reddit.com/r/hockey.rss')
//     .then(res => res.text())
//     .then(data => hockeyfeed = data)
// //     .then()
// https://www.reddit.com/r/hockey.rss
// https://www.reddit.com/.rss
let hockeyfeed;
let getFeed = async () => {
    try {
        // let hockeyfeed  = await fetch('https://www.reddit.com/.rss');
    
        hockeyfeed = await parser.parseURL('https://www.reddit.com/.rss');
        // hockeyfeed = await parser.parseString('https://www.reddit.com/.rss');
        console.log(hockeyfeed.title)
        // console.log(hockeyfeed.link)
        // console.log(hockeyfeed.feedUrl)
        hockeyfeed.items.forEach((head) => {
            console.log(head)
        })

        // console.log(typeof hockeyfeed);
        // console.log(hockeyfeed.link);


    } catch(e) {
        console.log(e);
        return false;
    }
}

let stuff = getFeed();

// console.log(hockeyfeed)
