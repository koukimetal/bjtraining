import React from 'react';
import { fromString, CardsView } from './card';


import { storiesOf } from '@storybook/react';
import { withKnobs, select, number, array } from "@storybook/addon-knobs";

storiesOf('Card', module)
    .addDecorator(withKnobs)
    .add(
    'Card', () => {
        const suit = select("Suit", {
            C: 'C', D: 'D', H: 'H', 'S': 'S'
        }, 'C');
        const value = number("Value", 1, {
            range: true, min: 1, max: 13, step: 1
        });

        return (
            <CardsView cards={[{suit, value}]}/>
        )
    }
)    .add(
    'Cards', () => {
        const cards = array('cards', ["CA", "C2"]);
        return (
            <CardsView cards={cards.map(cardString => fromString(cardString))} />
        )
    }
)
