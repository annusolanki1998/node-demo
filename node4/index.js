const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require('express-handlebars');


const Color = require('color');

const app = express();

app.engine("hbs", expressHbs(
    {
        layoutDir: 'views/layouts/',
        defaultLayout: 'main-layout',
        extname: 'hbs'
    })
);
app.set('view engine', 'hbs');
//app.set('view engine' , 'pug');
app.set('views' , 'views');

const adminData = require('./routes/admin');

const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);

app.use(shopRoutes);

app.use((req, res, next) => {
    //res.status(404).sendFile(path.join(__dirname, 'views', '404.html' ));
    res.status(404).render('404' , {pageTitle: 'Page not found'});
});

app.listen(5000), () => {
    console.log("Server is running on port no. 5000");
};


