const express = require('express');
const path = require('path');
const morgan = require("morgan");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const app = express();
const pagesRouter = require('./routes/pages');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');


dotenv.config({path: './.env'});




app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static('public'));
app.set('view engine', 'ejs');
//app.use('/', pagesRouter);
app.use('/user', registerRouter);
app.use('/user', loginRouter);


app.get("/", (req, res)=> {
    res.render("index")
})

app.get("/contact", (req, res)=> {
    res.render("contact-us")
})


app.get("/plots/buy", (req, res)=> {
    res.render("contact-us")
})

app.get("/projects/project", (req, res)=> {
    res.render("project-view")
})







const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});


