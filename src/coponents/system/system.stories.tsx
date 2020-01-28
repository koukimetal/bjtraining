import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from "@storybook/addon-knobs";
import { System } from "./system";
import {
    generateProblems,
    generateSmallProblems,
    generateSmallerProblems,
    shuffleArray
} from '../judge/judge_table';
storiesOf('System', module)
    .addDecorator(withKnobs)
    .add('System', () => {
        const problems = generateProblems();
        shuffleArray(problems);
        return (
            <System
            problems={problems}
            />
        );
    })
    .add('System small', () => {
        const problems = generateSmallProblems();
        shuffleArray(problems);
        return (
            <System
            problems={problems}
            />
        );
    })
    .add('System smaller', () => {
        const problems = generateSmallerProblems();
        shuffleArray(problems);
        return (
            <System
            problems={problems}
            />
        );
    })
    ;
