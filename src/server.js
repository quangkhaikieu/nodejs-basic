// Khai báo express
import express from 'express'
import configViewEngine from './configs/viewEngine';
import 'dotenv/config'

// Gọi  để sử dụng express
const app = express()

// Set port của trang
const port = process.env.PORT || 3000

configViewEngine(app)

// Tạo routes
app.get('/', function(req, res) {
  res.render('test.ejs')
});

app.get('/about', (req, res) => {
  res.send(`I'm QuangKhaiKieu`)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})