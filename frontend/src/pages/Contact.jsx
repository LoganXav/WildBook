import React from 'react'
import { Navbar } from '../components/commons/Navbar'
import { Footer } from '../components/commons/Footer'

const Contact = () => {
  return (
    <>
        <Navbar />
        <section className="border-b py-16 mb-16">
            <div className="w-[80%] md:w-[70%] flex flex-col gap-8 mx-auto">
                <h2 className="self-center text-3xl">
                    Contact
                </h2>
                <p className="lg:text-sm">Is there a particular subject you'd like for me to write about? let me know at <a className="text-[#6074b5] cursor-pointer">sogbesansegun22@gmail.com</a>. You can also send a request using the feedback form below:</p>
                <div className="flex flex-col gap-4">
                    <h3 className="font-semibold text-xl">Contact Form</h3>
                    <p className="lg:text-sm italic">Enter your name, e-mail, message and click Send Message</p>
                    <form className="flex flex-col mt-3">
                        <label className="lg:text-sm">Your Name *</label>
                        <input className="border p-3 my-2 w-full md:w-[60%] text-sm outline-none focus-within:bg-white transition duration-200 ease bg-[#f6f6f6]" type='text' />
                        <label className="lg:text-sm">Your Email *</label>
                        <input className="border p-3 my-2 w-full md:w-[60%] text-sm outline-none focus-within:bg-white transition duration-200 ease bg-[#f6f6f6]" type='text' />
                        <label className="lg:text-sm">Subject</label>
                        <input className="border p-3 my-2 w-full md:w-[60%] text-sm outline-none focus-within:bg-white transition duration-200 ease bg-[#f6f6f6]" type='text' />
                        <label className="lg:text-sm">Your Message</label>
                        <textarea className="border p-3 my-4 w-full md:w-[60%] h-[10rem] text-sm outline-none focus-within:bg-white transition duration-200 ease bg-[#f6f6f6]" />
                        <button className="lg:text-sm bg-[#edb48b] max-w-max py-2 px-7 text-white cursor-pointer">SEND</button>
                    </form>
                </div>
            </div>
        </section>
        <Footer />
    </>
  )
}

export default Contact