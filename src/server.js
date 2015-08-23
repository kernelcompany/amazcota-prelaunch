'use strict';

/*!
 *
 * Server file
 */


import express from 'express';
import debug from './lib/debug';
import Home from './controllers/Home';
import swig from 'swig';


let server = express();

// Templates
//
server.engine('html', swig.renderFile);
server.set('view engine', 'html');
server.set('views', __dirname + '/views');

// Public
//
server.use(express.static(__dirname + '/public'));

var h = new Home(server, '/');
    h.dispatch();


server.listen(3000, () => {
  debug.info('Server is listening at: %s', 3000);
});
