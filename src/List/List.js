import React from 'react';
import './List.css';


const ListComponent=(props)=>{



return (


 <div class = 'style'>
   
    <p>{props.task}</p>
   
   <button id = 'button' onClick={props.clicked}>DONE</button>
    </div>
)



}

export default ListComponent; 