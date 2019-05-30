var express = require('express')
var cors = require('cors')
var appRouter = require('./routes/app-routes')
var https = require('https')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var helmet = require('helmet')
var http = require('http');
var WebSocketServer = require('ws');
var app = express()
app.use(helmet())
app.use(bodyParser.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
class Message {
  constructor(content, isBroadcast, sender) {
    this.content = content
    this.isBroadcast = isBroadcast
    this.sender = sender
  }
}
function createMessage(content, isBroadcast = false, sender = 'NS') {
  return JSON.stringify(new Message(content, isBroadcast, sender));
}
const port = 3000
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  next()
})
app.use('/', appRouter)
https.createServer(app).listen(port, () => console.log(`Application is listening on port ${port}!`))
var server = http.createServer(function (request, response) {
  // process HTTP request. Since we're writing just WebSockets
  // server we don't have to implement anything.
});

server.listen(1337, function () {
  console.log('webSocket server at 1337')
});
// WebSocket server
wsServer = new WebSocketServer.Server({server});

wsServer.on('connection', function (connection) {
  // This is the most important callback for us, we'll handle
  // all messages from users here.
  // console.log(wsServer.clients)
  connection.on('message', function (msg) {
    const message = JSON.parse(msg);

        setTimeout(() => {
            if (message.isBroadcast) {

                //send back the message to the other clients
                wsServer.clients
                    .forEach(client => {
                        if (client != connection) {
                            client.send(createMessage(message.content, true, message.sender));
                        }
                    });

            }

            connection.send(createMessage(`You sent -> ${message.content}`, message.isBroadcast));

        }, 1000);
  });
  connection.on('error', (err) => {
    console.warn(`Client disconnected - reason: ${err}`);
  })

  connection.send(createMessage('Hi there, I am a WebSocket server'));
  connection.on('close', function (connection) {
    // close user connection
  });
});
console.log('server started...')
module.exports = app
