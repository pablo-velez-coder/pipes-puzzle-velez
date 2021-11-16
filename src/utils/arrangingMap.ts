import { Tile } from "../interfaces/tile"

 export const arrangingMap = (map:string):Tile[][] =>{      
    return map.split('\n').filter(arr=> arr.length !== 0).map(item=> item.split('').map(tile=>({
     tile: tile,
     rotate: 0
 })))      
 }

 export const formattingName = (name: string) => {
     return name[0].toUpperCase() + name.slice(1).toLowerCase()
 }