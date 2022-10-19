const  express = require ( "express" );
const path = require('path');

const  app = express ( );

app.set( "view engine", "ejs" );
app.set('views', 'views')

const homepage = require("./routes/homepage")

app.use(express.static(path.join(__dirname, 'public')))

app.use(homepage)


app.listen(3000);