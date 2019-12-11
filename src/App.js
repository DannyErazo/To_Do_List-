import React, { Component } from 'react';
import './App.css';
import ListComponent from './List/List';
import Submit from './Submit /Submit';


class App extends Component {


// Original React State

  state = {

  list : [
   
  ], 

  value: ''
  }


// Group of Handlers 

deleteTaskHandler=(index)=>{

const taskList= [...this.state.list];
taskList.splice(index,1);

this.setState(

  {list:taskList});
  }
  

inputChangeHandler=(event)=>{this.setState({value:event.target.value})}


submitHandler=(event)=>{

  // what should happen to the state once the input is submitted ? 

 

this.setState(state => {

  const list = [...state.list, {task:state.value}];
console.log(list);

return {

  list,
  value: ''


};})


   event.preventDefault()

}





// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


  
    render() {

  // Dynamic Components 




  const copy = [...this.state.list];
  
  let  show = copy.map((l,index)=>{

    
    return (<ListComponent 
    task={l.task} 

    clicked={() => this.deleteTaskHandler(index)} 

    key={index}/>)
  })





  

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


      return (
        <div className="App">
  <div className = 'main'>
  <h1>To Do List</h1>
        <br></br>
      <Submit submit = {this.submitHandler} value = {this.state.value} changed = {this.inputChangeHandler}/>
      
  </div>
  <br></br>
  <div className="task">
  {show}
  </div>
     
        </div>
      );
    }
  }
  
  export default App;