import React from 'react';



const Submit =(props)=>{


return(

<div class= 'submission'> 
    <form onSubmit = {props.submit}>
<label>  

<textarea value = {props.value} onChange = {props.changed}/>
<input type='submit' value = 'submit'/>
</label>
      





    </form>


    


</div>

)}


export default Submit; 
