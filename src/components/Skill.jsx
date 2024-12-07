import React from 'react'
import SkillCard from './SkillCard'



const skillItems = [
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
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'Frontend Framework'
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
      <div className='container'>
        <h2 className='headline-2'>Essential Tools I Use</h2>

        <p className='text-zinc-400 mt-3 mb-8 max-w-[50ch]'>
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill, minmax(250px, 1fr))]">
        {
            skillItems.map(({ imgSrc, label, desc }, key) =>(
                <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} />
            ) )
        }
        </div>

      </div>
    </section>
  )
}

export default Skill
