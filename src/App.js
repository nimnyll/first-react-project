import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import Buton from './button/button';
import Tablo from './tablo/tablo';

function App() {
 return(
    <div class="colk">
      <Tablo></Tablo>
      <div class="div-colk">
        <Buton value={1}></Buton>
        <Buton value={2}></Buton>
        <Buton value={3}></Buton>
        <Buton value={4}></Buton>
      </div>
      <div class="div-colk">
        <Buton value={5}></Buton>
        <Buton value={6}></Buton>
        <Buton value={7}> </Buton>
        <Buton value={8}></Buton>
      </div>
      <div class="div-colk">
        <Buton value={9}></Buton>
        <Buton value={0}></Buton>
        <Buton value={"+"}></Buton>
        <Buton value={"-"}></Buton>
      </div>
      <div class="div-colk">
        <Buton value={":"}></Buton>
        <Buton value={"*"}></Buton>
      </div>
    </div>
  )
}

 


export default App;
