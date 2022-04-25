const http = require('http')

const PORT = process.env.PORT || 3000
const app = require('./index')
const server = http.createServer(app);

server.listen(PORT)
 console.log(`Server running on ${PORT}`)