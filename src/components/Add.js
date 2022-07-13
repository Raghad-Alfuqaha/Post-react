import {useState} from 'react'
import Card from './Card'  
import './Add.css'

const Add = () => {
  const[names,setNames]=useState([
    {
    
      name: 'kareem',
      age: 31,
      adrress: 'hadyk el aharm',
      phone: '01010987123',
    
    },
    {
     
      name: 'farah',
      age: 24,
      adrress: 'hadyk el aharm',
      phone: '01010987234',
     
    },
    {
   
      name: 'ahmed',
      age: 24,
      adrress: 'hadyk el aharm',
      phone: '01010987234',
     
    },
    {
    
      name: 'mariam',
      age: 20,
      adrress: 'fayesl',
      phone: '01010932123',
     
    },
  ]);
 
    

        

  return (

    <div className='contant'>
   <h1>boys</h1>
<Card namesList = {names} type="men" />


    </div>
  )
}

export default Add
