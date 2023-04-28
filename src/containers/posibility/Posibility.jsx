import React from 'react'
import "./posibility.css";
import vrwomen from "../../assets/possibility.png";

function Posibility() {
  return (
    <div className='gpt4__posibility seaction__padding' id='posibility'>
      <div className='gpt4__possibility-image'>
        <img src={vrwomen} alt="posibility" />
      </div>
      <div className='gpt4__posibility-container'>
        <h4 id="gpt4__posibility-container_first-h4">Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <h4 id='gpt4__posibility-container_second-h4'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</h4>
        <h4 id="gpt4__posibility-container_third-h4">Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Posibility;