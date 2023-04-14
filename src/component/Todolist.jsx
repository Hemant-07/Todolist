import React, { useState } from 'react';
import "../web/Style.css";


const Todolist =() => {


    const[inputList,setInputList] = useState("")

    const [Items,setItems] =useState([])

    const tl = (event) => {
        setInputList(event.target.value)
    }

    const cl  = () => {
        setItems((oItems) =>{
            return[...oItems,inputList]
        })

        setInputList("")
    }
  return (
    <section>

<div className="main">
    <div className="m1">
        <br />
        <h1>Todo List</h1>
        <br />
        <input type="text"  placeholder='Add a item' onChange={tl} value={inputList}/>
        <button onClick={cl}>+</button>
        <ol>
            {/* <li>{inputList}</li> */}

           {

           Items.map(( ival ) => {
           
         
        
                return  <li>{ival}</li>
            })}


        </ol>
    </div>
</div>
    </section>
  );
};

export default Todolist
