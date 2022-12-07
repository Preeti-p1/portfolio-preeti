import React from 'react';

const About = () => {
  return (
    <div className="About_intro">
      <h1 className="about">About Me</h1>
      <p className="about_frontend">
        Frontend developer having expertise in frontend development and highly
        motivated individual dedicated to writing clear, concise, robust code
        that works. <br /> I like creating products that either have fun and
        nifty features or solve a genuine problem for people.
      </p>
      <h1 className="about">Education</h1>
      <p>Full Stack Developer Bootcamp</p> <h4 className="feb">March 2022</h4>
      <h3>Bachelor Of Computer Application</h3>
      <h4 className="feb">2019-2022</h4>
      <p style={{ position: 'relative', bottom: '60px', left: '5px' }}>
        Guru Nanak Girls College(BCA),Ludhiana
      </p>
    </div>
  );
};

export default About;
