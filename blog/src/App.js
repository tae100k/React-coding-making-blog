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
  let [입력값, 입력값변경] = useState('');

   
   return(
   <div className="App">
    <div className="black-nav">
      <div>바닐라 JS 프로젝트</div>
    </div>
    {글제목.map((a, i)=> {
      return (
        <div className="list" key={i}>
          <h3 onClick={()=>{누른제목인덱스변경(i)}}></h3>
          {a} 
          <span onClick={()=>{따봉변경(따봉 +1);}}>👍</span>
          {따봉}
          <p> 2월 17일 발행</p>
          <hr/>
      </div>)
      })
    }
    
    <div className='publish'>
      <input onChange={(e)=>{입력값변경(e.target.value)}} />
      <button onClick={()=>{
        let 뉴글제목 = [...글제목]
        뉴글제목.push(입력값)
        글제목변경(뉴글제목)
      }}>저장</button>
    </div>
      <Profile/>

    <button onClick={() => { btnTest ? btnTestFunc(false) : btnTestFunc(true)}}>버튼</button>
      { btnTest ? <Modal 글제목={글제목} 누른제목인덱스={누른제목인덱스}/>: null}
        
  </div>
   )
}
function Modal(props) {
  return (
    <div className='modal'>
      
      <h2>{props.글제목[props.누른제목인덱스]}</h2>
      <p>내용</p>
      <p>날짜</p>
    </div>
  )
}

class Profile extends React.Component{
  constructor() {
    super();
    this.state = {name:'kim', age:30};
  }

  changeName = () => {
    this.setState({name:'Park'})
  }

  render() {
    return(
      <div>
        <div>저는 {this.state.name}입니다</div>
        <button onClick={this.changeName}>버튼</button>
      </div>
    )
  }
}


export default App;
