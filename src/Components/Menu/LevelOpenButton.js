import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import gsap from 'gsap'

import {BsFillLockFill} from 'react-icons/bs'
import {AiFillLock} from 'react-icons/ai'

const LevelOpenButton = ({levels, levelNumber, background, locked, setLockedModalOpen}) =>
{
    const ref = useRef()
    const navigate = useNavigate()

    // Handle level click
    const handleClick = (e) =>
    {
        const chosenLevel = levels[e.currentTarget.textContent-1]

        if(!chosenLevel.locked)
        {
            gsap.to(ref.current, {duration:0.3, scaleX:20, scaleY:20, zIndex:2}).then(()=>
            {
                navigate(`./levels/${levelNumber}`, { replace: false})
            })
        }
        else
        {
            setLockedModalOpen(true)
            window.setTimeout(()=>
            {
                setLockedModalOpen(false)
            }, 1000)
        }
    }

    return(
        <div
            className="level-open-button" 
            style={{backgroundColor: background}}
            onClick={handleClick}
            ref={ref}
        >
            {levelNumber}
            {locked?  <div className="level-locked"><BsFillLockFill /></div> : ""}
        </div>
    )
}

export default LevelOpenButton