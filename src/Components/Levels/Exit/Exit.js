import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import './exit.css'

import {IoExitOutline} from 'react-icons/io5'
import {IoReturnDownBackSharp} from 'react-icons/io5'
import { useRef } from 'react'

const Exit = ({setExitIsOpen}) =>
{
    const ref = useRef()

    useEffect(()=>
    {
        gsap.to(ref.current, {duration:0.1, opacity:1, x:0})
    },[])

    return(
        <div className="exit-wrapper" ref={ref}>
            <Link to="/" className='exit-btn'>EXIT <IoExitOutline className='exit-icons' /></Link>
            <button className='return-btn' onClick={()=>{setExitIsOpen(false)}}><IoReturnDownBackSharp className='exit-icons' /> RETURN</button>
        </div>
    )
}

export default Exit