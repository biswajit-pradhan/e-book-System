import { Component } from "react"
import Navbar from "../Navbar";
import "./style.css"

class Publisher extends Component {
  state = {
    addbook: false
  };

  handleAddBook = () => {
    this.setState(prevState => ({
      addbook: !prevState.addbook
    }));
  };

  render() {
    return (
      <div id="publisher">
        <h3 className="text-center text-white pt-5">Publish Book</h3>
        <div className="container">
          <div id="publisher-row" className="row justify-content-center align-items-center">
            <div id="publisher-column" className="col-md-6">
              <div id="publisher-box" className="col-md-12">
              
                <form id="publisher-form" className="form"  action="" method="post">
                  <h3 className="text-center text-info">Publish Book</h3>
                  <div className="form-group">
                    <label htmlFor="publisherName" className="text-info">Publisher Name</label><br />
                    <input type="text" name="publisherName" id="publisherName" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="BookTitle" className="text-info">Book Title :</label><br />
                    <input type="text" name="BookTitle" id="BookTitle" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="BookAuthorName" className="text-info">Book Author Name :</label><br />
                    <input type="text" name="BookAuthorName" id="BookAuthorName" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="BookLanguage" className="text-info">Book Language :</label><br />
                    <input type="text" name="BookLanguage" id="BookLanguage" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="PublishYear" className="text-info">Publish Year:</label><br />
                    <input type="text" name="PublishYear" id="PublishYear" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="text-info">Book Category :</label><br />
                    <select className="form-control" defaultValue={"DEFAULT"}>
                      <option value="DEFAULT" disabled>Choose Option</option>
                      <option>FICTION</option>
                      <option>NONFICTION</option>
                      <option>TECHNOLOGY</option>
                      <option>SCIENCE</option>
                      <option>HISTORY</option>
                      <option>BUSINESS</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="BookPrice" className="text-info">Book Price :</label><br />
                    <input type="text" name="BookPrice" id="BookPrice" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="UplodeBook" className="text-info">Uplode Book :</label><br />
                    <input type="text" name="UplodeBook" id="UplodeBook" className="form-control" />
                  </div>
                  <div className="form-group">
                    <br />
                    <input type="submit" name="submit" className="btn btn-info btn-md" value="Submit" />
                    
                  </div>
                </form>
              </div>
            </div>
            </div>
          </div>
        </div>
      
      
    )
  }
}

export default Publisher;