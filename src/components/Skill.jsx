import React from 'react'
import SkillCard from './SkillCard'

const skillItems = [
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'Frontend Framework'
  },
  {
    imgSrc: '/images/nodejs.svg',
    label: 'NodeJS',
    desc: 'Backend Development'
  },
  {
    imgSrc: '/images/expressjs.svg',
    label: 'ExpressJS',
    desc: 'Backend Framework'
  },
  {
    imgSrc: '/images/mongodb.svg',
    label: 'MongoDB',
    desc: 'Database Management'
  },
  {
    imgSrc: '/images/github.svg',
    label: 'GitHub',
    desc: 'Version Control'
  },
  {
    imgSrc: '/images/figma.svg',
    label: 'Figma',
    desc: 'Design tool'
  },
  {
    imgSrc: '/images/css3.svg',
    label: 'CSS3',
    desc: 'Frontend Styling'
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Frontend Development'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'Utility-first CSS Framework'
  }
]

const Skill = () => {
  return (
    <section className='section'>
      <div className='container flex flex-col items-center'>
        <h2 className='headline-2 text-center reveal-up'>Essential Tools I Use</h2>

        <p className='text-zinc-400 mt-3 mb-8 max-w-[50ch] text-center reveal-up'>
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>

        <div className='grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          {skillItems.map(({ imgSrc, label, desc }, key) => (
            <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} classes='reveal-up'/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skill
