import React from 'react'
import { Navbar } from '../components/commons/Navbar'
import { Footer } from '../components/commons/Footer'

const Contact = () => {
  return (
    <>
        <Navbar />
        <section className="border-b py-16 mb-16">
            <div className="w-[70%] flex flex-col gap-10 mx-auto">
                <h2 className="self-center text-4xl">
                    Contact
                </h2>
                <p className='text-[14px]'>To contact our support team leave a comment on this page or send to e-mail <a className="text-[#6074b5] cursor-pointer">sogbesansegun22@gmail.com</a>. You can also send a message using the feedback form below:</p>
                <div className="flex flex-col gap-4">
                    <h3 className="font-semibold text-xl">Contact form</h3>
                    <small>Enter your name, e-mail, message and click Send Message</small>
                    <form className="flex flex-col mt-3">
                        <label className="text-[14px]">Your Name *</label>
                        <input className="border p-3 my-2 w-full md:w-[60%] text-xs outline-none focus-within:bg-white transition duration-200 ease bg-[#f6f6f6]" type='text' />
                        <label className="text-[14px]">Your Email *</label>
                        <input className="border p-3 my-2 w-full md:w-[60%] text-xs outline-none focus-within:bg-white transition duration-200 ease bg-[#f6f6f6]" type='text' />
                        <label className="text-[14px]">Subject</label>
                        <input className="border p-3 my-2 w-full md:w-[60%] text-xs outline-none focus-within:bg-white transition duration-200 ease bg-[#f6f6f6]" type='text' />
                        <label className="text-[14px]">Your Message</label>
                        <textarea className="border p-3 my-4 w-full md:w-[60%] h-[100%] text-xs outline-none focus-within:bg-white transition duration-200 ease bg-[#f6f6f6]" />
                    </form>
                </div>
            </div>
        </section>
        <Footer />
    </>
  )
}

export default Contact