export interface ILevel {
    id:number;
    level:number; 
    isLocked: boolean;
}

export interface IState {
    user: string;
    levelSelected: number;
    levels: ILevel[];
    moves: number;
}