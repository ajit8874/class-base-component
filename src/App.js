// import logo from './logo.svg';
import './App.css';
import React from 'react'
// import { applyMiddleware } from 'redux';
import Student from './Student'
import User from './User'
class  App extends React.Component {

  componentWillMount() {
    console.log("component willmount function");
  }
  constructor(){
    console.log("constructor function")
    super();
    this.state={
      data:"ajit"
    }
  }

  componentDidMount() {
    console.log("component did mount function");
  }
  updateData() {
    console.log("update function")
    this.setState(
      {data:"singh"}
    )
  }
  shouldComponentUpdate() {
    console.log("should Component update function",this.state.data);
    return true;
  }

  componentDidUpdate() {
    console.log("component didUpdate function");
  }
  

  // componentWillReceiveProps() {
  //   console.log("Component will Recieve Props function")
  // }
  


    render() {
      console.log("render function ")
      return (
        <div className="App">
            {
              this.state.data ? <Student />:null
            }
            <h1>{this.state.data}</h1>
            <User />

            <button onClick={()=>this.updateData()}>update Button</button>
            <button onClick={()=>this.setState({data:!this.state.data})}>Toggle Data</button>
        </div>
      );

    }
  
  
}

export default App;
