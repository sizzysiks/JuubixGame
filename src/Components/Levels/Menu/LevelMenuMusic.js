import { useRef, useEffect } from "react"
import gsap from "gsap"

import {IoIosArrowBack} from 'react-icons/io'

const LevelMenuMusic = ({setMusicOpen}) =>
{
    const ref = useRef()

    useEffect(()=>
    {
        gsap.to(ref.current,{duration:0.1, scaleX:1, scaleY:1})
    }, [])

    return(
        <div className="level-menu-music" ref={ref}>
            <div className="pop-up-top">
                <button  onClick={()=>{setMusicOpen(false)}}><IoIosArrowBack /></button>
                <h3>Music</h3>
            </div>

            <p className="level-music-switch-text">Enable or disble sound</p>

            <label className="level-music-switch">
                <input type="checkbox" />
                <span className="level-music-slider"></span>
            </label>

            <div className="level-music-options">
                <p>Pick a genre</p>
                <button>Jazz</button>
                <button>Pop</button>
                <button>Rock</button>
                <button>Drum</button>
                <button>Youtube</button>
            </div>
        </div>
    )
}

export default LevelMenuMusic