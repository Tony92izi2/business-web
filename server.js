//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/index.html'));
});

// Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080); ok
// use port 3000 unless there exists a preconfigured port
console.log("running on : http://localhost:8080")
app.listen(process.env.port || 8080);