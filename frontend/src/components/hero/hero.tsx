import React, { useState } from 'react'

import './hero.css'

export default function Hero() {

    const [sliderPosition, setSliderPosition] = useState(0)
    const [slider, setSlider] = useState([
        "ash_pikachu.jpg",
        "banner1.png",
        "banner2.jpg",
        "greninja-ash-contra-mega-charizard_4183x2236_xtrafondos.com.jpg"
    ])
    
    const handleSlider = () =>{
        if(sliderPosition === slider.length){
            setSliderPosition(0)
            console.log("se cumplio")
        }else{
            setSliderPosition(sliderPosition +1)
        }
    }

    // setInterval(handleSlider, 3000)

    return (<>
        <div className='hero'>
            <img className='image-hero' src={`http://localhost:5000/static/image-dev/banner-image/${slider[sliderPosition]}`} alt="" />
            <div className='change_slider_box'>
                {
                    slider.map((each, index) =>{
                            return <button className='change_slider_button' key={index} onClick={()=>{ 
                                        setSliderPosition(index)
                                        clearInterval()
                                    }}> 
                                </button>
                                
                    })
                }
            </div>
        </div>
      </>
    )
  
}
