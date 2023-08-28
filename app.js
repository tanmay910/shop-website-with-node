const http = require('http');
const fs = require('fs');
const routes = require('./routes');
const express = require('express');

const app = express();
const bodyParser= require('body-parser');
const exphbs = require('express-handlebars');
const mongoConnect = require('./utility/databases').mongoconnect;



// to filter out routes use extra argument in .use method

//this excutes always as all routes has '/' in its routes
// so we should use routes in proper sequesnces form top to bottom
const adminRoutes= require('./routes/admin');
const shopRoutes= require('./routes/shop');
const path=require('path');
const rootdir= require('./utility/path');
const error=require('./controllers/404controller');



// app.engine('handlebars',exphbs());
// app.set('view engine','handlebars');
// app.set('views','views');

app.set('view engine', 'ejs');
 app.set('views','views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes.routes);
app.use(shopRoutes);

app.use(error.get404);

// res.render is used for templates while sendfile is set for html



mongoConnect(()=>{
    app.listen(3000);

})

