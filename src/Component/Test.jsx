import React from 'react'
import { useState } from 'react'
import './Test.css'
import dice1 from './images/dice1.png'
import dice2 from './images/dice2.png'
import dice3 from './images/dice3.png'
import dice4 from './images/dice4.png'
import dice5 from './images/dice5.png'
import dice6 from './images/dice6.png'
const Test = () => {
  let massive = [dice1 , dice2 , dice3 , dice4 , dice5 ,dice6]
  
const [main1 , setMain] = useState(dice1)
const [main2 , setMain2] = useState(dice6)
function one(){

  setMain( massive[Math.floor(Math.random() * massive.length)])
}
function two(){

  setMain2( massive[Math.floor(Math.random() * massive.length)])
}


  return (
    <div className='Dice'>
        <img onClick={one} src={main1} alt='dice'/>

        <img onClick={two} src={main2} alt='dice'/>
    </div>
  )
}

export default Test