import React, { Component } from 'react';
import { AddBook } from './publishBook';
import AllBook from './AllBook';
import { BookOnRent } from './bookOnRent';
import LogIn from '../User/LogIn';

class PublisherDashBord extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showComponent1: false,
      showComponent2: true,
      // showComponent3: false,
      errors: {},
      msg: "",
      isLoggedIn: false
    };
    this.toggleShowComponent1 = this.toggleShowComponent1.bind(this);
    this.toggleShowComponent2 = this.toggleShowComponent2.bind(this);
    // this.toggleShowComponent3 = this.toggleShowComponent3.bind(this);
  }


  componentDidMount() {
    let username = localStorage.getItem('userName');

    if (username === null || username === undefined)
      this.setState({ isLoggedIn: false })
    else
      this.setState({ isLoggedIn: true })
  }




  toggleShowComponent1() {
    this.setState(prevState => ({
      showComponent1: !prevState.showComponent1
    }));

  }

  toggleShowComponent2() {
    this.setState(prevState => ({
      showComponent2: !prevState.showComponent2
    }));
  }

  // toggleShowComponent3() {
  //   this.setState(prevState => ({
  //     showComponent3: !prevState.showComponent3
  //   }));
  // }

  render() {
    const { errors, msg } = this.state;
    return (
      !this.state.isLoggedIn ? <div ><LogIn /></div> :
        <div className="dashboard"><br />
          <div className="dashboard-buttons">
            <button type="button" className='btn btn-primary' onClick={this.toggleShowComponent1}>{this.state.showComponent1 ? "Add Book" : "Add Book"}</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className='btn btn-primary' onClick={this.toggleShowComponent2}>{this.state.showComponent2 ? "My Book" : "My Book"}</button>&nbsp;&nbsp;&nbsp;&nbsp;
            {/* <button type="button" className='btn btn-primary' onClick={this.toggleShowComponent3}>{this.state.showComponent3 ? "Books On Rent" : "Books On Rent"}</button> */}
          </div>
          {this.state.showComponent1 &&
            <div className="dashboard-component">

              <AddBook />
            </div>
          }
          {this.state.showComponent2 &&
            <div className="dashboard-component">

              <AllBook />
            </div>
          }
          {/* {this.state.showComponent3 &&
            <div className="dashboard-component">
              <BookOnRent />

            </div>
          } */}
        </div>
    );
  }


}


export default PublisherDashBord;