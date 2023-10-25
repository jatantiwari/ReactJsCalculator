import './App.css';
import React, { useState } from 'react';

function App() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [oper, setOper] = useState("")

  const hadleOper = (oper) => {
    let element = document.getElementById('text')
    setOper(oper)
    element.value = first + " " + oper + " " + last
  }
  const handleNums = (num) => {
    if (oper==='') {
      let element = document.getElementById('text')
          let str = first + num;
          if(Number(str)===0){
            setFirst(0)
          }
          else{

            setFirst(str);
          }
          element.value = str + " " + oper + " " + last
    }
    else{
      let element = document.getElementById('text')
          let str = last + num;
          if(Number(str)===0){
            setLast(0)
          }
          else{

            setLast(str);
          }
          element.value = first + " " + oper + " " + str
    }

  }

  const handleEqual = ()=>{
    let element = document.getElementById('text')
    if(first!==''&&last!==''){
      if(oper==='/'&&last!=='0'){
        element.value = 'infinite'
        setFirst('')
        setLast('');
        setOper('')
      }
      else if(oper==='/'){
        let ans = Number(first)/Number(last)
        setFirst(String(ans))
        setLast('');
        setOper('')
        element.value = ans
      }
      else if(oper==='+'){
        let ans = Number(first)+Number(last)
        setFirst(String(ans))
        setLast('');
        setOper('')
        element.value = ans 
      }
      else if(oper==='-'){
        let ans = Number(first)-Number(last)
        setFirst(String(ans))
        setLast('');
        setOper('')
        element.value = ans 
      }
      else if(oper==='*'){
        let ans = Number(first)*Number(last)
        setFirst(String(ans))
        setLast('');
        setOper('')
        element.value = ans
      }
    }
  }
  const handleClear=() =>{
    let element = document.getElementById('text')
    setFirst('')
    setLast('')
    setOper('');
    element.value = ''
  }
  return (
    <div className="App">
      <div className="calculator">
        <div className="inputBox">
          <input className="textBox" id="text" type="text" readOnly />
        </div>
        <div className="btnBox">
          <div className="btn" onClick={() => handleNums('1')}>
            <div className="text">1</div>
          </div>
          <div className="btn" onClick={() => handleNums('2')}>
            <div className="text">2</div>
          </div><div className="btn" onClick={() => handleNums('3')}>
            <div className="text">3</div>
          </div><div className="btn"  onClick={() => handleClear()}>
            <div className="text">C</div>
          </div><div className="btn" onClick={() => handleNums('4')}>
            <div className="text">4</div>
          </div><div className="btn" onClick={() => handleNums('5')}>
            <div className="text">5</div>
          </div><div className="btn" onClick={() => handleNums('6')}>
            <div className="text">6</div>
          </div><div className="btn" onClick={() => hadleOper('/')}>
            <div className="text">/</div>
          </div>
          <div className="btn" onClick={() => handleNums('7')}>
            <div className="text">7</div>
          </div><div className="btn" onClick={() => handleNums('8')}>
            <div className="text">8</div>
          </div><div className="btn" onClick={() => handleNums('9')}>
            <div className="text">9</div>
          </div><div className="btn" onClick={() => hadleOper('*')}>
            <div className="text">*</div>
          </div>
          <div className="btn" onClick={() => handleEqual()}>
            <div className="text">=</div>
          </div><div className="btn" onClick={() => handleNums('0')}>
            <div className="text">0</div>
          </div><div className="btn" onClick={() => hadleOper('+')}>
            <div className="text">+</div>
          </div><div className="btn" onClick={() => hadleOper('-')} >
            <div className="text">-</div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
