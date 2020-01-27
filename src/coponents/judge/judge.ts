export enum Action {
    HIT = 'HIT',
    SPLIT = 'SPLIT',
    DOUBLE = 'DOUBLE',
    STAND = 'STAND',
}

export class JudgeProblems {
    constructor(
        public dealer: number,
        public player: number[],
    ) {
    }
}