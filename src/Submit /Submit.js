import React from 'react';
import './Submit.css';



const Submit =(props)=>{


return(

<div class = 'Sub' > 
    <form onSubmit = {props.submit}>
<label>  

<textarea value = {props.value} onChange = {props.changed}/>
<input type='submit' value = 'submit'/>
</label>
      





    </form>


    


</div>

)}


export default Submit; 
