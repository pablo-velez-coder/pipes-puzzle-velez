import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ws from 'src/api/config'
import Button from 'src/components/button'
import Header from 'src/components/header'
import HelpModal from 'src/components/help-modal'
import Loader from 'src/components/loader'
import PipeTile from 'src/components/pipe-tile'
import VerifyModal from 'src/components/verify-modal'
import { Tile } from 'src/interfaces/tile'
import { types } from 'src/types'
import { arrangingMap } from 'src/utils/arrangingMap'
import styles from './styles.module.scss'

const PipeBoard = () => {
    
    const [map, setMap] = useState<Tile[][]>([])
    const dispatch = useDispatch();
    const {levelSelected, moves} = useSelector((state: any) => state.user)
    const [isVisible, setIsVisible] = useState(false)
    const [isVerifyModalVisible, setIsVerifyModalVisible] = useState(false)
    const [verifyText, setVerifyText] = useState('')
    const [helpText, setHelpText] = useState('')

    const handleRotateTile = (x:number,y: number) =>{
        dispatch({type: types.ADD_MOVE})
        ws.send(`rotate ${y} ${x}`)
        ws.send('map')
        ws.onmessage = () =>{
            setMap(map.map((item,i) =>{
                if(i === x){
                  return  item.map( (tileItem, j )=>{
                      if(j === y){
                          return {
                              ...tileItem,
                              rotate: tileItem.rotate - 90,
                          }
                      }else return tileItem
                  })
                }else return item
            }))
        }
       
       

    }

    useEffect(() => {
        ws.send(`new ${levelSelected}`)
        ws.send('map')
        ws.onmessage = e=>setMap(arrangingMap(e.data.slice(4,e.data.length)))
    }, [levelSelected])

    const backToLevel = () =>{
            dispatch({
                type: types.SET_LEVEL,
                payload: null
            })
            dispatch({
                type: types.CLEAN_MOVES,
            })
    }

    return (
        <div className={styles.pipes}>
            <Header />
            <div className={styles.pipesContainer}>
         <div className={styles.pipesContainerBack}>
         <Button
            onClick={()=> backToLevel() }
            >
              ←  Back to Levels
            </Button>
         </div>
         {!map.length  ? <Loader /> : 
         map.map((arr, x) => (
                <div key={x} className={styles.pipesBoard}>
                    {arr.map((tile, y)=>(
                        <PipeTile
                        key={`${x} ${y}`}
                        tile={tile.tile}
                        rotate={tile.rotate}
                        coordX={x}
                        coordY={y}
                        handleRotateTile={()=> handleRotateTile(x,y)}
                        />
                    ))}
                </div>
            ))
         }

            <div className={styles.actions}>
            <Button
            className={styles.actionsHelp}
            onClick={()=> {
                setIsVisible(true)
                ws.send('help')
                ws.onmessage = e=> setHelpText(e.data)
            }}
            >
                ?
            </Button>
            <Button
            disabled={moves === 0}
            onClick={()=> {
                setIsVerifyModalVisible(true)
                ws.send('verify')
                ws.onmessage = e=> setVerifyText(e.data)
            }}
            >
                Verify
            </Button>
            </div>
            </div>
            <HelpModal isVisible={isVisible} helpText={helpText} onClose={()=> setIsVisible(false)} />
            <VerifyModal isVisible={isVerifyModalVisible} verifyText={verifyText} onClose={()=> setIsVerifyModalVisible(false)} />
        </div>
    )
}

export default PipeBoard