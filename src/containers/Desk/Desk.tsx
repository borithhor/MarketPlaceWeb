import React from "react";
import Routes from "./Routes";
import Header from "./../Header";

class Desk extends React.Component<any> {
  render() {
    const props = this.props;
    return (
      <div className="Desk-App">
        <Header />
        <div className="Desk-container">
          <Routes childProps={props} />
        </div>
      </div>
    );
  }
}

export default Desk;
