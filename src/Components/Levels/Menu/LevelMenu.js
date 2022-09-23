import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import gsap from 'gsap'
import './level-menu.css'


// Import icons
import {IoIosArrowBack} from 'react-icons/io'
import {AiOutlinePlayCircle} from 'react-icons/ai'
import {GiMusicalNotes} from 'react-icons/gi'
import {GiRank2} from 'react-icons/gi'
import {GiProgression} from 'react-icons/gi'
import {BsController} from 'react-icons/bs'
import {MdColorLens} from 'react-icons/md'
import LevelMenuColors from './LevelMenuColors'
import LevelMenuHowTo from './LevelMenyHowTo'
import LevelMenuControls from './LevelMenuControls'
import LevelMenuRankings from './LevelMenuRankings'
import LevelMenuMusic from './LevelMenuMusic'

const LevelMenu = ({setMenuIsOpen, setNavColor, rankings, setBackColor}) =>
{    
    // Refs
    const ref = useRef()

    // State
    const [howToOpen, setHowToOpen] = useState(false)
    const [musicOpen, setMusicOpen] = useState(false)
    const [rankingsOpen, setRankingsOpen] = useState(false)
    const [controlsOpen, setControlsOpen] = useState(false)
    const [colorsOpen, setColorsOpen] = useState(false)

    // Handle color options click
    const handleOption = (e) =>
    {
        if(e.currentTarget.id === "menu-option-colors")
        {
            setColorsOpen(true)
        }   
    }

    // Effect for animations
    useEffect(()=>
    {
        gsap.to(ref.current,{duration:0.3, scaleX:1, scaleY:1, x:0, ease: "expo.out"})
    },[])
    
    return(
        <div className="level-menu-wrapper" ref={ref}>
            <div className="pop-up-top">
                <button onClick={()=>{setMenuIsOpen(false)}}><IoIosArrowBack /></button>
                <h3>Menu</h3>
            </div>

            <div className="level-menu-options">
                <button onClick={()=>{setHowToOpen(true)}}>
                    <AiOutlinePlayCircle className='level-menu-icons' style={{color:"#19eb55"}} /> 
                    How to play?
                </button>

                <button onClick={()=>{setMusicOpen(true)}}>
                    <GiMusicalNotes className='level-menu-icons' style={{color:"#1990eb"}} /> 
                    Music
                </button>

                <button onClick={()=>{setRankingsOpen(true)}}>
                    <GiRank2 className='level-menu-icons' style={{color:"#8d19eb"}} /> 
                    Ranking
                </button>

                <button><GiProgression  className='level-menu-icons' style={{color:"#d619eb"}}/> Scoring</button>

                <button onClick={()=>{setControlsOpen(true)}}>
                    <BsController className='level-menu-icons' style={{color:"#192eeb"}} /> 
                    Choose controls
                </button>

                <button id='menu-option-colors' onClick={handleOption}>
                    <MdColorLens className='level-menu-icons' style={{color:"eb194e"}} /> 
                    Customize theme
                </button>
            </div>

            {howToOpen? <LevelMenuHowTo setHowToOpen={setHowToOpen} /> : ""}
            {musicOpen? <LevelMenuMusic setMusicOpen={setMusicOpen} /> : ""}
            {rankingsOpen? <LevelMenuRankings setRankingsOpen={setRankingsOpen} rankings={rankings} /> : ""}
            {controlsOpen? <LevelMenuControls setControlsOpen={setControlsOpen} /> : ""}
            {colorsOpen? <LevelMenuColors setColorsOpen={setColorsOpen} setNavColor={setNavColor} setBackColor={setBackColor} /> : ""}
        </div>
    )
}

export default LevelMenu