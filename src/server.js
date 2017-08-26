var express = require('express')
require('dotenv').config()
var app = express();

const db = require('./db')
app.get('/api/user/:email', (req, res, next) => {
    db.query('SELECT * from public.user where primary_email = $1',[req.params.email], (err, qres) => {
        if (err) {
      return next(err)
    }
    res.send(qres.rows[0])
    })
})


app.get('*', function (req, res) {
    res.send("hello from " + process.env.APP_NAME)
})

let port = process.env.PORT || 3000
app.listen(port, function() {
    console.log("listening to this joint on port "+ port)
})


