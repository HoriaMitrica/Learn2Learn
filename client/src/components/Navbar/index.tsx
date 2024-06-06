
import { Link } from "react-scroll"
// import { AssetPaths } from "../../models/enum"
import "./style.scss"

export const Navbar: React.FC = () => {

    return (
        <>
        {/* <img src={AssetPaths.Logo} alt="Logo" className="logo-img" /> */}
            <header id='nav-wrapper'>
                <nav >
                <div className='nav right'>
                <Link className='nav-link' to='landing' spy={true} smooth={true} offset={0} duration={100}>
                        <span className='nav-link-span'>
                            <span className='u-nav'>
                                Home
                            </span>    
                        </span> 
                    </Link>
                    <Link className='nav-link' to='about' spy={true} smooth={true} offset={0} duration={100}>
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
