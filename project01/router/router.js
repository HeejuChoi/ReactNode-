const express = require('express') // router가 express안에 있어서 express를 가지고 와야함 
const router = express.Router() // express안에 router라는 기능 사용하겠다. 

// DB 세팅
const mysql = require('mysql') //DB 등록 : mysql을 가지고 와서 사용하겠습니다. 

let conn = mysql.createConnection({   // 이코드가 실행되는 순간 DB로 감 
    // -> 아래 정보를 보고 승인되면 conn이라는 변수를 쓰면 mysql 쓸 수 있음 
    host : "127.0.0.1",
    user : "root",
    password : "gjaischool",
    port : "3306",   // 기본적으로 이 번호로 설정됨
    database : "nodejs_db"
})

router.get('/', (req, res) => {
    console.log('happy hacking!')
})

module.exports = router // router를 쓰기 위해 모듈로 만들어줌