import './App.css';
// layout
import Header from './layout/Header';
import Navbar from './layout/Navbar';

// page
import Main from './page/Main';
import Login from './page/Login';
import Join from './page/Join';

// 라우터
import {Routes, Route} from 'react-router-dom';

 

function App() {
  // 1. 고정되어 있는 Header를 하나 제작해라 // 레이아웃
  //     => JS(B)라는 내용의 h3태그
  //     => 클릭 시, 메인창으로 이동 

  // 2. 고정되어 있는 Navbar를 하나 제작하라  // 레이아웃
  //    => 버튼 2개 (로그인, 회원가입)  // 페이지
  //    => 클릭 시 각각 페이지로 이동 
  return (
    <>
    <div>App</div>
    {/* Header 와 Navbar 는 Routes 바깥에 둬서 고정됨(영향을 받지 않음)  */}
      <Header/>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Main/>}></Route>  
      <Route path='/Join' element={<Join/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
    </Routes>
    </>
    
  );
}

export default App;
