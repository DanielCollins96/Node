const express = require('express');
const router = express.Router();
const Parser = require('rss-parser');
const parser = new Parser();

router.get('/ab', async (req, res) => {
    let albertaPosts = await parser.parseURL('https://www.alberta.ca/newsroom/newsroom.cfm');
    console.log(Object.values(albertaPosts.items))
    let posts = [];
    let id = 0;
    albertaPosts.items.forEach((el) => {
        let newsObject = {};
        newsObject['title'] = el.title;
        newsObject['content'] = el.contentSnippet;
        newsObject['link'] = el.link;
        newsObject['author'] = el.author;
        newsObject['date'] = el.pubDate;
        posts.push(newsObject);
        id++;
    })
    res.send(posts);
})

router.get('/bc', async (req, res) => {
    let bcPosts = await parser.parseURL('https://news.gov.bc.ca/feed');
    console.log(Object.keys(bcPosts.items))
    let posts = [];
    let id = 0;
    bcPosts.items.forEach((el) => {
        let newsObject = {};
        newsObject['id'] = id;
        newsObject['title'] = el.title;
        newsObject['content'] = el.contentSnippet;
        newsObject['link'] = el.link;
        newsObject['date'] = el.pubDate;
        posts.push(newsObject);
        id++;
    })
    res.send( posts )
})

router.get('/man', async (req, res) => {
    let manitobaPosts = await parser.parseURL('https://news.gov.mb.ca/news/index.rss');
    let posts = [];
    let id = 0;
    manitobaPosts.items.forEach((el) => {
        let newsObject = {};
        newsObject['title'] = el.title;
        //content is empty
        newsObject['content'] = el.contentSnippet;
        newsObject['link'] = el.link;
        newsObject['date'] = el.pubDate;
        posts.push(newsObject);
        id++;
    })
    res.send(posts)
})

router.get('/ont', async (req, res) => {
    let ontarioPosts = await parser.parseURL('https://news.ontario.ca/newsroom/en/rss/allnews.rss');
    let posts = [];
    let id = 0;
    ontarioPosts.items.forEach((el) => {
        let newsObject = {};
        newsObject['title'] = el.title;
        newsObject['content'] = el.contentSnippet;
        newsObject['link'] = el.link;
        newsObject['author'] = el.author;
        newsObject['date'] = el.pubDate;
        posts.push(newsObject);
        id++;
    })
    res.send(posts)
})

router.get('/sask', async (req, res) => {
    let saskPosts = await parser.parseURL('https://www.saskatchewan.ca/Feeds/NewsFeed.ashx');
    let posts = [];
    let id = 0;
    saskPosts.items.forEach((el) => {
        let { title, contentSnippet, link, author, pubDate} = el;
        let newsObject = {
            title,
            content : contentSnippet,
            link,
            author,
            date: pubDate,
        };
        newsObject['id'] = id;
        posts.push(newsObject);
        id++;
    })
    res.send(posts);
})


module.exports = router;