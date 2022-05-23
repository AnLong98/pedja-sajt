import Image from 'next/image'
import pedja from "../../public/pedja.jpg"

export default function About({ children }) {
    return (
      <div className="container px-2 py-4 flex flex-grow">
        <div className="grid grid-rows-4 grid-flow-col gap-0 mb-0 pb-0">
            <div className="row-span-1 col-span-2">
                <div className="h-[200px] w-[200px] relative mx-auto py-4 border-double border-6 border-[#66fcf1] rounded-full basis-[13%] sm:mr-10 min-w-1/5"> 
                    <Image
                    src={pedja}
                    alt="Picture of the author"
                    layout="fill" // required
                    objectFit="cover" // change to suit your needs
                    className="rounded-full " // just an example
                    />
                </div>
            </div>
            <div className="row-span-1 col-span-2 p-2 mx-auto h-fit object-fill">
                <p className='font-mono text-xl text-white '>
                    HI THERE,<br></br> 
                </p>
                <p className='font-marker font-bold text-7xl text-[#66fcf1]'>
                        I'm Predrag Glavaš<br></br>
                </p>
            </div>
            <div className="row-span-2 col-span-2 mt-0 pt-0">
                <p className='font-mono text-justify text-xl text-white'>
                    Full stack developer from Novi Sad, Serbia. Specialized in web development, network programming and distributed systems. I hold MSc degree in computer science with research focus on time series prediction models, more specifically ARIMA family. Always willing to learn new technologies, and try exciting stuff ;)
                </p>
            </div>
        </div>
      </div>
    )
  }