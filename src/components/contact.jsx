import Image from 'next/image'
import github from "../../public/GH.png"
import linkedin from "../../public/linkedin.png"
import Link from 'next/link'
export default function Contact({ children }) {
    return (
      <div className="container px-2 py-4 flex flex-grow mx-auto w-full">
        <form className="w-full max-w-lg mx-auto">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">
                First Name
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-white border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
                Last Name
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-white border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                E-mail
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email"/>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                Message
              </label>
              <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
            </div>
          </div>
          <div className="w-full">
              <button className="shadow bg-teal-400 hover:bg-teal-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full" type="button">
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
        
      </div>
    )
  }