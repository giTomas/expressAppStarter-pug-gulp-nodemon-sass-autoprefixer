const express    = require('express');
const app        = express(app);
const bodyParser = require('body-parser');
const path       = require('path');
const pug        = require('pug');
const port       = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
const ip         = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
const router     = express.Router();

//CONFIG------------------------------------------------------------------------
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
app.set('views', './views');
app.set('view engine', 'pug');
app.use( "/public", express.static(path.join(__dirname + '/public')));

//ROUTES------------------------------------------------------------------------

app.listen(port, ip, () => console.log('App is listening on port ' + port + ' ip: ' + ip));
