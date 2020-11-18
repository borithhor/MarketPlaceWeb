import React from "react";
import Routes from "./Routes";
const Container: React.FC<any> = (props: any) => {
  const currentUser = {
    isAuthenticated: true,
  };
  const childProps = {
    currentUser,
  };
  return <Routes childProps={childProps} />;
};

export default Container;
