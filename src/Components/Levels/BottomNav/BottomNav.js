import './bottom-nav.css'

import {RiArrowGoBackLine} from 'react-icons/ri'
import {MdRefresh} from 'react-icons/md'
import {BsArrowsMove} from 'react-icons/bs'


const BottomNav = ({setMenuIsOpen, setExitIsOpen, navColor}) =>
{
    const handleMenuClick = () =>
    {
        setMenuIsOpen(true)
    }

    return(
        <div className="bottom-nav-wrapper" style={ {background: navColor }}>
            <button className='bottom-menu-btn' onClick={handleMenuClick}>MENU</button>

            <button className='bottom-menu-rewind-btn'><RiArrowGoBackLine /></button>

            <button className='bottom-menu-controls-btn'><BsArrowsMove /></button>

            <button className='bottom-menu-forward-btn'><MdRefresh /></button>

            <button className='bottom-exit-btn' onClick={()=>{setExitIsOpen(true)}}>EXIT</button>
        </div>
    )
}

export default BottomNav