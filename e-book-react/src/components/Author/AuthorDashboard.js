import React, { Component } from 'react';
import AddBook from './AddBook';
import AuthorBook from './AuthorBook';
import BookByAuthor from './BookByAuthor';

class AuthorDashboard extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
          showComponent1: true,
          showComponent2: false,
          showComponent3: false
        };
        this.toggleShowComponent1 = this.toggleShowComponent1.bind(this);
        this.toggleShowComponent2 = this.toggleShowComponent2.bind(this);
        this.toggleShowComponent3 = this.toggleShowComponent3.bind(this);
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
    
      toggleShowComponent3() {
        this.setState(prevState => ({
          showComponent3: !prevState.showComponent3
        }));
      }
    
      render() {
        return (
          <div className="dashboard"><br/>
            <div className="dashboard-buttons">
              <button type="button" className='btn btn-primary' onClick={this.toggleShowComponent1}>{this.state.showComponent1 ? "Add Book" : "Add Book"}</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button type="button" className='btn btn-primary' onClick={this.toggleShowComponent2}>{this.state.showComponent2 ? "My Book" : "My Book"}</button>&nbsp;&nbsp;&nbsp;&nbsp;
              <button type="button" className='btn btn-primary' onClick={this.toggleShowComponent3}>{this.state.showComponent3 ? "Books On Rent" : "Books On Rent"}</button>
            </div>
            {this.state.showComponent1 &&
              <div className="dashboard-component">
              
                <AddBook />
              </div>
            }
            {this.state.showComponent2 &&
              <div className="dashboard-component">
               
                <BookByAuthor />
              </div>
            }
            {/* {this.state.showComponent3 &&
              <div className="dashboard-component">
                <h2>Component 3</h2>
                <BookOnRent />
              </div>
            } */}
          </div>
                );
              }
        
    
            }
    

export default AuthorDashboard;