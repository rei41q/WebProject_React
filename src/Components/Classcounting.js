import { Component } from "react";

class Classcounting extends Component {
  state = {
    title: null,
    count: 0,
    merdeka: true,
  };

  render() {
    return (
      <div style={{ border: "1px solid black", padding: "10px" }}>
      
        <div>{this.state.count}</div>
        <div>{this.state.merdeka.toString()}</div>
  
        <button
        
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              merdeka: true,
              title: "tambah"
            })
          }}
        >
          Tambah
          
        </button>

        <button onClick={() => {
            if(this.state.count>0){
                this.setState({
                    count: this.state.count - 1,
                    merdeka: false,
                    title: "kurang"
                  })
            }
            
        //   (this.state.count>0) ? 
        //   this.setState({
        //     count: this.state.count - 1,
        //     merdeka: false,
        //   }) : <></>
        }}
      >
        Kurang   
      </button>
      {this.state.title}
      </div>
    );
  }
}

export default Classcounting;
