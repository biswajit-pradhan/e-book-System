import { Component } from "react";
import {Navigate} from "react-router-dom";
import Child from "./Child";

class Parent extends Component{
    constructor(props){
        super(props);
        this.state={
            mapData:[
                {id:1,name:"John"},
                {id:2,name:"Bob"}
            ],
        };
    }
    handleClick=()=>{
        this.setState({redirect:true});
    };

    render(){

        if(this.state.redirect){
            return <Navigate to="/child"/>;
        }
        return (
            <div>
                <h1>Inside Parent</h1>
                <Child data={this.data}/>
            </div>
        )
    }
}
export default Parent;