import {Component} from "react";

class StateArray extends Component{
    constructor(props){
        super(props)

        this.state = {DaftarMakanan :(
            
        [{
            makanan : "basko"
        },{
            makanan : "nasi ayam"
        }
        ,{
            makanan : "nasi kecap"
        }
        ,{
            makanan : "nasi bubur"
        }
        ,{
            makanan : "nasi ayam"
        }
        ,{
            makanan : "nasi ayam"
        }]
       
        )

        }
      
    }
    render(){
        return(
            <>
             <div style={style.stateStye}>
             {
                this.state.DaftarMakanan.map((data, index) =>{
                    if(index === 1){
                    return( 
                        <div key={index}> <h1> {data.makanan}</h1> </div>
                    )
                    }
                }
                )         
            }
            </div>
            </>
           
        )
    }
}
const style = {
    stateStye:{
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial",
        display: "flex",
        justifyContent: "space-around",
    }
}

export default StateArray;