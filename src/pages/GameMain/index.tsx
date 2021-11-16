import { useSelector } from "react-redux"
import LevelPage from "../Levels"
import PipeBoard from "../pipeBoard"

const GameMain = () => {

    const {levelSelected} = useSelector((state:any )=> state.user)

    return (
        <div>
            {!levelSelected ? <LevelPage /> : <PipeBoard /> }    
        </div>
    )
}

export default GameMain
