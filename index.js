var Hapi = require('hapi');

var serverOptions = {
  views: {
    engines: {
      'slm': require('slm')
    },
    basePath: __dirname,
    path: './views',
    compileOptions: {
      basePath: __dirname + '/views',
      useCache: false
    },
    isCached: false
  }
}

var server = new Hapi.Server(3000, serverOptions);

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
