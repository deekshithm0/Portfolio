import React from 'react'
import { ButtonPrimary } from './Button'

const siteMap = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Contact',
    href: '#contact'
  },
  {
    label: 'Work',
    href: '#work'
  }
]

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/deekshithmannarakkal/'
  },
  {
    label: 'GitHub',
    href: 'https://github.com/deekshithm0'
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/919544626202'
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/_________mr.d'
  }
]

const Footer = () => {
  return (
    <footer className='section pb-20'>
      <div className='container mb-4'>
        <div className='lg:grid lg:grid-cols-2'>
          <div className='mb-10'>
            <h2 className='headline-1 mb-8 lg:max-w-[12ch] reveal-up'>
              Let&apos;s work together today!
            </h2>

            <ButtonPrimary
              href='mailto:deekshithm0@gmail.com'
              label='Start project'
              icon='chevron_right'
            />
          </div>

          <div className='grid grid-cols-2 gap-4 lg:pl-20'>
            <div className=''>
              <p className='mb-2'>Sitemap</p>

              <ul>
                {siteMap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up'
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className=''>
              <p className='mb-2'>Social</p>

              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target='_blank'
                      className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up'
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
