
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
                        <Link className='link nav-link' to='about' spy={true} smooth={true} offset={0} duration={100}>
                            <span className='nav-link-span'>
                                <span className='u-nav'>
                                    About
                                </span>
                            </span>
                        </Link>
                        <Link className='link nav-link' to='about' spy={true} smooth={true} offset={0} duration={100}>
                            <span className='nav-link-span'>
                                <span className='u-nav'>
                                    About
                                </span>
                            </span>
                        </Link>
                        <Link className='link nav-link' to='about' spy={true} smooth={true} offset={0} duration={100}>
                            <span className='nav-link-span'>
                                <span className='u-nav'>
                                    About
                                </span>
                            </span>
                        </Link>
                        <Link className='link nav-link' to='about' spy={true} smooth={true} offset={0} duration={100}>
                            <span className='nav-link-span'>
                                <span className='u-nav'>
                                    About
                                </span>
                            </span>
                        </Link>
                    </div>
                </nav>
            </header >
        </>
    )
}
