import React, { Component } from 'react'

class PropsExample extends Component {

  render() {
    return (
        <div style={ styleProps.styleProperties}>    
            <div> Operan state yang menjadi props : {this.props.makanan}</div>
            <button onClick={() =>{
                    this.props.gantiMakanan("soto")
                }}> ganti makanan props (hanya bisa di state) </button>
        </div>
    )
  }
}
const styleProps = {
    styleProperties:{
        margin : "20px 10px 10px 10px",
        border : "1px solid blue",
        padding : "10px 10px 10px 10px"
    }
}

export default PropsExample
