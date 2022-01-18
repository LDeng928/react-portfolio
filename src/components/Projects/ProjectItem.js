import React from 'react';

const ProjectItem = ({ project }) => {
  const { id, name, desc, img } = project;

  return (
    <div className='card' style={{ width: '18rem' }}>
      <img src={img} className='card-img-top' alt={desc} />
      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>
        <p className='card-text'>{desc}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
