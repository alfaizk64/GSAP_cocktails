import React from 'react'
import { openingHours, socials } from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'

const Contact = () => {
    useGSAP(()=>{
         const titleSplit = SplitText.create('#contact h2',{type:'words'})
         console.log(titleSplit);
         
         const timeline = gsap.timeline({
            scrollTrigger:{
                trigger:'#contact',
                start:'top center',
            },
            ease:"power1.inOut"
         })
         timeline.from(titleSplit.words,{
            opacity:0,
            yPercent:100,
            stagger:0.02
         })
         .from('#contact h3, #contact p' , {
             opacity:0,
            yPercent:100,
            stagger:0.02
         })
         .to('#f-right-leaf',{
            y:'-50',
            duration:1,
            ease:"power1.inOut"
         })
         .to('#f-left-leaf',{
            y:'-50',
            duration:1,
            ease:"power1.inOut"
         },'<')
    })
  return (
   <footer id='contact'>
         	 <img src="/images/footer-right-leaf.png" alt="leaf-right" id="f-right-leaf" />
	 <img src="/images/footer-left-leaf.png" alt="leaf-left" id="f-left-leaf" />

       <div className="content">
        <h2>Where to find us</h2>
        <div >
         <h3>Visit Our Bar</h3>
         <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
        </div>
        <div>
            <h3>Contact US</h3>
            <p>(555) 987-6543</p>
            <p>hello@jsmcocktail.com</p>
        </div>
        <div>
            <h3>Open Every Day</h3>
            {
                openingHours.map((time)=>(
                <p key={time.day}>
                   {time.day} : {time.time}     
                </p>
                ))
            }
        </div>
        <div>
            <h3>Social</h3>
            <div className='flex-center gap-5'>
                {
                    socials.map((socials)=>(
                        <a key={socials.name}
                          href={socials.url}
                          target='_blank'
                          rel=''
                          aria-label={socials.icon}
                        >
                            <img src={socials.icon} alt="" />
                        </a>
                    ))
                }

            </div>
        </div>
       </div>
   </footer>
  )
}

export default Contact