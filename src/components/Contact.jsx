import React from 'react'

const socialLinks = [
  {
    href: 'https://github.com/deekshithm0',
    label: 'GitHub',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 32 32'
        className='w-6 h-6'
      >
        <path
          fill='#000'
          d='M16 .396C7.163.396 0 7.559 0 16.396c0 7.067 4.584 13.065 10.942 15.18.8.147 1.09-.348 1.09-.772 0-.381-.014-1.386-.022-2.723-4.452.968-5.392-2.146-5.392-2.146-.728-1.85-1.777-2.342-1.777-2.342-1.452-.993.11-.973.11-.973 1.606.113 2.452 1.651 2.452 1.651 1.426 2.442 3.741 1.737 4.655 1.33.144-1.032.558-1.738 1.014-2.14-3.554-.404-7.287-1.777-7.287-7.91 0-1.747.623-3.176 1.645-4.293-.165-.405-.713-2.035.156-4.242 0 0 1.342-.43 4.4 1.64 1.276-.355 2.645-.532 4.004-.539 1.36.007 2.73.184 4.007.539 3.054-2.07 4.395-1.64 4.395-1.64.872 2.207.324 3.837.159 4.242 1.024 1.117 1.643 2.546 1.643 4.293 0 6.145-3.738 7.503-7.305 7.896.573.494 1.083 1.467 1.083 2.957 0 2.135-.02 3.857-.02 4.377 0 .428.288.925 1.098.768C27.42 29.455 32 23.457 32 16.396 32 7.559 24.837.396 16 .396z'
        />
      </svg>
    )
  },
  {
    href: 'https://www.linkedin.com/in/deekshithmannarakkal/',
    label: 'LinkedIn',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 32 32'
        className='w-6 h-6'
      >
        <path
          fill='#0077B5'
          d='M27 3H5C4.448 3 4 3.448 4 4v24c0 .552.448 1 1 1h22c.552 0 1-.448 1-1V4c0-.552-.448-1-1-1zM12 24H8V13h4v11zm-2-12c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm16 12h-4v-5.5c0-1.379-1.121-2.5-2.5-2.5S17 17.121 17 18.5V24h-4V13h4v1.207C18.204 13.062 19.053 13 20 13c3.313 0 6 2.687 6 6V24z'
        />
      </svg>
    )
  },
  {
    href: 'https://wa.me/919544626202',
    label: 'WhatsApp',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 32 32'
        className='w-6 h-6'
      >
        <path
          fill='#25D366'
          d='M16 0C7.164 0 0 7.164 0 16c0 2.74.71 5.352 2.06 7.672L0 32l8.551-2.03A15.935 15.935 0 0 0 16 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm9.702 22.486c-.392 1.105-2.294 2.037-3.234 2.226-.83.168-1.902.294-5.554-1.676-4.678-2.602-7.677-8.777-7.92-9.175-.239-.401-1.887-3.15-1.887-6 0-2.852 1.477-4.214 2.004-4.794.527-.579 1.133-.722 1.505-.722.369 0 .742-.005 1.073-.005.33 0 .781-.067 1.204.923.423.99 1.442 3.563 1.567 3.815.13.253.22.55.054.953-.17.406-.254.65-.51 1.01-.251.356-.526.796-.753 1.073-.25.301-.51.631-.217 1.13.292.497 1.303 2.145 2.793 3.472 1.919 1.707 3.534 2.232 4.013 2.472.479.239.782.203 1.068-.122.285-.324 1.223-1.42 1.553-1.908.327-.49.652-.406 1.116-.244.463.163 2.96 1.396 3.467 1.647.508.252.854.38.98.595.13.223.13 1.292-.263 2.396z'
        />
      </svg>
    )
  },
  {
    href: 'https://instagram.com/_________mr.d',
    label: 'Instagram',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 32 32'
        className='w-6 h-6'
      >
        <path
          fill='#E1306C'
          d='M16 0C7.163 0 0 7.164 0 16s7.163 16 16 16 16-7.164 16-16-7.163-16-16-16zm0 30C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14-6.268 14-14 14zm6.5-16.5c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5 1.673-1.5 1.5-1.5c.827 0 1.5.673 1.5 1.5zm-6.5 3.5c-3.033 0-5.5-2.467-5.5-5.5s2.467-5.5 5.5-5.5 5.5 2.467 5.5 5.5-2.467 5.5-5.5 5.5zm0-8c-1.379 0-2.5 1.121-2.5 2.5s1.121 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.121-2.5-2.5-2.5zm0 0zm0 0'
        />
      </svg>
    )
  }
]

const Contact = () => {
  return (
    <section id='contact' className='section'>
      <div className='container lg:grid lg:grid-cols-2 lg:items-stretch'>
        <div className='mb-12 lg:mb-0 lg:flex lg:flex-col'>
          <h2 className='headline-2 lg:max-w-[12ch]'>
            Contact me for collaboration
          </h2>

          <p className='text-zinc-400 mt-3 mb-8 max-w-[50ch] lg:max-w-[30ch]'>
            Reach out today to discuss your project needs and collaborating on
            something amazing!
          </p>

          <div className='flex items-center gap-2 mt-auto'>
            {socialLinks.map(({ href, icon }, key) => (
              <a
                key={key}
                href={href}
                target='_blank'
                className='w-12 h-12 grid place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg transition-colors hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80'
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <form action='' method='POST' className='xl:pl-10 2xl:pl-20'>
          <div className='md:grid md:items-center md:grid-cols-2 md:gap-2'>
            <div className='mb-4'>
              <label htmlFor='name' className='label'>
                Name
              </label>

              <input
                type='text'
                name='name'
                id='name'
                autoComplete='name'
                placeholder='Enter name'
                required
                className='text-field'
              />
            </div>

            <div className='mb-4'>
              <label htmlFor='email' className='label'>
                Email
              </label>

              <input
                type='email'
                name='email'
                id='email'
                autoComplete='email'
                placeholder='emailid@example.com'
                required
                className='text-field'
              />
            </div>
          </div>

          <div className='mb-4'>
            <label htmlFor='message' className='label'>
              Message
            </label>

            <textarea
              name='message'
              id='message'
              placeholder='Hi, leave me a message!'
              className='text-field resize-y min-h-32 max-h-80'
            ></textarea>
          </div>

          <button
            type='submit'
            className='btn btn-primary [&]:max-w-full w-full justify-center'
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
