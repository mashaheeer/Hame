import React, { useCallback, useEffect, useMemo, useState } from "react";
import './styles.css'
import midBlob from '../../ComingSoon/midBlob.png'
import blobRight1 from '../../ComingSoon/BlobRight1.png'
import blobRight2 from '../../ComingSoon/BlobRight2.png'
import blobLeft1 from '../../ComingSoon/blobleft1.png'
import blobLeft2 from '../../ComingSoon/BlobLeft2.png'
import soon from '../../ComingSoon/comingsoon.png'
import logo from '../../ComingSoon/logo.png'
import text from '../../ComingSoon/slogan.png'
import smallComingSoon from '../../ComingSoon/500comingsoon.png'

export const Home = () => {
    const [soonSrc,setSoonSrc] = useState('')
    const [windowDimenion, setWindowDimension] = useState({
        winWidth: window.innerWidth,
        winHeight: window.innerHeight,
      })
    
      const detectSize = () => {
        setWindowDimension({
          winWidth: window.innerWidth,
          winHeight: window.innerHeight,
        })
      }
    
      useEffect(() => {
        
        window.addEventListener('resize', detectSize)
        if (windowDimenion.winWidth < 500){
            console.log(windowDimenion.winWidth)
            console.log('city boysss')
             setSoonSrc(smallComingSoon)
             console.log(soonSrc)
        }
        
        else setSoonSrc(soon)
        console.log(soonSrc)



        return () => {
          window.removeEventListener('resize', detectSize)
        }
       
      }, [windowDimenion])
    return (
        <main className="home-page">
            <div className="soon-container">
<div className='blob coming-soon'>
                <img src={soonSrc} />
            </div>
            <div className='blob logo'>
                <img src={logo} /> 
            </div>
            
            </div>
            
            <div className='blob midBlob-img'>
                <img src={midBlob} />
            </div>
            <div className='blob blobRight1-img'>
                <img src={blobRight1} />
            </div>
            <div className='blob blobRight2-img'>
                <img src={blobRight2} />
            </div>
            <div className='blob blobLeft1-img'>
                <img src={blobLeft1} />
            </div>
            <div className='blob blobLeft2-img'>
                <img src={blobLeft2} />
            </div>
            <div className='blob text'>
                <img src={text} />
            </div>


        </main>

    )

}