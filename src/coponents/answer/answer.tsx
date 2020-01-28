import { Action } from "../judge/judge";
import React from "react";
import styles from "./answer.module.css";

interface Props {
    splittable: boolean;
    judgeCallBack: (action: Action) => void;
}

export class AnswerFrame extends React.Component<Props> {

    private readonly sendAction = (action: Action) => {
        const {judgeCallBack} = this.props;
        judgeCallBack(action);
    }

    private readonly hit = () => {
        this.sendAction(Action.HIT);
    }

    private readonly stand = () => {
        this.sendAction(Action.STAND);
    }

    private readonly double = () => {
        this.sendAction(Action.DOUBLE);
    }

    private readonly split = () => {
        const { splittable } = this.props;
        if (splittable) {
            this.sendAction(Action.SPLIT);
        }
    }

    private readonly handleKeyDown = (event: KeyboardEvent) => {
        switch(event.key) {
            case "a":
                this.hit();
                return;
            case "s":
                this.stand();
                return;
            case "d":
                this.double();
                return;
            case "f":
                this.split();
                return;
            default:
                return;
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }

    render() {
        const {splittable} = this.props;
        return (
            <div>
                <div className={styles.actionRoot}>
                    <div className={styles.actionButtonWrapper}>
                        <button className={styles.actionButton} onClick={this.hit}>H</button>
                    </div>
                    <div className={styles.actionButtonWrapper}>
                        <button className={styles.actionButton} onClick={this.stand}>S</button>
                    </div>
                    <div className={styles.actionButtonWrapper}>
                        <button className={styles.actionButton} onClick={this.double}>D</button>
                    </div>
                    {splittable && (
                        <div className={styles.actionButtonWrapper}>
                            <button className={styles.actionButton} onClick={this.split}>P</button>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}