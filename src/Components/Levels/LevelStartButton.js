import { useRef } from "react"
import gsap from "gsap"

const LevelStartButton = ({setStarted, time, setTime, setGameOverOpen}) =>
{
    // Refs
    const wrapperRef = useRef()
    const ref = useRef()

    // Time to be used for the countdown
    let timeLeft = time

    // Handle start button click
    const handleStart = () =>
    {
        // Change state of start
        setStarted(true)

        // Animations
        gsap.to(ref.current, {duration:0.5, opacity:0, display:"none"})
        gsap.to(wrapperRef.current, {duration:0.5, opacity:0, display:"none"})

        // Start the countdown for level
        const timer = setInterval(()=>{
            if(timeLeft<=1)
            {

                clearInterval(timer)
                setGameOverOpen(true)
            }

            timeLeft--
            setTime(timeLeft)
        },1000)
    }

    return(
        <div className="level-start-button-wrapper" ref={wrapperRef}>
            <div className="level-start-button" ref={ref}>
                <button onClick={handleStart}>START</button>
            </div>
        </div>
    )
}

export default LevelStartButton