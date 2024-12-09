import React from 'react'
import ProjectCard from './ProjectCard'

const works = [
  {
    imgSrc: '/images/almango.jpg',
    title: 'Project 1',
    tags: ['API', 'MVC', 'Development'],
    projectLink: 'https://projectlink.com'
  },
  {
    imgSrc: '/images/project-2.jpg',
    title: 'Project 2',
    tags: ['API', 'SPA'],
    projectLink: 'https://projectlink.com'
  },
  {
    imgSrc: '/images/project-3.jpg',
    title: 'Project 3',
    tags: ['API', 'MVC'],
    projectLink: 'https://projectlink.com'
  },
  {
    imgSrc: '/images/project-4.jpg',
    title: 'Project 4',
    tags: ['API', 'MVC'],
    projectLink: 'https://projectlink.com'
  }
]

const Work = () => {
  return (
    <section id='work' className='section'>
      <div className='container flex flex-col items-center justify-center'>
        <h2 className='headline-2 mb-8 text-center reveal-up'>My Portfolio Highlights</h2>

        <div className='grid gap-x-4 gap-y-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink} key={key} classes='reveal-up'/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
