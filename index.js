const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const path = require("path")
const router = require("./routes/blog")
const port = 8080

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static("public"))

app.use('/', require(path.join(__dirname, "routes/blog.js")))

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})