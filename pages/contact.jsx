import Image from 'next/image'
import github from "../public/GH.png"
import linkedin from "../public/linkedin.png"
import Link from 'next/link'
import React, { useState } from 'react';
import axios from 'axios';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';

export default function Contact({ children }) {
  const [firstName, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Get data from the form.
    const dataEmail = {
      firstName: getValues('firstName'),
      lastName: getValues('lastName'),
      email: getValues('email'),
      message: getValues('message'),
    }

    emailjs.send(process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE, process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE, dataEmail, process.env.NEXT_PUBLIC_EMAIL_JS_API)
    .then(function(response) {
            toast.success("Message sent! Thanks for contacting me!")
        }, function(error) {
            toast.error("There was an error, please try again later!")
        });
  }
    return (
      <div className="container px-2 py-4 flex flex-grow mx-auto w-full">
        <form className="w-full max-w-lg mx-auto" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="firstName">
                First Name
              </label>
              <input className="appearance-none block w-full bg-gray-200  text-black border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
              id="firstName" 
              type="text" 
              placeholder="Jane" 
              {...register('firstName', {required:true, minLength:2})}/>
              {errors.firstName && <p class="text-red-500 text-xs italic">Please fill out this field.</p>}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="lastName">
                Last Name
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
               id="lastName" 
               type="text"
               placeholder="Doe" 
               {...register('lastName', {required:true, minLength:2})}/>
               {errors.lastName && <p class="text-red-500 text-xs italic mt-3">Please fill out this field.</p>}
            </div>
            
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="email">
                E-mail
              </label>
              <input className="appearance-none block w-full bg-gray-200  text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
               id="email"
               placeholder="myemail@email.com" 
               type="email"
               {...register('email', {required:true, pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format"
              }})}/>
              {errors.email && <p class="text-red-500 text-xs italic">Please enter a valid email</p>}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea className="no-resize appearance-none block w-full bg-gray-200  text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
               id="message" 
               placeholder="Enter your message here" 
               {...register('message', {required:true, minLength:5})}>
               </textarea>

               {errors.message && <p class="text-red-500 text-xs italic">Please fill out this field</p>}
            </div>
          </div>
          <div className="w-full">
              <button className="shadow bg-teal-400 hover:bg-teal-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full"
               type="submit">
                Send
              </button>
          </div>
          <div className="grid grid-cols-2 grid-flow-col gap-8 text-white mx-auto mt-5">
            <Link href="https://github.com/AnLong98">
            <div className="h-[50px] w-[50px] relative mx-auto py-4 hover:border-teal-500 hover:cursor-pointer border-solid border-2 border-[#66fcf1] rounded-full basis-[13%] sm:mr-10 min-w-1/5 bg-white">
                
                  <Image
                      src={github}
                      alt="Picture of the author"
                      layout="fill" // required
                      objectFit="scale-down"
                      className="rounded-full " // just an example
                      />
                  
            </div>
            </Link>
            <div className="h-[50px] w-[50px] relative mx-auto py-4 hover:border-teal-500 hover:cursor-pointer  border-solid border-2 border-[#66fcf1] rounded-full basis-[13%] sm:mr-10 min-w-1/5 bg-white">
                <Link href="https://rs.linkedin.com/in/predrag-glavas-3413b922b">
                  <Image
                      src={linkedin}
                      alt="Picture of the author"
                      layout="fill" // required
                      objectFit="scale-down"
                      className="rounded-full " // just an example
                      />
                  </Link>
            </div>
        </div>
      </form>
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
      </div>
    )
  }