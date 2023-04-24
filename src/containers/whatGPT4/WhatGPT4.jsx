import React from 'react'
import "./whatgpt4.css";
import Feature from '../feature/Feature';

function WhatGPT4() {
  return (
    <div className='gpt4__whatgpt4 section__margin id="wgpt4'>
      <div className='gpt4__whatgpt4-feature'>
        <Feature />
      </div>
      <div className='gpt4__whatgpt4-headding'>
        <h1 className='gradient-text '>The possibilities are beyond your imagination</h1>
        <p>Explore the Library</p>
      </div>
      <div className='gpt4__whatgpt4-container'>
        <Feature />
        <Feature />
        <Feature /> 
      </div>
    </div>
  )
}

export default WhatGPT4;