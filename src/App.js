import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import Buton from './button/button';
import Tablo from './tablo/tablo';

  let ButonValue = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "*", "/", "-", "+", "=", "C", "CE"];
  let currentAction = "";
  let currentValue = "";
  
function App() {
  let [serenValue, setserenValue] = useState("");
  

  function click1(e){
    if (!(isFinite(+ serenValue) && +serenValue === parseInt(+serenValue, 10))) {
      serenValue="";
    }
    setserenValue(serenValue + e.target.innerHTML)
  }

  function actions(e){
    currentAction = e.target.innerHTML;
    console.log(serenValue);
    currentValue = +serenValue;
    setserenValue(e.target.innerHTML)
  }


  // currentValue + +serenValue
  function getResald(){
    let resalt;
    if (currentAction == "+"){
      resalt = currentValue + +serenValue
    };
    if (currentAction == "-"){
      resalt = currentValue - +serenValue
    }
    if (currentAction == "*"){
      resalt = currentValue * +serenValue
    }
    if (currentAction == "/"){
      resalt = currentValue / +serenValue
    }
    setserenValue(resalt)
  }

function c (){
  let c;
    c = 0;
    setserenValue("")
    currentAction = c 
    currentAction = c
}

function ce (){
  let ce;
    ce = 0;
    setserenValue("")
  
}

 return(
    <div className="colk">
      <Tablo value={serenValue}></Tablo>
      <div className="div-colk">
        {
          ButonValue.map((butonValue) => {
            return <Buton value = {butonValue} onClickFunction={butonValue =="=" ? getResald :
            butonValue =="+" || butonValue =="-" || butonValue =="/"|| butonValue =="*" ? actions :
             butonValue =="C" ? c : butonValue =="CE" ? ce : click1
          }></Buton>
          })
        }
      </div>
    </div>
  )
}

 


export default App;
