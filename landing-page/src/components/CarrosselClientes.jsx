
import { useState,useEffect } from 'react';
import {clients} from '../constants'
export default function CarrosselClientes(){

  const [currentSlide, setCurrentSlide] = useState(0);
 const [totalImages] = useState(clients.length)
 const [intervalTime] = useState(5000)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalImages);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [totalImages, intervalTime]);

  const totalSlides = 5; // Defina o número total de slides aqui
 
  return (
    <div >
        <h1 className='text-center text-4xl sm:text-5xl lg:text-6xl mt-14'>Principais Clientes</h1>
        <div className="relative mt-7 flex items-center justify-center  ">
     
        
        {/* Conteúdo do carrossel */}
        <div className="flex items-center justify-center h-40 w-40 transition-transform duration-1000 ease-in-out">
            {[...Array(totalSlides)].map((_, index) => {
            const clientIndex = (currentSlide + index) % totalImages;
            const client = clients[clientIndex];
            return (
                <div key={index} className="flex-none w-full hover:h-44 transform transition-opacity duration-1000 ${!isFirstSlide && 'opacity-0 scale-95 ">
                <img
                    src={client.img}
                    alt={client.name}
                    className="w-40 border border-blue-300 rounded-md transition-opacity duration-1000  "
                />
               
                </div>
            );
            })}
        </div>
        
        </div>
    </div>
  );



}
     
  
