import React,{Component} from "react"
import Carousel from "./Carousel"


export default class App extends Component{
    state={
        banners:[]
    }

    componentDidMount(){
        this.fetchData("banners");
    }

    fetchData=async (endpoint)=>{
        const response = await fetch(`http://localhost:4000/${endpoint}`);
        const obj = await response.json();
        this.setState({[endpoint]:obj})
    }

    render(){
        const {banners}=this.state;
        return(
            <div className="container-md">
                <Carousel banners={banners}/>

            </div>
            
        )
    }


}