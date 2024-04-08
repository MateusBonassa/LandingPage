import workImg from '../assets/workImg.png'
import {checklistItems} from '../constants'
import { CheckCircle2  } from "lucide-react";

export default function Work(){
    return(
        <div className="mt-20" id="work">
            <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center mt-6 px-3 py-2 tracking-wide '>
                <span className='bg-gradient-to-r from-blue-300 to-blue-800 text-transparent bg-clip-text'>
                    Sobre Nossos Serviços
                </span>
            </h2>
            <div className='flex flex-wrap justify-center'>
                <div className='p-2 w-full lg:w-1/2'>
                    <img src={workImg} alt="meeting"/>
                </div>
                <div className='pt-6 w-full lg:w-1/2'>
                    {
                        checklistItems.map((item,index)=>(
                            <div key={index} className='flex mb-10 '> 
                                <div className='mx-6 text-green-400 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full '> 
                                    <CheckCircle2/>
                                </div>
                                <div>
                                    <h5 className='mt-1 mb-2 text-lg'>{item.title}</h5>
                                    <p className='text-base mt-1 text-neutral-500'>{item.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}