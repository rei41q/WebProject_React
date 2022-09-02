import {Component} from "react";

class ClassComponents extends Component{
    state = {
        type: null,
        number: 0
    }

    constructor(props){
        super(props)
        console.log(this.state)
    }
    render(){
        return(
            <>
            <div> react Class Components</div>
            <div> <button id ="submit-click" onClick={
            this.increaseNumber
            }>       click </button> 
  </div>
         
         </>
        )
    }
    
   
    increaseNumber(){
      alert("Class button");
    }
}

export default ClassComponents