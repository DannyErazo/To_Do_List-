import React from 'react';
import './Submit.css';



const Submit =(props)=>{


return(

<div class = 'Sub' > 
    <form className = 'form' onSubmit = {props.submit}>


<textarea value = {props.value} onChange = {props.changed}/>
<br></br>
<input type='submit' value = 'submit' className='input'/>

      





    </form>


    


</div>

)}


export default Submit; 
