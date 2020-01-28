import { Action, JudgeProblems } from "./judge";

function judgePair(d:number, p: number) {
    switch(p) {
        case 2:
            return d <= 7 ? Action.SPLIT : Action.HIT;
        case 3:
            return d <= 8 ? Action.SPLIT : Action.HIT;
        case 4:
            return 4 <= d && d <= 6 ? Action.SPLIT : Action.HIT;
        case 5:
            return d <= 9 ? Action.DOUBLE : Action.HIT;
        case 6:
            return d <= 7 ? Action.SPLIT : Action.HIT;
        case 7:
            return d === 10 ? Action.STAND : d <= 8 ? Action.SPLIT : Action.HIT;
        case 8:
            return Action.SPLIT;
        case 9:
            return d === 7 || d === 10 || d === 11 ? Action.STAND : Action.SPLIT;
        case 10:
            return Action.STAND;
        case 11:
            return Action.SPLIT;
        default:
            throw new Error('Invalid sitaution');
    }
}

function judgeSoft(d: number, sum: number) {
    if (13 <= sum && sum <= 17) {
        return Action.HIT;
    } else if (sum > 17) {
        if (sum === 18) {
            return (d === 9 || d === 10) ? Action.HIT : Action.STAND;
        }
        return Action.STAND;
    }
    throw new Error('Invalid situation');
}

function judgeHard(d: number, sum: number) {
    if (sum <= 8) {
        return Action.HIT;
    } else if (sum === 9) {
        return d <= 6 ? Action.DOUBLE :Action.HIT;
    } else if (sum === 10) {
        return d <= 9 ? Action.DOUBLE :Action.HIT;
    } else if (sum === 11) {
        return Action.DOUBLE;
    } else if (sum === 12) {
        if (d <= 3) {
            return Action.HIT;
        } else if (7 <= d) {
            return Action.HIT;
        } else {
            return Action.STAND;
        }
    }
    if ((13 <= sum && sum <= 16) && (7 <= d && d <= 11)) {
        return Action.HIT;
    }
    return Action.STAND;
}


function cardTrans(c: number) {
    if (c === 1) {
        return 11;
    }
    return Math.min(c, 10);
}

export function judgeAnswer(d: number, p1: number, p2: number) {
    const dealer = cardTrans(d);
    const player1 = cardTrans(p1);
    const player2 = cardTrans(p2);

    if (p1 === p2) {
        return judgePair(dealer, player1);
    } else if (p1 === 1 || p2 === 1) {
        return judgeSoft(dealer, player1 + player2);
    } else {
        return judgeHard(dealer, player1 + player2);
    }
}

function isBJ(raw1: number, raw2: number) {
    return (raw1 === 1 && 10 <= raw2) || (10 <= raw1 && raw2 === 1);
}

export function generateProblems() {
    const problems: JudgeProblems[] = [];
    for (let d = 1; d <= 13; d++) {
        for (let p1 = 1; p1 <= 13; p1++) {
            for (let p2 = 1; p2 <= 13; p2++) {
                if (isBJ(p1, p2)) {
                    continue;
                }
                problems.push(
                    new JudgeProblems(d, [p1, p2])
                );
            }
        }
    }
    return problems;
}

export function generateSmallProblems() {
    const problems: JudgeProblems[] = [];
    for (let d = 1; d <= 10; d++) {
        for (let p1 = 1; p1 <= 10; p1++) {
            for (let p2 = p1; p2 <= 10; p2++) {
                if (isBJ(p1, p2)) {
                    continue;
                }
                problems.push(
                    new JudgeProblems(d, [p1, p2])
                );
            }
        }
    }
    return problems;
}

export function generateSmallerProblems() {
    const problems: JudgeProblems[] = [];
    for (let d = 1; d <= 10; d++) {
        for (let p1 = 1; p1 <= 10; p1++) {
            for (let p2 = p1; p2 <= 10; p2++) {
                let skip = false;
                if (isBJ(p1, p2)) {
                    skip = true;
                } else if (p1 === 1 || p2 === 1) {
                    skip = false;
                } else if (p1 === p2) {
                    skip = false;
                } else if (p1 + p2 > 16) {
                    skip = true;
                } else if (p1 + p2 < 9) {
                    skip = true;
                }
                if (skip) {
                    continue;
                }
                problems.push(
                    new JudgeProblems(d, [p1, p2])
                );
            }
        }
    }
    return problems;
}

export function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

export function shuffleArray<T>(a: T[]) {
    for (let i = 0; i < a.length; i++) {
        const j = getRandomInt(0, a.length);
        const tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
}
