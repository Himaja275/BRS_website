import React from 'react'
import ContactForm from '../ContactForm.jsx'
import contact from '../../assets/contact.avif'

const ContactUs = () => {
  return (
    <div
          className="h-full bg-cover bg-center rounded-3xl mx-12 p-9 flex flex-col gap-12"
          style={{ backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 30%),url(${contact})` }}
      >
          <div className='ml-28'>
              <div className='text-[#ed8d3e] text-base font-[Outfit] font-semibold'>Get in touch</div>
              <div className='text-white font-bold text-4xl font-sans'>Contact Us</div>
          </div>
          <div className='flex justify-end'>
        <div className='w-2/5'>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default ContactUs
