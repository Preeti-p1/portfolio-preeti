import React from 'react';
import Blog_pic from '../Pictures/Blog_pic.png';
import Ecom_pick from '../Pictures/Ecom_pick.png';
import Netflix from '../Pictures/Netflix.png';
import Clock_pic from '../Pictures/Clock_pic.png';
import Registan_pic from '../Pictures/Registan_pic.png';
// import Todo_Js from '../Pictures/Todo_Js.png';

const Projects = () => {
  return (
    <>
      <h2
        style={{
          textDecoration: 'underline',
          color: 'orange',
          paddingLeft: '600px',
        }}
      >
        Project
      </h2>
      <div className="all">
        <div className="Project_">
          <h4 className="project_name">
            <a
              style={{ color: 'white' }}
              href="https://aquamarine-cobbler-2d62ac.netlify.app//"
            >
              Blog Project{' '}
            </a>{' '}
          </h4>
          <img className="project_img" src={Blog_pic} alt="" />
          <h3 className=" code_live">
            <a href="https://github.com/Preeti-p1/myreactapp">
              {' '}
              View Code on Github{' '}
            </a>{' '}
          </h3>
        </div>
        <div className="Project_">
          <h4 className="project_name">
            <a
              style={{ color: 'white' }}
              href="https://preeti-p1.github.io/ecommerce-js/"
            >
              Ecommerce js{' '}
            </a>{' '}
          </h4>
          <img className="project_img" src={Ecom_pick} alt="" />
          <h3 className=" code_live">
            <a href="https://github.com/Preeti-p1/ecommerce-js">
              {' '}
              View Code on Github{' '}
            </a>{' '}
          </h3>
        </div>
        <div className="Project_">
          <h4 className="project_name">
            <a
              style={{ color: 'white' }}
              href="https://net-flix-mini.vercel.app//"
            >
              Blog Project{' '}
            </a>{' '}
          </h4>
          <img className="project_img" src={Netflix} alt="" />
          <h3 className=" code_live">
            <a href="https://github.com/Preeti-p1/NetFlix_Mini">
              {' '}
              View Code on Github{' '}
            </a>{' '}
          </h3>
        </div>
        <div className="Project_">
          <h4 className="project_name">
            <a
              style={{ color: 'white' }}
              href="https://preeti-p1.github.io/JSclockProject/"
            >
              {' '}
              Clock Project
            </a>
          </h4>
          <img className="project_img" src={Clock_pic} alt="" />
          <h3 className=" code_live">
            <a href="https://github.com/Preeti-p1/JSclockProject">
              {' '}
              View Code on Github{' '}
            </a>
          </h3>
        </div>
        <div className="Project_">
          <h4 className="project_name">
            <a
              style={{ color: 'white' }}
              href="https://preeti-p1.github.io/CSS6-Assignment/assignment6.html"
            >
              {' '}
              SAHARA
            </a>
          </h4>
          <img className="project_img" src={Registan_pic} alt="" />
          <h3 className=" code_live">
            <a href="https://github.com/Preeti-p1/CSS6-Assignment">
              {' '}
              View Code on Github{' '}
            </a>
          </h3>
        </div>
        {/* <div className="Project_">
          <h4 className="project_name">
            <a
              style={{ color: 'white' }}
              href="https://github.com/Preeti-p1/jsproject2"
            >
              {' '}
              Todo Web{' '}
            </a>{' '}
          </h4>
          <h3 className=" code_live">
            <a href="https://preeti-p1.github.io/jsproject2/js.html">
              {' '}
              View Code on Github{' '}
            </a>
          </h3>
          <img className="project_img" src={Todo_Js} alt="" />
        </div> */}
      </div>
    </>
  );
};

export default Projects;
