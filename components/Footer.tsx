import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'
import { SparklesCore } from './ui/Sparkles'

const Footer = () => {
  return (
    <div>
      <footer className='w-full pt-20 pb-10' id="contact">
        {/* Background grid */}
        <div className='w-full absolute left-0 -bottom-72 min-h-96'>
          <img src="/footer-grid.svg" alt="grid" className='w-full h-full opacity-50' />
        </div>

        {/* Main content */}
        <div className='flex flex-col items-center'>
          <h1 className='heading lg:max-w-[45vw]'>
            Ready to take <span className='text-purple'>your</span> digital presence to the next level?
          </h1>
          <p className='text-white-200 md:mt-10 my-5 text-center'>
            Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
          </p>

          {/* Button + Sparkles Layer */}
          <div className="relative mt-4">
            <a href="mailto:@gmail.com">
              <MagicButton
                title={"Let's get in touch"}
                icon={<FaLocationArrow />}
                position='right'
              />
            </a>

            {/* Sparkles effect below the button */}
            <div className="absolute left-1/2 top-full -translate-x-1/2 mt-2 w-[300px] h-[100px] pointer-events-none z-0">
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1.2}
                particleDensity={500}
                className="w-full h-full"
                particleColor="#A855F7" // purple
              />
              {/* Optional gradient mask for soft fade */}
              <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(200px_100px_at_center,white,transparent)]"></div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-16 relative z-10">
          {/* Social Icons */}
         {/* Social Icons */}
<div className="flex items-center md:gap-3 gap-6">
  {socialMedia.map((profile) => (
    <a
      key={profile.id}
      href={profile.link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex justify-center items-center rounded-lg border border-black-300 bg-black/20 backdrop-blur-lg cursor-pointer"
    >
      <img src={profile.img} alt="" width={20} height={20} />
    </a>
  ))}
</div>


          {/* Copyright */}
          <p className="md:text-base text-sm md:font-normal font-light mt-4 md:mt-0">
           Muskan © 2025
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
