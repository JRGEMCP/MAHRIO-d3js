
process.env.NODE_ENV="development"

require('mahrio').runServer(process.env, __dirname)
    .then( function(server) {

        server.route({
            path: '/',
            method: 'GET',
            handler: function(req, rep){
                rep('Your d3.js visual site here!');
            }
        });


        server.route({
            path: '/stats',
            method: 'GET',
            handler: function(req, rep){

                environment_vars = "<pre>" + JSON.stringify(process.env, null, 4) + "</pre>";

                headers = "<pre>"+JSON.stringify(req.headers, null, 4)+"</pre>";

                rep(environment_vars + headers)
            }
        })
    });
