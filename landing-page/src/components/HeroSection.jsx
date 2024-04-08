import giphy1 from '../assets/giphy.gif'
import giphy2 from '../assets/giphy2.gif'

export default function HeroSection(){
    return (
       <div className="flex flex-col items-center mt-6 lg:mt-20">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            Hospedagem poderosa para seu  <span className='bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text '>
            sucesso online</span> 
            </h1>
            <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
            Construindo o alicerce do seu sucesso digital: hospedagem confiável, escalável e personalizada para todas as suas necessidades online.
            </p>
            <div className="flex justify-center my-10">
                <a href="#" className='bg-gradient-to-r from-blue-400 to-blue-700 py-3 px-2  mx-3 rounded-md'>Conheça Agora!</a>
            </div>
            <div className='flex  flex-wrap mt-10 justify-center'>
                <img className='mx-2 my-4 rounded-lg border border-blue-700 shadow-blue-400' src={giphy1} alt="GIF Example"/>
                <img className='mx-2 my-4 rounded-lg border border-blue-700 shadow-blue-400' src={giphy2} alt="GIF Example"/>
            </div>
       </div>
    )
}