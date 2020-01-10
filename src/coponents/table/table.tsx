import React from 'react';
import { CardValue, CardView } from "../card/card";
import styles from './table.module.css';

type TableState = {
    dealer: CardValue;
    player: [CardValue, CardValue];
};

export const TableView: React.SFC<TableState> = ({ dealer, player }) => {
    return (
        <div>
            <div><CardView {...dealer} /></div>
            <div className={styles.player}>
                {player.map(card => (
                    <div>
                        <CardView {...card} />
                    </div>
                ))}
            </div>
        </div>
    );
}