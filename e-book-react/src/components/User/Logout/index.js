import { Component } from "react"
import LogIn from "../LogIn";

export default class  Logout extends Component{

    constructor(props){
        super(props);

        this.state={

        }
    }

    componentDidMount(){
        localStorage.clear();
    }

    render(){
        return(
            <LogIn />
        )
    }
}