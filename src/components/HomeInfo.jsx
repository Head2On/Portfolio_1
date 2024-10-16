import React from 'react'
import { Link } from 'react-router-dom';
import {arrow}  from '../assets_3d_portfolio/assets/icons'

const InfoBox = ({ text , link, btnText }) => (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center text-black">{text}</p>
      <Link to = {link} className="neo-brutalism-white neo-btn">
        {btnText}
        <img src={arrow} className="w-4, h-4 object-contain"/>
      </Link>
    </div>
  
)

const renderContent = {
    1:(
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-yellow py-4 px-8 text-black mx-5">
            Hi, I am <span className="font-semibold">Ishan</span>👋
            <br />
            A Web Developer from India
        </h1>
    ),
    2:(
      <InfoBox 
      text="A fresher web developer creating interactive projects and exploring innovative web design."
      link="/about"
      btnText="Learn more"
      />
    ),
    3:(
        <InfoBox 
        text="Led multiple projects working on progress over the years. Curious about the impact?"
        link="/projects"
        btnText="Visit my portfolio"
        />
    ),
    4:(
      <InfoBox 
      text="I'm always ready to chat about your projects, tech stacks or any other queries."
      link="/contact"
      btnText="Get in touch"
      />
    ),
};

const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo