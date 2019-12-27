import React from 'react';
import { Card } from './Card';


import { storiesOf } from '@storybook/react';
import { withKnobs, select, number } from "@storybook/addon-knobs";

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
            <Card value={value} suit={suit} />
        )
    }
)
