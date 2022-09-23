import BottomGrid from './BottomGrid'
import './level-grids.css'
import TopGrid from './TopGrid'

const LevelGrids = ({color}) =>
{
    return(
        <div className="level-grids">
            <TopGrid color={color} />
            <BottomGrid />
        </div>
    )
}

export default LevelGrids