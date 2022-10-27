import React, { useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Join = () => {
  // useRef : DOM 요소를 가지고 오는 것 / getElementbyID 와 같은 것 
  // 아래 태그에도 넣어준다. 
  const idRef = useRef()
  const pwRef = useRef()
  
  const navigate = useNavigate();
  
  // event를 정하지 않고 실행하면 form 태그가 그냥 다른 곳으로 보내버림 
  const handleJoin = (event) => {
    console.log('handleJoin')

    // form태그가 다른 페이지로 이동하지 못하도록 막는 기능 
    event.preventDefault() 

    // current는 ref가 있는 태그가 뭔지 말해주는 것? / target같은 느낌 
    console.log(idRef.current.value)
    console.log(pwRef.current.value)

    let userData = {
      id : idRef.current.value,
      pw : pwRef.current.value
    }

    // axios를 이용해서 데이터 서버로 보내기
    // axios.post(보낼주소,{보낼데이터})
    // user는 백에서 사용할 이름 
    // 이걸 통해 /joinData 라우터로 이동
    axios.post('http://127.0.0.1:3001/joinData',{
      user : userData
    })
    // 성공한다면 아래 함수로 보내주세요
    . then((res) => {     // res 매개변수 -> router에서 보낸 json?
      console.log('성공', res.data.result) // res.data.result -> router에서 나온 result 출력
      alert('회원가입에 성공하셨습니다!')  
      navigate('/')  // 확인 누르면 메인으로 이동한다. 

  })
    // 실패한다면 아래 함수로 보내주세요
    . catch(() => {console.log('실패')})

  }

  return (
    <div>
      <h3>회원가입</h3>
      <form onSubmit={handleJoin}>
        <input type="text" ref={idRef} name="ID" placeholder='ID를 입력하시오'></input><br/>
        <input type="password" ref={pwRef} name="PW" placeholder='PW를 입력하시오'></input><br/>
        <input type="submit" value='가입신청'></input>
      </form>
    </div>
  )
}

export default Join
