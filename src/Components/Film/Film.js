import { Component } from "react";

class Film extends Component{

    state ={
        configFilmApi:{
            method: 'GET',
            url: "http://www.omdbapi.com/?apikey=58ed57ce&s=marvel"
        },
        filmData : null
    }

    componentDidMount = async () => {
        this.getData()
        console.log(this.state)
    }
    componentDidUpdate = async (prevProps, prevState) =>{
       console.log(this.state)
    }

    render(){
        return(
            <section id="film-section">
                 film here..       {
                    
                    this.state.filmData === null ?'no data film here' :
                    this.state.filmData.map((data, index)=>{
                        return(
                            <div className="wrapper" key={index}>
                                <h1> {data.Title} </h1> </div>
                        )
                    })
                 }
                 {/* <input type="text" placeholder="search your movie here"> </input> */}
            </section>
        )
    }

    getData = async () => {
        await fetch(this.state.configFilmApi.url)
        .then(response => response.json())
        .then(result =>{
           this.setState({
                filmData : result.Search
           })
        })
        .catch(err =>{
            console.log(err)
        })
    }
}

export default Film