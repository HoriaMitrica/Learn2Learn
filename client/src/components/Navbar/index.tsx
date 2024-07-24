
import { Link } from "react-scroll"
import { AssetPaths } from "../../models/enum"
import "./style.scss"
import { useRef, useState } from "react";
import { SCROLL_DURATION } from "../../constants/constants";

export const Navbar: React.FC = () => {
    const [clicked,setClicked]=useState<boolean>(false);

    const navRef = useRef<HTMLElement>(null);
    const showNavbar = () => {
        if (navRef.current) {
            if (!clicked)
                navRef.current.style.height = 'auto';
            else
                navRef.current.style.height = '4em';
        }
        setClicked(!clicked);   
    }
    const   clickedLink=()=>{
        if (navRef.current) {
                navRef.current.style.height = '4em';
                setClicked(false);
        }
    }
    return (
        <>
            <header id='nav-wrapper'>
                <nav ref={navRef} id='nav'>
                    <div className='nav left'>
                        <Link className='link' to='landing' spy={true} smooth={true} offset={0} duration={100}>
                            <img src={AssetPaths.Logo} alt="Logo" className="logo-img" />
                        </Link>
                        <button className='btn-nav' onClick={showNavbar}>
                            Learn2Learn Education Center
                        </button>
                    </div>

                    <div className='nav right'>
                        <Link className='link nav-link home-link' to='landing' spy={true} smooth={true} offset={0} duration={SCROLL_DURATION}>
                            <span className='nav-link-span'>
                                Learn2Learn Education Center
                            </span>
                        </Link>
                        <Link onClick={clickedLink} className='link nav-link' to='about' spy={true} smooth={true} offset={0} duration={SCROLL_DURATION}>
                            <span className='nav-link-span xlarge-screen'>
                                Despre noi
                            </span>
                            <span className='nav-link-span large-screen'>
                                Despre
                            </span>
                        </Link>
                        <Link onClick={clickedLink} className='link nav-link' to='media_aparitions' spy={true} smooth={true} offset={0} duration={SCROLL_DURATION}>
                            <span className='nav-link-span xlarge-screen'>
                                Apariții media
                            </span>
                            <span className='nav-link-span large-screen'>
                                Apariții
                            </span>
                        </Link>
                        <Link onClick={clickedLink} className='link nav-link' to='articles' spy={true} smooth={true} offset={0} duration={SCROLL_DURATION}>
                            <span className='nav-link-span'>
                                Articole
                            </span>
                        </Link>
                        <Link onClick={clickedLink} className='link nav-link' to='courses' spy={true} smooth={true} offset={0} duration={SCROLL_DURATION}>
                            <span className='nav-link-span'>
                                Cursuri
                            </span>
                        </Link>
                        <Link onClick={clickedLink} className='link nav-link' to='offer' spy={true} smooth={true} offset={0} duration={SCROLL_DURATION}>
                            <span className='nav-link-span '>
                                Oferta
                            </span>
                        </Link>
                        <Link onClick={clickedLink} className='link nav-link' to='contact' spy={true} smooth={true} offset={0} duration={SCROLL_DURATION}>
                            <span className='nav-link-span'>
                                Contact
                            </span>
                        </Link>
                    </div>
                </nav>
            </header >
        </>
    )
}
