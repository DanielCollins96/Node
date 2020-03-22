const express = require('express');
const router = express.Router();
const Parser = require('rss-parser');
const parser = new Parser();

router.get('/alberta', async (req, res) => {
    let albertaPosts = await parser.parseURL('https://www.alberta.ca/newsroom/newsroom.cfm');
    console.log(Object.values(albertaPosts.items))
    let posts = [];
    albertaPosts.items.forEach((el) => {
        let newsObject = {};
        newsObject['title'] = el.title;
        newsObject['content'] = el.contentSnippet;
        newsObject['link'] = el.link;
        newsObject['author'] = el.author;
        newsObject['date'] = el.pubDate;
        posts.push(newsObject);
    })
    res.send( posts )
    // console.log(albertaPosts);
})

router.get('/bc', async (req, res) => {
    let bcPosts = await parser.parseURL('https://news.gov.bc.ca/feed');
    console.log(Object.keys(bcPosts.items))
    let posts = [];
    bcPosts.items.forEach((el) => {
        let newsObject = {};
        newsObject['title'] = el.title;
        newsObject['content'] = el.contentSnippet;
        newsObject['link'] = el.link;
        newsObject['date'] = el.pubDate;
        posts.push(newsObject);
    })
    // res.send( bcPosts.items )
    res.send( posts )
})

router.get('/ontario', async (req, res) => {
    let ontarioPosts = await parser.parseURL('https://news.ontario.ca/newsroom/en/rss/allnews.rss');
    console.log(Object.keys(ontarioPosts))
    res.send(ontarioPosts.items)
})

router.get('/manitoba', async (req, res) => {
    let manitobaPosts = await parser.parseURL('https://news.gov.mb.ca/news/index.rss');
    console.log(Object.keys(manitobaPosts))
    res.send(manitobaPosts.items)
})


module.exports = router;