const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const mongoose = require("mongoose");
const port = Number(process.env.PORT || 3000);
const app = express();

const mongooseUrl = "mongodb://dsum:User1@ds139735.mlab.com:39735/devmoutain_alumni";

app.use( bodyParser.json() );
app.use(express.static(`${__dirname}/public`));

passport.serializeUser(function(user, done) {
    done(null, user);
})

passport.deserializeUser(function(obj, done){
    done(null, obj);
})

app.use( passport.initialize());
app.use( passport.session());


mongoose.connect(mongooseUrl);
mongoose.connection.once(`open`, () =>{
    console.log(`connected to mongo at ${ mongooseUrl }`)
})


app.listen(port, () =>{
    console.log(`app is listening on ${ port }`);
});