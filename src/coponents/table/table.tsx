import React from 'react';
import { CardValue, CardsView } from "../card/card";
import styles from './table.module.css';

type TableState = {
    dealer: CardValue[];
    player: CardValue[];
};

export const TableView: React.SFC<TableState> = ({ dealer, player }) => {
    return (
        <div>
            <div className={styles.dealer}>
                <CardsView cards={dealer} />
            </div>
            <div className={styles.player}>
                <CardsView cards={player} />
            </div>
        </div>
    );
}