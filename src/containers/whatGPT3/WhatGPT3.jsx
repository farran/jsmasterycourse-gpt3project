import React from 'react';
import './whatGPT3.css';
import { Feature } from "../../components";
import Features from "../features/Features";

const WhatGPT3 = () => {
  return (
	<div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3?" text="We so opinion friends me message as delight. Whole front do of plate... defective nor convinced residence own. Connection has put impossible... boisterous. At jointure ladyship an insisted so humanity he. Friendly..." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore The Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate"/>
      <Feature title="Knowledge Base" text="We so opinion friends me message as delight. Whole front do of plate"/>
      <Feature title="Education" text="We so opinion friends me message as delight. Whole front do of plate"/>
    </div>
  </div>
  )
}

export default WhatGPT3