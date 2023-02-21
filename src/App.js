import React, { Component } from "react";
import './App.css';
class App extends Component{

  employeeData = {
    fullName: 'El John P. Manjero',
    age: '26',
    birth: 'october 10 1996',
    salary: '10000',
    designation: 'Software Engineer',
    image: './image.png',
    department: 'IT department' 
  }
    hoverInfo = () =>{
      alert("Employee Details \n \n Name: "+ this.employeeData.fullName+"\n Age: "+ this.employeeData.age+"\n birth Date: "+ this.employeeData.birth+"\n salary: "+ this.employeeData.salary
      +"\n designation: "+ this.employeeData.designation+"\n department: "+ this.employeeData.department);
    }
    
  render (){
    return(
      <div>
          <div className="divStyle">
            <div>
              <h1>1. Assignment</h1>
            <img src={this.employeeData.image}></img>
            <h1 onMouseOver={this.hoverInfo}> {this.employeeData.fullName}</h1>
            <p>{this.employeeData.designation}</p>
            </div>
          </div>
      </div>
    );
  }
}
export default App;