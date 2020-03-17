// const http = require('http')
const fs = require('fs');
const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');
const cors = require('cors');
let Parser = require('rss-parser');
let parser = new Parser();

// let rssData = require('data.json')
let title = '';
let feedItems = [];
(async () => {

    let feed = await parser.parseURL('https://www.reddit.com/.rss');
    console.log(feed.title);
    title = feed.title;
  
    feed.items.forEach(item => {
    //   console.log(item.title + ':' + item.link)
      let story = {};
      story['title'] = item.title;
      story['link'] = item.link;
      story['published'] = item.pubDate;
      
      feedItems.push(story);
    });
  for(i = 0; i < 4; i++) {
      console.log(feedItems[i])
  }
  })();

const app = express()
const port = 4000

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    // res.status(200).send('hello out There!')
    res.render("index", {title: `${title}`, posts: `${feedItems}`})
})

app.listen(port, (err) => {
    if (err) {
        return console.log(':(((', err)
    }
    console.log(`server is listening on ${port}`)
})

