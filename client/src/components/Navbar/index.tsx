
import { Link } from "react-scroll"
import { AssetPaths } from "../../models/enum"
import "./style.scss"
import { useRef } from "react";

export const Navbar: React.FC = () => {
    const navRef = useRef<HTMLElement>(null);

    return (
        <>
            <header id='nav-wrapper'>
                <nav ref={navRef} id='nav'>
                    <div className='nav left'>
                        <Link className='link' to='landing' spy={true} smooth={true} offset={0} duration={100}>
                            <img src={AssetPaths.Logo} alt="Logo" className="logo-img" />
                        </Link>
                    </div>

                    <div className='nav right'>
                        <Link className='link nav-link' to='landing' spy={true} smooth={true} offset={0} duration={100}>
                            <span className='nav-link-span'>
                                Learn2Learn Education Center
                            </span>
                        </Link>
                        <Link className='link nav-link' to='about' spy={true} smooth={true} offset={0} duration={100}>
                            <span className='nav-link-span'>
                                Despre noi
                            </span>
                        </Link>
                        <Link className='link nav-link' to='media_aparitions' spy={true} smooth={true} offset={0} duration={100}>
                            <span className='nav-link-span'>
                                Apariții media
                            </span>
                        </Link>
                        <Link className='link nav-link' to='articles' spy={true} smooth={true} offset={0} duration={100}>
                            <span className='nav-link-span'>
                                Articole
                            </span>
                        </Link>
                        <Link className='link nav-link' to='courses' spy={true} smooth={true} offset={0} duration={100}>
                            <span className='nav-link-span'>
                                Cursuri
                            </span>
                        </Link>
                        <Link className='link nav-link' to='offer' spy={true} smooth={true} offset={0} duration={100}>
                            <span className='nav-link-span'>
                                Oferta
                            </span>
                        </Link>
                        <Link className='link nav-link' to='contact' spy={true} smooth={true} offset={0} duration={100}>
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
