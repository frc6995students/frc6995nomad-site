import { min } from "date-fns/esm";
import { useEffect, useState } from "react";

export const PageHeader = () => {
    const smallHeight = 54;
    const getHeight = (scrollPos) => {
        return Math.max(smallHeight, 2*smallHeight-10-scrollPos); //subtract 10 to apply bottom padding at large mode
    }
    const [height, setHeight] = useState(getHeight(0));

    useEffect(() => {
        if(typeof window !== "undefined") {
            window.addEventListener("scroll", ()=>setHeight(getHeight(window.scrollY)))
        }
    }, [])
    
    return (<div className='navbar' >
                <div className='navbar-contents'>
                    <div className="header-links-left">
                    <a className='header-links' href='/about'>
                      {' '}
                      <span>About</span>
                    </a>
                    <a className='header-links' href='/galleries/photos'>
                      {' '}
                      <span>Photos</span>
                    </a>
                    </div>

                    <a href="/" className="header-nomad-image">
                    <img
                      className="nomad-logo-text"
                      src='/Scorpion.svg'
                      alt='NOMAD Home'
                      width="auto"
                      height={height}
                      ></img>
                    {height > smallHeight + 5 && (
                    <img
                      className={`nomad-logo-text-overlay ${height < 98 ? "" : "height-full"}`}
                      src='/ScorpionOverlay.svg'
                      alt='NOMAD Home'
                      width="auto"
                      height={height}
                      ></img>)}
                    </a>
                    <div className='header-links-right'><a className='header-links' href='/blog'>
                      {' '}
                      <span >Blog</span>
                    </a></div>
                    
                    </div>
                </div>)
}

