import './top-nav.css'

import {AiOutlineClockCircle} from 'react-icons/ai'

import logo from '../../../resources/logo.png'
import clock from '../../../resources/clock.png'

import TopNavProgress from './TopNavProgress'
import { useState } from 'react'
import { useEffect } from 'react'

const TopNav = ({title, navColor, started, time}) =>
{
    return(
        <div className="top-nav" style={ {background: navColor} }>
            <img src={logo} alt="logo" />

            <div className="top-nav-level">
                <p>LEVEL {title}</p>
            </div>

            <TopNavProgress time={time} />

            <div className="top-nav-time-wrapper">
                <span className='top-nav-timer'>{time}</span>

                <div className={`top-nav-time ${started? "top-nav-time-started" : ""}`}>
                    <img src={clock} alt="clock" />
                </div>
            </div>            
        </div>
    )
}   

export default TopNav 