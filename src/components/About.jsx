import React from 'react'

const aboutItems = [
  {
    label: 'Project done',
    number: 3
  },
  {
    label: 'Year of experience',
    number: 1
  }
]

const About = () => {
  return (
    <section id='about' className='section'>
      <div className='container'>
        <div className='bg-zinc-800/50 p-7 rounded-2xl md:p-12 '>
        <h2 className='headline-2 mb-8'>About Me</h2>
          <p className='text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch] reveal-up'>
            Hello! I'm Deekshith M, a passionate Full Stack Developer
            specializing in the MERN stack. with extensive experience delivering
            high-performance web solutions for clients across diverse business
            sectors. <br /> <br /> My expertise lies in building responsive, user-centric
            applications using React, Node.js, Express, and MongoDB. Having
            worked on multiple live projects, I excel at transforming ideas into
            impactful digital solutions that enhance user engagement and
            operational efficiency. <br /> <br /> My work ranges from modernizing restaurant
            operations to creating intuitive interfaces that elevate business
            branding. Committed to clean, efficient code and innovative
            problem-solving, I focus on crafting seamless user experiences that
            align with business goals. Let’s work together to bring your vision
            to life.
          </p>

          <div className='flex flex-wrap items-center gap-4 md:gap-7'>
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className='flex items-center md:mb-2'>
                  <span className='text-2xl font-semibold md:text-4xl'>
                    {number}
                  </span>
                  <span className='text-sky-400 font-semibold md:text-3xl'>
                    +
                  </span>
                </div>

                <p className='text-sm text-zinc-400'>{label}</p>
              </div>
            ))}

            {/* <img
              src='/images/logo.svg'
              alt='Logo'
              width={30}
              height={30}
              className='ml-auto md:w-[40px] md:h-[40px]'
            /> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
