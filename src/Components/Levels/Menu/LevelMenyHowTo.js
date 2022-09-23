import { useRef, useEffect } from "react"
import gsap from "gsap"

import {IoIosArrowBack} from 'react-icons/io'

const LevelMenuHowTo = ({setHowToOpen}) =>
{
    const ref = useRef()

    useEffect(()=>
    {
        gsap.to(ref.current,{duration:0.1, scaleX:1, scaleY:1})
    }, [])

    return(
        <div className="level-menu-how-to" ref={ref}>
            <div className="pop-up-top">
                <button  onClick={()=>{setHowToOpen(false)}}><IoIosArrowBack /></button>
                <h3>How To Play</h3>
            </div>

            <h1>Helpful tips for playing the game</h1>

            <p>1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatibus autem numquam, aperiam nam dolores.</p>

            <p>2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fugiat, aspernatur, quaerat quidem expedita soluta omnis, iure temporibus quisquam esse ratione et. Culpa, deleniti quis!</p>
        </div>
    )
}

export default LevelMenuHowTo