import { Component } from "react";

export default class Child extends Component{
    render(){
        return (
            <div>
                <h2>{this.props.data}</h2>
                <h3>inside child</h3>
            </div>
        )
    }
}