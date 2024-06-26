import {socialMediaLinks,sobreLinks, communityLinks} from '../constants'

export default function Footer(){
    return(
    <footer className='mt-20 border-t py-10 border-neutral-700   '>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center text-center '>
            <div >
                <h3 className='text-md font-semibold mb-4'>Sobre nós</h3>
                <ul className='space-y-2'>
                    {sobreLinks.map((link,index)=>(
                        <li key={index}>
                            <a className='text-neutral-300 hover:text-white' href={link.href}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div  >
                <h3 className='text-md font-semibold mb-4'>Redes Sociais</h3>
                <ul className='space-y-2'>
                    {socialMediaLinks.map((link,index)=>(
                        <li key={index} className='flex space-x-2'>
                            {link.icon}
                            <a className='text-neutral-300 hover:text-white' href={link.href}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='mr-2'>
                <h3 className='text-md font-semibold mb-4'>Comunidade</h3>
                <ul className='space-y-2'>
                    {communityLinks.map((link,index)=>(
                        <li key={index}>
                            <a className='text-neutral-300 hover:text-white' href={link.href}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <div className="mt-8 border-t border-gray-700">
        <div className="container mx-auto text-sm text-center py-4">
          © 2024 Todos os direitos reservados.
        </div>
      </div>
    </footer>
    )

    /*
    
    */
}