var express = require('express')
var app = express()

var routes = require('./routes')

app.use('/', routes.home)
app.use('/session', routes.session);
app.use('/test', routes.test);



app.listen(3000, () => {
	console.log('app start')
})