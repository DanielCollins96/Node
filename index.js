const http = require('http')
const port = 4000

const requestHandler = (req, res) => {
    console.log(req.url)
    res.end('Hey Node.js Server')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
    if (err) {
        return console.log(':((((', err)
    }
    console.log(`Server listening on ${port}`)
})

