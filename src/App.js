import React from "react";
import "./App.css";
import NavBar from "./Component/Navbar" ;
import Footer from "./Component/footer" ;
import Timer from "./Component/timer";
import {Button} from 'react-bootstrap';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }

  showProfile = () => {
    this.setState({ show: !this.state.show })
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="Ez">
          <Button variant="outline-primary" size="lg" onClick={this.showProfile}  style={{marginLeft:'100px', marginTop: '5%',}}>
            {this.state.show ? "Hide Page " : "Show Page"}
          </Button>

          {this.state.show ? (
            <div className="Profile">
            <p><h4>FullName: </h4> Nouha Hamrouni</p>
            <p><h4>Bio: </h4> Hi, Iam a beginner! </p>
            <p><h4>Profession: </h4> Web Developper Beginner </p>
            <img src="/title.png" alt="About Us" />
            </div>
          ) : (
            <div className="Hide" >
            <Timer />
            </div>
            )}
            <Footer />
        </div>
      </div>
    )
  }
}

export default App;