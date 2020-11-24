import React from "react";
import Routes from "./Routes";
import Header from "./../Header";
import Footer from "./../Footer";

class Desk extends React.Component<any> {
  render() {
    const props = this.props;
    return (
      <div className="Desk-App">
        <Header />
        <div className="Desk-container">
          <Routes childProps={props} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Desk;
