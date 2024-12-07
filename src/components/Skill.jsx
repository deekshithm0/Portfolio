import React from 'react'

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

        <p className=''>
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>

        <div className="">
        {
            skillItems.map(({ imgSrc, label, desc }, key) =>(
                'SkillCard'
            ) )
        }
        </div>

      </div>
    </section>
  )
}

export default Skill
