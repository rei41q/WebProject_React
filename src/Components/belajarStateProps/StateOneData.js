
import { Component } from "react";
import PropsExample from "./PropsExample";

let diganti=true
class StateOnedata extends Component{
    constructor(props){
        super(props)
        this.state = {
            makanan : "bakso"
        }
    }
    gantiMakanan = (makananBaru) => {
        if(diganti === true){
            diganti = false
        this.setState({
            makanan : makananBaru
        })
        }
        else{
            diganti = true
            this.setState({
                makanan : "bakso"
        })
        }
    }
    render(){

        return(
            <>
            <div>
                <h1> { this.state.makanan }</h1>
            </div>
            <div>
                <button onClick={() =>{
                    this.gantiMakanan("soto")
                }}> ganti makanan state</button>
                <PropsExample makanan={this.state.makanan} gantiMakanan={this.gantiMakanan}/>
            </div>
            </>
        )
    }
}

export default StateOnedata