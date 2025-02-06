import React from 'react'

export default function Projectscard({obj:{link,photo,title,name,description}}) {
  return (
    <div>
        <a href={link}>
          <img className="hover" src={photo} alt="#"></img>
        </a>
        <h3 id='ProjectTitile'>{title}</h3>
        <p>{name}</p>
        <p>{description}</p>
    </div>
  )
}
