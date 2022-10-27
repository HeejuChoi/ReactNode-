const express = require('express') // router가 express안에 있어서 express를 가지고 와야함 
const router = express.Router() // express안에 router라는 기능 사용하겠다. 

// DB 세팅
const mysql = require('mysql') //DB 등록 : mysql을 가지고 와서 사용하겠습니다. 
const path = require('path')

let conn = mysql.createConnection({   // 이코드가 실행되는 순간 DB로 감 
    // -> 아래 정보를 보고 승인되면 conn이라는 변수를 쓰면 mysql 쓸 수 있음 
    host : "127.0.0.1",
    user : "root",
    password : "gjaischool",
    port : "3306",   // 기본적으로 이 번호로 설정됨
    database : "nodejs_db"
})

router.post('/joinData', (req, res) => {
    console.log('joinData 라우터')
    console.log(req.body.user)

    // 입력한 값을 DB로 보내준다
    // 내가 받아온 값을 넣어야하기 때문에 req.body.user.id 형식으로 작성
    let sql = 'insert into member values (?, ?, 3)'
    conn.query(sql, [req.body.user.id, req.body.user.pw], (err, rows)=>{
        if (rows) {
            console.log('회원가입 성공!')
            res.json({
                result : "success",  // result안에 success라는 값이 들어가있는 json파일을 보내줄거다 
            })
        } else {
            console.log('회원가입 실패!')
            res.json({
                result : 'fail'
            })
        }

        res.end()
    })

})

router.post('/loginData', (req, res) => {
    console.log('loginData 라우터')
    console.log(req.body.user)

    // 입력한 값을 DB로 보내준다
    // 내가 받아온 값을 넣어야하기 때문에 req.body.user.id 형식으로 작성
    let sql = 'select * from member where id=? and pw=?'
    conn.query(sql, [req.body.user.id, req.body.user.pw], (err, rows)=>{
        if (rows.length > 0) {
            console.log('로그인 성공!')
            res.json({
                result : "success",  // result안에 success라는 값이 들어가있는 json파일을 보내줄거다 
            })
        } else {
            console.log('로그인 실패!')
            res.json({
                result : 'fail'
            })
        }

        res.end()
    })

})

// 이 윗줄은 서버 라우터
// 서버 log는 monit에 뜸 
// 이 아랫줄은 리액트 라우터 작성 (아래 *를 통해 아래 라우터는 전권을 리액트에게 주겠다는 뜻 )
// 리액트에서 치는 콘솔은 화면 log에 뜸

router.get('*', (req, res) => {
    console.log('happy hacking!')
    // /로 들어오면 아래로 보내주겠습니다. 현재 디렉토리에서 상위폴더로 가서 build폴더의 index.html로 보내주겠다. 
    res.sendFile(path.join(__dirname,"..",'react-project','build','index.html'))
})

module.exports = router // router를 쓰기 위해 모듈로 만들어줌