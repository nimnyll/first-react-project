import {useState} from 'react';
function Buton({value, onClickFunction}){
  return(
  <button className="button-colk" onClick={onClickFunction}>{value}</button>)
}

export default Buton;