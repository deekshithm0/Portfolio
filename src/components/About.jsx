import React from 'react'

const aboutItems = [
  {
    label: 'Project done',
    number: 45
  },
  {
    label: 'Year of experience',
    number: 3
  }
]

const About = () => {
  return (
    <section id='about' className='section'>
      <div className='container'>
        <div className='bg-zinc-800/50 p-7 rounded-2xl md:p-12'>
          <p className='text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]'>
            Dynamic Fullstack Developer specializing in the MERN stack, with a
            proven track record of creating engaging and high-performance web
            applications. Skilled in crafting responsive and intuitive user
            interfaces with React, while developing robust back-end solutions
            using Node.js, Express, and MongoDB. Passionate about delivering
            seamless user experiences through clean, efficient code and
            innovative problem-solving.
          </p>

          <div className='flex flex-wrap items-center gap=4 md:gap-7'>
            {
                aboutItems.map(( { label, number }, key ) => (
                    <div key={key}>
                        <div className="flex items-center md:mb-2">
                            <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                            <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                        </div>

                        <p className="text-sm text-zinc-400">{label}</p>
                    </div>
                ))
            }


            <img src="/images/logo.svg" alt="Logo" width={30} height={30} className="ml-auto md:w-[40px] md:h-[40px]" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
