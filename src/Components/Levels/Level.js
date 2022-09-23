import { useEffect, useRef,useState } from 'react'
import { useParams } from 'react-router-dom'
import gsap from 'gsap'
import './level.css'


import LevelGrids from './Grids/LevelGrids'
import LevelStartButton from './LevelStartButton'
import TopNav from './TopNav/TopNav'
import BottomNav from './BottomNav/BottomNav'
import LevelMenu from './Menu/LevelMenu'
import Exit from './Exit/Exit'
import PopUpSolving from './PopUps/PopUpSolving'
import GameOver from './GameOver'


const Level = ({levels, rankings}) =>
{
    // Ref for overlay
    const overlayRef = useRef()

    // State for background and nav components color
    const [navColor, setNavColor] = useState("#111111")
    const [backColor, setBackColor] = useState("radial-gradient(circle, rgb(6, 0, 97) 64%, rgb(6, 0, 44) 100%, rgba(58,59,96,1) 100%)")

    // State for time
    const [started, setStarted] = useState(false)
    const [time, setTime] = useState(60)
    const [stopTimer, setStopTimer] = useState(false)

    // State for open menu options
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const [exitIsOpen, setExitIsOpen] = useState(false)
    const [quizOpen, setQuizOpen] = useState(false)
    const [gameOverOpen, setGameOverOpen] = useState(false)

    // Retrieve key from parameters & find the level that corresponds to that key
    const key = useParams().id
    const level = levels.find( level => level.key === Number(key) )

    useEffect(()=>
    {
        gsap.to(overlayRef.current, {duration:0.3, opacity:0, display:'none'})
    })

    // Effect for quiz poping up (At a chosen time interval)
    useEffect(()=>
    {
        // window.setTimeout(()=>
        // {
        //     setQuizOpen(true)
        // }, 2000)
    },[])

    return(
        <div className="level" style={{background: backColor}}>
            <div className="level-overlay" ref={overlayRef}></div>

            <TopNav title={level.name} navColor={navColor} started={started} time={time} />

            <LevelStartButton setStarted={setStarted} time={time} setTime={setTime} setGameOverOpen={setGameOverOpen} />

            {menuIsOpen? <LevelMenu setMenuIsOpen={setMenuIsOpen} navColor={navColor} setNavColor={setNavColor} setBackColor={setBackColor} rankings={rankings} /> : ""}
            {exitIsOpen? <Exit setExitIsOpen={setExitIsOpen} /> : ""}

            <LevelGrids color={"#222277"} />

            <BottomNav setMenuIsOpen={setMenuIsOpen} setExitIsOpen={setExitIsOpen} navColor={navColor} />

            {quizOpen? <PopUpSolving setQuizOpen={setQuizOpen} /> : ""}

            {gameOverOpen? <GameOver /> : ""}
        </div>
    )
}

export default Level