// Clientinf.js
// ==============================

// imports
import React from "react";
import '.././styles/clientpage.css'
import Calander from "../User/Calander";

// component
const ClientInfo = (props) => {
  const { firstName } = props

  return (
    <div className="client-page">
      <h1>Cliet Info Page</h1>
      <h2>can you believe this background color?</h2>
      <br />
      <p>{`first name ${props.firstName}`}</p>
      <br/>
      {/* <img src={this.props.url} alt="Uploaded imgages" height="150" width="150"/> */}
      <Calander />
    </div>
  );
};

// exports
export default ClientInfo