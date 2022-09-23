import { useState } from 'react'
import './menu.css'

import LevelOpenButton from './LevelOpenButton'

import {AiOutlineWarning} from 'react-icons/ai'

const Menu = ({levels}) =>
{
    const [lockedModalOpen, setLockedModalOpen] = useState(false)

    return(
        <div className="menu-wrapper">
            <div className="levels-header">
                <h1>Select Level</h1>
            </div>
            
            <div className="levels-wrapper">
                {levels.map(level =>
                    <LevelOpenButton 
                        key={level.key} 
                        levels={levels} 
                        levelNumber={level.name} 
                        background={level.color} 
                        locked={level.locked} 
                        setLockedModalOpen={setLockedModalOpen}
                    />)
                }
            </div>
{/* 
            <div className="menu-buttons-wrapper">
                <button>Exit</button>
                <button>Menu</button>
            </div> */}

            {lockedModalOpen? 
                <div className="level-locked-modal">
                    <AiOutlineWarning />
                    <p>This level is still locked</p>
                </div>
                : ""
            }
        </div>
    )
}

export default Menu