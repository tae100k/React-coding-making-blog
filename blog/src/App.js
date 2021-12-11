/*eslint-disable */
import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'; //리액트 내의 내장함수를 쓰려고 import
function App(){
 
  let [글제목,글제목변경] = useState(['끝말잇기 게임', '계산기', '숫자 야구 게임']);
  let [따봉, 따봉변경] = useState(0);
  let [modal, modal변경] = useState(false);
  let [btnTest, btnTestFunc] = useState(false);
  let [누른제목인덱스, 누른제목인덱스변경] = useState(0);

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
      {글제목.map((a, i)=> {
        console.log(`i:${i} a:${a}`)
        return (
          <div className="list">
            <h3 onClick={()=>{누른제목인덱스변경(i)}}>{a} <span onClick={()=>{따봉변경(따봉 +1);}}>👍</span>
            {따봉}</h3>
            <p> 2월 17일 발행</p>
            <hr/>
        </div>)
      })
    }

      

  <button onClick={() => { btnTest ? btnTestFunc(false) : btnTestFunc(true)}}>버튼</button>
    { btnTest ? <Modal 글제목={글제목} 누른제목인덱스={누른제목인덱스}/>: null}
      
    </div>
  )
}

function Modal(props) {
  console.log(props)
  console.log(props.누른제목인덱스)
  return (
    <div className='modal'>
      
      <h2>{props.글제목[props.누른제목인덱스]}</h2>
      <p>내용</p>
      <p>날짜</p>
    </div>
  )
}

export default App;
