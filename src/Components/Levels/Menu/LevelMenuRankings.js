import { useRef, useEffect, useState } from "react"
import gsap from "gsap"

import {IoIosArrowBack} from 'react-icons/io'


const LevelRankingsSingle = ({ranking, index, setCurrentUserRank}) =>
{
    const currentUser = "user1"
    
    // Find the rank that corresponds to the current user and change the state of parent component
    useEffect(()=>{
        if(ranking.username === currentUser)
        {
            setCurrentUserRank(index+1)
        }
    },[])

    return(
        <div className={`level-ranking-single ${currentUser === ranking.username? "level-ranking-single-active" : ""}`}> 
            <div className="ranking-single-spot">
                <p>{index+1}</p>
            </div>

            <div className="ranking-single-content">
                <div className="ranking-profile">
                    <img src={require(`../../../resources/${ranking.profileUrl}.jpg`)} alt="profile" />
                </div>

                <p>{ranking.username}</p>
                <span>{ranking.total}</span>
            </div>
        </div>
    )
}

const LevelMenuRankings = ({setRankingsOpen, rankings}) =>
{
    // Ref for wrapper
    const ref = useRef()

    // State for active category button
    const [activeCategory, setActiveCategory] = useState("total")
    const [currentUserRank, setCurrentUserRank] = useState(null)
    
    // Effect for animations
    useEffect(()=>
    {
        gsap.to(ref.current,{duration:0.1, scaleX:1, scaleY:1})
    }, [])

    return(
        <div className="level-menu-rankings" ref={ref}>
            <div className="pop-up-top">
                <button  onClick={()=>{setRankingsOpen(false)}}><IoIosArrowBack /></button>
                <h3>Rankings</h3>
            </div>

            <div className="level-rankings-categories">
                <button 
                    className={`${activeCategory === "total"? "level-rankings-categories-active" : "level-rankings-categories-btn"}`}
                    onClick={()=>{setActiveCategory("total")}}
                >
                    Total
                </button>
                
                <button 
                    className={`${activeCategory === "creativity"? "level-rankings-categories-active" : "level-rankings-categories-btn"}`}
                    onClick={()=>{setActiveCategory("creativity")}}
                >
                    Creativity
                </button>

                <button 
                    className={`${activeCategory === "tactic"? "level-rankings-categories-active" : "level-rankings-categories-btn"}`}
                    onClick={()=>{setActiveCategory("tactic")}}
                >
                    Tactic
                </button>

                <button 
                    className={`${activeCategory === "solving"? "level-rankings-categories-active" : "level-rankings-categories-btn"}`}
                    onClick={()=>{setActiveCategory("solving")}}
                >
                    Solving
                </button>

                <button 
                    className={`${activeCategory === "speed"? "level-rankings-categories-active" : "level-rankings-categories-btn"}`}
                    onClick={()=>{setActiveCategory("speed")}}
                >
                    Speed
                </button>
            </div>

            <div className="level-rankings-wrapper">
                {rankings.map((ranking, index) =>
                    <LevelRankingsSingle key={ranking.id} ranking={ranking} index={index} setCurrentUserRank={setCurrentUserRank} />
                )}
            </div>

            <div className="level-rankings-player">
                <h5>Total rank</h5>
                <h2>{currentUserRank}</h2>
            </div>
        </div>
    )
}

export default LevelMenuRankings