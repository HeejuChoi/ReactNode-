const express = require("express")
const app = express() // app이라는 이름으로 express를 사용하겠다
const router = require('./router/router') // ex) 믹서기 콘센트를 꽂음

app.use(router) // ex) 믹서기 사용
app.listen(3001)