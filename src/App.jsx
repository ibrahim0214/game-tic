import { useState } from 'react'


function Square(){
  const [value, setValue] = useState('');

  function hendleClick() {
    setValue('X');
  }

  return <button className='square' onClick={hendleClick}>{value}</button>;
}


export default function Board() { 
  return (
    <div className='board'> 
    <Square/>
    <Square/>
    <Square/>
    <Square/>
    <Square/>
    <Square/>
    <Square/>
    <Square/>
    <Square/>
    </div>
  )
}

 
