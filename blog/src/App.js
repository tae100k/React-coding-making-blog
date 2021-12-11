/*eslint-disable */
import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'; //리액트 내의 내장함수를 쓰려고 import
function App(){
 
  let [글제목,글제목변경] = useState(['끝말잇기 게임', '계산기', '숫자 야구 게임']);
  let [따봉, 따봉변경] = useState(0);

   function 제목바꾸기() {
    let newArray = [...글제목];
    newArray[0] = '틱택톡 추천';
    글제목변경(newArray); 
   };

  return (
    <div className="App">
      <div className="black-nav">
        <div>바닐라 JS 프로젝트</div>
      </div>
      <div className="list">
        <h3>{글제목[0]} <span onClick={()=>{
          따봉변경(따봉 +1);
        }}>👍</span>{따봉}</h3><p> 2월 17일 발행</p>
        <button onClick={제목바꾸기}>수정하기</button>
        <hr/>
        </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p> 2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{글제목[2]}</h3>
        <p> 2월 17일 발행</p>
        <hr/>
      </div>
      <Modal/>
      
    </div>
  )
}

function Modal() {
  return (
    <div className="modal">
        <h3>글제목</h3>
        <p> 날짜</p>
        <p> 상세내용</p>
        <hr/>
    </div>

  )
}

export default App;
