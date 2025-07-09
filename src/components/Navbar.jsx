import React from 'react'
import { navLinks } from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
function Navbar() {
useGSAP(()=>{
  
     const navTween = gsap.timeline({
        scrollTrigger:{
            trigger:'nav',
            start:'bottom top'
        }
     })
         navTween.fromTo("nav",{
            backgroundColor: "transparent",

        },
        {
            backgroundColor: "#00000050",
            backgroundFilter:"blur(10px)",
            duration:1,
            ease:'power1.inOut'
        }
    )
    //    gsap.from(".li-links",{
    //         yPercent:100,
    //         duration:1.8,
    //         ease:"expo.out",
    //         stagger:0.6
    //     })
})
    
  return (
    <nav>
        <div>
            <a href="#home" className='flex items-center gap-2'>
                <img src="/images/logo.png" alt="Velvet Pour" />
                <p>Velvet Pour</p>
            </a>
            <ul>
                {
                    navLinks.map((links)=>(
                        <li key={links.id} className='li-links'>
                           <a href="" >{links.title}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    </nav>
  )
}

export default Navbar