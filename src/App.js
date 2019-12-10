import React, { Component } from 'react';
import './App.css';
import ListComponent from './List/List';
import Submit from './Submit /Submit';


class App extends Component {


// Original React State

  state = {

  list : [

    {task:'example_1'},
    {task:'example_2'},
    {task:'example_3'},
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

 

// this.setState(state => {

// const list = state.list.push(state.value);

// return {

//   list,
//   value: '',


// }})


   event.preventDefault()

}





// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


  
    render() {

  // Dynamic Components 



  
    const taskList = this.state.list.map((l,index)=>{

      return <ListComponent 
      task={l.task} 
      clicked={() => this.deleteTaskHandler(index)} 

      key={index}/>
    })
  

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


      return (
        <div className="App">
         
   <h1>To Do List</h1>
        <br></br>


      <Submit submit = {this.submitHandler} value = {this.state.value} changed = {this.inputChangeHandler}/>
      
     {taskList}
        </div>
      );
    }
  }
  
  export default App;