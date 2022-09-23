import { useRef, useEffect } from "react"
import gsap from "gsap"

import {IoIosArrowBack} from 'react-icons/io'
import {GiGearStick} from 'react-icons/gi'
import {BsArrowsMove} from 'react-icons/bs'

const LevelMenuControls = ({setControlsOpen}) =>
{
    const ref = useRef()

    useEffect(()=>
    {
        gsap.to(ref.current,{duration:0.1, scaleX:1, scaleY:1})
    }, [])

    return(
        <div className="level-menu-controls" ref={ref}>
            <div className="pop-up-top">
                <button  onClick={()=>{setControlsOpen(false)}}><IoIosArrowBack /></button>
                <h3>Choose Controls</h3>
            </div>

            <div className="level-menu-controls-option">
                <GiGearStick className="level-menu-controls-icon" />
                <button>Gear stick</button>
            </div>

            <div className="level-menu-controls-option">
                <BsArrowsMove className="level-menu-controls-icon" />
                <button>Direction Arrows</button>
            </div>
        </div>
    )
}

export default LevelMenuControls