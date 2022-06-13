const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars')
const path = require('path');
const app = express()

// Settings 
app.set('port', 3000, process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    helpers: {
        lenguage: function(v1, v2, options) {
            if(v1 === v2) {
              return options.fn(this);
            }
            return options.inverse(this);
          }
    }
    
}))
app.set('view engine', '.hbs')  



// middlewares  
app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Archivos estaticos

app.use(express.static(path.join(__dirname, '/public')))


// Exportar los end points

app.use("/", require('./routes/home'))
app.use("/poke", require('./routes/pokemonApi'))


app.listen(app.get('port'), () =>console.log("Server on in port: ", app.get('port')))


