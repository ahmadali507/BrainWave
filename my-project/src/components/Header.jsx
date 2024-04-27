import {useState} from 'react'
import { navigation } from "../constants"
import {brainwave} from '../assets'
import {useLocation} from 'react-router-dom'
import Button from "./Button"
import Menusvg from "../assets/svg/MenuSvg"
import {HamburgerMenu} from './design/Header'
const Header = () => {

    const [openNavigation , setopenNavigation] = useState(false); 
    const pathname  = useLocation(); 

    const toggleNavigation = () =>{
        if(openNavigation){
            setopenNavigation(false)
        }
        else {
            setopenNavigation(true)
        }
    }
    return (
        <>
            <div className={`fixed top-0  left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${ (openNavigation) ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm' }
            `}
            >
                <div className='flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4'>
                    <a className="block 2-[12rem] xl:mr-8" href="#hero">
                        <img src={brainwave} width={190} height={40} alt="no image found" />
                    </a>

                    <nav className={`${ openNavigation ? 'flex' : "hidden"} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
                        <div className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row'>
                            {
                                navigation.map((item) =>(
                                    <a href={item.url} key={item.id} className={`block relative font-code text-2xl uppercase  text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? 'lg:hidden'  : " "} px-6 py-4 md:py-6 lg:mr-0.25 lg:text-xs lg:font-semibold ${item.url === pathname.hash ? 'z-2 lg:text-n-1': 'lg:text-n-1/50'} lg:leading-5 lg:hover:text-n-1 xl:px-12`} >
                                        {item.title}
                                    </a> 
                                ))
                            }
                           
                        </div>
                            <HamburgerMenu/>

                    </nav>

                    <a href="#signUp" className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block" >NEw account</a>
                     <Button className="hidden lg:flex" href="#login">SignIn</Button>
                     <Button className="ml-auto lg:hidden " px = "px-3" onClick={toggleNavigation}>
                        <Menusvg openNavigation={openNavigation}> </Menusvg>
                     </Button>
                </div>

            </div>
        </>
    )
}

export default Header; 
