import Image from 'next/image'
import Link from 'next/link'
import {projectsList} from '../src/data/projects-list'
export default function Projects({children}){

    return(
    <section className=" px-2  pb-10 lg:pb-20 bg-[#1f2833]">
        <div className="container">
            <div className="flex flex-wrap -mx-4">
                {
                projectsList.map(el=>

                    <div className="m-5 max-w-sm bg-white rounded-lg border-[#66fcf1] shadow-md border-solid border-6">
                        <div className='h-[208px] container'>
                            <Image class="rounded-t-lg mx-auto"  src={el.image} alt="" />
                        </div>
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{el.name}</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{el.text}</p>
                            <Link  href={el.github}> 
                                <a className="inline-flex bg-teal-400 hover:bg-teal-600 focus:shadow-outline focus:outline-none text-white hover:no-underline items-center py-2 px-3 text-sm font-medium text-center rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                </a>
                            </Link>
                        </div>
                    </div>
               
                )
            }
            </div>
            
        </div>
    </section>

    )
}