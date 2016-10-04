
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var cors = require('cors');
 

app.use(cors());
app.use(bodyParser.json());
  
// dummy users, in real life these would be in a database or something
var users = [{
        id: "txgw35",
        username: "test",
        password: "pwd"
    },
    {
        id: "xvj2f2",
        username: "john",
        password: "doe"
    }
    ];
 
app.get('/', function(req, res) {
  res.send('Hello!');
});

app.post('/login', function(req,res){
    console.log("test");
    console.log(req.body);
    var u = users.find(function(element){
         return (element.username === req.body.username) && (element.password === req.body.password);        
    });

    if(u !== undefined)
    {
        return res.json({id: u.id, username: u.username});
    }
    else
    {
        return res.sendStatus(401);
    }
})
 
// Start the server
app.listen(8200, function() {
        console.log('Node app is running ');
    });
