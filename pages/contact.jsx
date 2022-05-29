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
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if(isLoading)
      return
    setIsLoading(true);
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
            setIsLoading(false);
        }, function(error) {
            toast.error("There was an error, please try again later!")
            setIsLoading(false);
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
                 { isLoading ?
                  <>
                    <svg role="status" class="inline w-4 h-4 mr-2 text-white animate-spin dark:text-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
                    </svg>
                    Sending...
                  </>
                   :
                   <>
                   Send
                   </>
                  }
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