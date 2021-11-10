
import React from 'react'
class Student extends React.Component{
    constructor() {
        super();
    }

    componentWillUnmount() {
        console.log("component will unmount function");
      }
    

    render() {
        return (
            <div>
               <h1>Student component</h1>
            </div>
        )
    }

}



export default Student;