var Hapi = require('hapi');
var Slm = require('slm');
var Markdown = require('slm-markdown');

var server = new Hapi.Server(3000);

Markdown.register(Slm.template);

server.views({
  engines: {
    'slm': Slm
  },
  basePath: __dirname,
  path: './views',
  compileOptions: {
    basePath: __dirname + '/views',
    useCache: false
  },
  isCached: false
})

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      reply.view('index', {hello: "word"});
    }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});
