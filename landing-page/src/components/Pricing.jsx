import { CheckCircle2  } from "lucide-react";
import {pricingOptions} from "../constants";

export default function Pricing(){
    return (
        <div className="mt-20" id="pricing">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">Preços</h2>
            <div className="flex flex-wrap">
                {pricingOptions.map((option,index)=>(
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                        <div className="p-10 border border-neutral-700 rounded-xl">
                            <p className="text-4xl mb-8">{option.title}
                            {option.title==="Pro" && 
                            <span className="bg-gradient-to-r from-blue-500 to-blue-800 
                            text-transparent bg-clip-text text-xl mb-4 ml-2">(Mais Popular)</span>}
                            </p>
                            <p className="mb-8">
                                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                                <span className="text-neutral-400 text-xl tracking-wide">/Mês</span>
                            </p>
                            <ul className="space-y-6">
                                {option.features.map((feature,index)=>(
                                    <li key={index} className=" flex items-center ">
                                        <CheckCircle2/>
                                        <span className="ml-2">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href="#" className="inline-flex justify-center text-center items-center w-full p-5 mt-20 tracking-tight text-3xl
                             hover:bg-blue-900 border border-blue-900 rounded-full transition duration-300">Começe Agora</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}