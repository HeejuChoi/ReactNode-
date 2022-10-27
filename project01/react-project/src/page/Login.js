import React, { useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const idRef = useRef()
  const pwRef = useRef()

  const navigate = useNavigate();

  // event를 정하지 않고 실행하면 form 태그가 그냥 다른 곳으로 보내버림 
  const handleLogin = (event) => {
    console.log('handleLogin')

    // form태그가 다른 페이지로 이동하지 못하도록 막는 기능 
    event.preventDefault()

  let userData = {
    id : idRef.current.value,
    pw : pwRef.current.value
  }
  
  // axios를 이용해서 데이터 서버로 보내기
  axios.post('http://127.0.0.1:3001/loginData',{
    user : userData
  })
  // 성공한다면 아래 함수로 보내주세요
  // Login에서 실패를 해도 then으로 옴 (어쨌든 sql문 등을 돌았기 때문에)
  . then((res) => {     // res 매개변수 -> router에서 보낸 json?
    if (res.data.result == "success") {
      console.log('성공', res.data.result) // res.data.result -> router에서 나온 result 출력
      alert('로그인에 성공하셨습니다!')  
      navigate('/')  // 확인 누르면 메인으로 이동한다. 
    } else {
      console.log('실패', res.data.result) // res.data.result -> router에서 나온 result 출력
      alert('로그인에 실패하셨습니다!')  
      // 로그인 창 뜨도록 따로 경로 지정안함 
    }
    
  

})
  // 실패한다면 아래 함수로 보내주세요
  . catch(() => {console.log('실패')})

}



  return (
    <div>
      <h3>로그인</h3>
      <form onSubmit={handleLogin}>
        <input type="text" ref={idRef} name="ID" placeholder='ID를 입력하시오'></input><br/>
        <input type="password" ref={pwRef} name="PW" placeholder='PW를 입력하시오'></input><br/>
        <input type="submit" value='로그인'></input>
      </form>
    </div>
  )
}

export default Login
