import { Action } from "../judge/judge";
import React from "react";
import styles from "./history.module.css";

function shorten(action: Action) {
    switch(action) {
        case Action.HIT:
            return 'H';
        case Action.DOUBLE:
            return 'D';
        case Action.SPLIT:
            return 'P';
        case Action.STAND:
            return 'S';
    }
    return 'N';
}

export type History = {
    dealer: number;
    player: number[];
    correct: Action;
    answer: Action;
};

type PreviousProps = {
    history: History
};

export class Previous extends React.Component<PreviousProps> {
    render() {
        const {history: {correct, answer, dealer, player}} = this.props;
        return (
            <div className={styles.root}>
                <div>
                    <div>J</div>
                    <div className={styles.judge}>{correct === answer ? 
                    <span role="img" aria-label="O">⭕️</span> : 
                    <span role="img" aria-label="X">❌</span>}
                    </div>
                </div>
                <div className={styles.col}>
                    <div>D</div>
                    <div>{dealer}</div>
                </div>
                <div className={styles.col}>
                    <div>HND</div>
                    <div className={styles.hands}>
                        {player.map((card, idx) => (
                            <div className={idx === 0 ? '' : styles.col} key={idx}>{card}</div>
                        ))}
                    </div>
                </div>
                <div className={styles.col}>
                    <div>Y</div>
                    <div>{shorten(answer)}</div>
                </div>
                <div className={styles.col}>
                    <div>C</div>
                    <div>{shorten(correct)}</div>
                </div>
            </div>
        );
    }
}

type HistoriesProps = {
    histories: History[]
};

export const Histories: React.SFC<HistoriesProps> = ({histories}) => (
    <>{histories.map((history, idx) => <Previous key={idx} history={history} />)}</>
);
