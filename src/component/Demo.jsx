import React, { createContext } from 'react'
import Todolist from "../component/Todolist";


import Accordian from '../component/Accordian';

import ComA   from "../component/ComA";
import Effect from '../component/Effect';

const FirstName = createContext();
const LastName = createContext();

const Demo =() =>{
  return (
    <div>
      <Todolist/>
      <Accordian/>
      <FirstName.Provider  value={'Hemant'} >
       <LastName.Provider value = {'Arora'} >

      <ComA/>
       </LastName.Provider>
      </FirstName.Provider>
      <br />
      <Effect/>
    </div>
  )
}

export default Demo
export {FirstName,LastName}
