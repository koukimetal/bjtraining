import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from "@storybook/addon-knobs";
import { Previous } from './history';
import { Action } from '../judge/judge';

storiesOf('Previous', module)
    .addDecorator(withKnobs)
    .add('Previous correct', () => {
        return (
            <Previous
            history={{
                player: [1, 5], dealer: 7,
                correct: Action.HIT,
                answer: Action.HIT,
            }}
            />
        );
    })
    .add('Previous wrong', () => {
        return (
            <Previous
            history={{
                player: [1, 5], dealer: 7,
                correct: Action.HIT,
                answer: Action.DOUBLE,
            }}
            />
        );
    });
