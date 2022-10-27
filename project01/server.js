const express = require("express")
const app = express() // app이라는 이름으로 express를 사용하겠다
const router = require('./router/router') // ex) 믹서기 콘센트를 꽂음

// (1) 경로처리를 하는 모듈 : path  
// 여러 환경 때문에 경로를 단순히 문자열로 접근하면 프로그램이 특정 운영체제에서만 돌아간다.
// 이러한 위험을 방지해주는 모듈 => path
// 리액트를 띄워줄 때 필요 

const path = require ('path')

// (2) 외부에 있는 정보들을 요청할 때 사용하는 모듈 : cors
// 데이터를 주고받을 때 필수적으로 등록할 것 !! 

const cors = require ('cors')

// 정적인 파일을 쓸 때 이 안에 있는 애를 쓸게요
// 주소 뒤에 운영체제에 맞게 더해주세요 __dirname(현재 내가 있는 곳)에서
// build라는 폴더 안에 있는 static파일을 사용할게요 ()
app.use(express.static(path.join(__dirname, 'react-project','build')))


// 값을 주고 받을 때 필요함
// 대부분 json형식으로 많이 주고 받게 됨
app.use(cors())
// json형식 사용하겠습니다. 
app.use(express.json())

app.use(router) // ex) 믹서기 사용
app.listen(3001)