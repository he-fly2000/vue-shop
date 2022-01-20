const express = require('express')
const compression = require('compression')
const app = express()

// 一定要把这一行代码，写到静态资源托管之前
app.use(compression())
app.use(express.static('./dist'))
app.listen(80,() => {
    console.log('成功')
})