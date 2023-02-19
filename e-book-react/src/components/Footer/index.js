import { Component } from "react";
import "./style.css";

export default class Footer extends Component {
    render() {
        return (
            <div className="footer-basic" >
                <footer>
                    <ul className="list-inline">
                        <li className="list-inline-item"><a href="/">Home</a></li>
                        <li className="list-inline-item"><a href="/aboutUs">About</a></li>
                        <li className="list-inline-item"><a href="/terms">Terms & Privacy Policy</a></li>
                        <li className="list-inline-item"><a href="/contact">Contact Us</a></li>
                    </ul>
                    <p className="copyright"><b>Team-1 Capgemini © 2023</b></p>
                </footer>
            </div>
        )
    }
}