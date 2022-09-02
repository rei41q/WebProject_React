const Button = (props) => {
    const { text = "Save", color = "white" } = props;
  
    return (
      <button
        style={{
          color: color,
          backgroundColor: "green",
          cursor: "pointer",
        }}
      >
        {text}
      </button>
    );
  };
  
  export default Button;