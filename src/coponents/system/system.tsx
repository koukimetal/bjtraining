import React from "react";
import { JudgeProblems, Action } from "../judge/judge";
import { judgeAnswer, getRandomInt } from "../judge/judge_table";
import { History } from "../history/history";
import { CardSuit, AllSuits, CardValue } from "../card/card";
import { TableView } from "../table/table";
import { AnswerFrame } from "../answer/answer";
import { Previous } from "../history/history";

interface State {
    histories: History[];
    problems: JudgeProblems[];
    index: number;
}

interface Props {
    problems: JudgeProblems[];
}

const getSuit = (exclude: CardSuit[] = []) => {
    const suits = AllSuits.filter(suit => !exclude.includes(suit));
    return suits[getRandomInt(0, suits.length)];
};

export class System extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            histories: [],
            problems: props.problems,
            index: 0,
        };
    }

    private readonly judgeCallBack = (answer: Action) => {
        const {problems, index, histories} = this.state;
        const problem = problems[index];
        const {player, dealer} = problem;
        const correct = judgeAnswer(dealer, player[0], player[1]);
        const history: History = {
            player, dealer, correct, answer
        };

        if (correct !== answer) {
            const [wrong] = problems.splice(index, 1);
            this.setState({
                problems: [...problems, wrong],
                histories: [history, ...histories],
            });
        } else {
            this.setState({
                index: (index + 1) % problems.length,
                histories: [history, ...histories],
            });    
        }
    }

    getCards(dealer: number, player: number[]): {
        dealer: CardValue,
        player: CardValue[],
    } {
        const dealerSuit = getSuit();
        const usedSuits: {[key: number]: CardSuit[]} = {
            [dealer]: [dealerSuit]
        };

        const p0Suit = getSuit(usedSuits[player[0]] || []);
        const p0SuitUsed = usedSuits[player[0]] || [];
        p0SuitUsed.push(p0Suit);
        usedSuits[player[0]] = p0SuitUsed;

        const p1Suit = getSuit(usedSuits[player[1]] || []);

        return {
            dealer: {value: dealer, suit: dealerSuit},
            player: [{
                value: player[0], suit: p0Suit
            }, {
                value: player[1], suit: p1Suit
            }]
        };
    }

    render() {
        const {problems, index, histories} = this.state;
        const {player: praw, dealer: draw} = problems[index];
        const {player, dealer} = this.getCards(draw, praw);
        const history = histories.length > 0 ? histories[0] : null;

        return (
            <div>
                <div>
                    <TableView player={player} dealer={[dealer]} />
                </div>
                <div>
                    <AnswerFrame
                    judgeCallBack={this.judgeCallBack}
                    splittable={praw[0] === praw[1]}
                    />
                </div>
                {
                    history && (<div>
                        <Previous history={history}/>
                    </div>)
                }
                <div>{index} / {problems.length}</div>
            </div>
        );
    }
}