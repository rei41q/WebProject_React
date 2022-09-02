function FunctionComponents() {

    function increaseNumber(){
        console.log("function button")
    }
    return(
        <>
            <div> react function Components</div>
            <div> <button id ="submit-click" onClick={
            increaseNumber
            }> </button> 

         click </div>
         
         </>

    )
}

export default FunctionComponents;