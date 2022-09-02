import { Component } from "react";

class Substraction extends Component {
  state = {
    count: 0,
    merdeka: true,
  };

  render() {
    return (
      <div style={{ border: "1px solid black", padding: "10px" }}>
        <div>Counting</div>
        <div>{this.state.count}</div>
        <div>{this.state.merdeka.toString()}</div>
        <button
        
          onClick={() => {
            (this.state.count>=0) ? 
            this.setState({
              count: this.state.count - 1,
              merdeka: !this.state.merdeka,
            }) : <div></div>;
          }}
        >
          Tambah
        </button>
      </div>
    );
  }
}

export default Substraction;
