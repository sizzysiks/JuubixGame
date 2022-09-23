import battery from '../../../resources/battery.png'

const TopNavProgress = ({time}) =>
{
    let clipSpeed = (100 / 60) * time

    return(
        <div className="top-nav-progress">
            <div className="top-nav-creativity">
                <img src={battery} alt="" />
                <div className="top-nav-creativity-bar"></div>
            </div>
            
            <div className="top-nav-solving">
                <img src={battery} alt="" />
                <div className="top-nav-solving-bar"></div>
            </div>

            <div className="top-nav-speed">
                <img src={battery} alt="" />
                <div className="top-nav-speed-bar" style={ { clipPath : `polygon(0 0, ${clipSpeed}% 0, ${clipSpeed}% 100%, 0% 100%)`}}></div>
            </div>
            
            <div className="top-nav-strategy">
                <img src={battery} alt="" />
                <div className="top-nav-strategy-bar"></div>
            </div>
        </div>
    )
}

export default TopNavProgress