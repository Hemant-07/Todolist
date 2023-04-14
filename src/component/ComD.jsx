import React from 'react';
import  {FirstName,LastName}  from '../component/Demo';

const ComD =() =>{
  return (
    <div>
    <FirstName.Consumer>
     {(fname)=>{

     
      return (

      
      
  

        <LastName.Consumer>
          {(lname)=>{

          return(


          
     

       <h1> the name is {fname} {lname}</h1>
          );
          }
        
          }
      
        </LastName.Consumer>
       
);
       
    
     }}

     
    </FirstName.Consumer>
    </div>
  );
};

export default ComD;
