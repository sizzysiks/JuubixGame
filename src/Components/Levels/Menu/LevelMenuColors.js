import { useRef } from "react"
import { useEffect } from "react"
import gsap from "gsap"

import {MdBlock} from 'react-icons/md'
import {IoIosArrowBack} from 'react-icons/io'


// Color button component fro nav components
const ColorOption = ({id, color, text, setNavColor}) =>
{
    return(
        <div className="level-menu-btns" onClick={()=>{setNavColor(`${color}`)}}>
            <div id={`${id}`}>
                {id==="none-color"? <MdBlock style={{fontSize: "2.5rem"}} /> : ""}
            </div>
            <button>{text}</button>
        </div>
    )
}

// Color button component for background
const BackColorOption = ({id, color, text, setBackColor}) =>
{
    return(
        <div className="level-menu-btns" onClick={()=>{setBackColor(`${color}`)}}>
            <div id={`${id}`}></div>
            <button>{text}</button>
        </div>
    )
}



// Color menu page
const LevelMenuColors = ({setColorsOpen, setNavColor, setBackColor}) =>
{
    const ref = useRef()

    useEffect(()=>
    {
        gsap.to(ref.current,{duration:0.1, scaleX:1, scaleY:1})
    }, [])

    return(
        <div className="level-menu-colors" ref={ref}>
            <div className="pop-up-top">
                <button  onClick={()=>{setColorsOpen(false)}}><IoIosArrowBack /></button>
                <h3>Choose Theme</h3>
            </div>

            <div className="level-menu-options-btns">
                <p>Pick a color for the <span className="level-menu-options-text">navigation bars</span></p>
                <ColorOption id="none-color" color="rgba(0,0,0,0)" text="None" setNavColor={setNavColor} />
                <ColorOption id="black-color" color="#111111" text="Black" setNavColor={setNavColor} />
                <ColorOption id="blue-color" color="#000022" text="Blue" setNavColor={setNavColor} />
                <ColorOption id="grey-color" color="#d5d5d5" text="Grey" setNavColor={setNavColor} />
                <ColorOption id="white-color" color="#ffffff" text="White" setNavColor={setNavColor} />
            </div>

            <div className="level-menu-options-btns">
                <p>Pick a color for the <span className="level-menu-options-text">background</span></p>
                <BackColorOption id="black-color" color="#111111" text="Black" setBackColor={setBackColor} />
                <BackColorOption id="blue-color" color="#000022" text="Blue" setBackColor={setBackColor} />
                <BackColorOption id="grey-color" color="#d5d5d5" text="Grey" setBackColor={setBackColor} />
                <BackColorOption id="white-color" color="#ffffff" text="White" setBackColor={setBackColor} />
            </div>
        </div>
    )
}

export default LevelMenuColors