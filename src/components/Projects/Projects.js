import React, { Fragment } from 'react';
import './Projects.scss';
import './ProjectItem';
import ProjectItem from './ProjectItem';
import { AiOutlineLine } from 'react-icons/ai';

// Data on the front end
const ProjectsArray = [
  {
    id: 1,
    name: 'Inventory Management App',
    desc: 'Conestoga College Capstone Project',
    img: 'https://images.unsplash.com/photo-1642287458180-449fad5abc2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
  },
  {
    id: 2,
    name: 'E-Commerce App',
    desc: 'Competition Project',
    img: 'https://images.unsplash.com/photo-1642287458180-449fad5abc2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
  },
];

const Projects = () => {
  return (
    <div className='projects-container'>
      <h2 className='title'>
        <AiOutlineLine />
        Projects
      </h2>
      <div className='project-container'>
        {ProjectsArray.map((project) => (
          <ProjectItem project={project} key={project.id}></ProjectItem>
        ))}
      </div>
    </div>
  );
};

export default Projects;
