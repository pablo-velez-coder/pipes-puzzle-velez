import styles from './styles.module.scss'

interface PipeTileProps{
    coordX: number;
    coordY: number;
    tile: string | undefined;
    rotate: number;
    handleRotateTile: Function;
}

const PipeTile: React.FC<PipeTileProps> = ({coordX, coordY, rotate, tile, handleRotateTile}) => {
    return (
        <span
        onClick={()=> handleRotateTile(coordX,coordY)}
        className={styles.pipeBoardTile} 
        style={{
            transform: `rotate(${-rotate}deg)`,
            transition: 'transform 0.3s ease-in-out',
        }}
        key={`${coordX} ${coordY}`}>{tile}
    </span>
    )
}

export default PipeTile
