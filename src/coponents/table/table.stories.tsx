import React from 'react';
import { TableView } from './table';


import { storiesOf } from '@storybook/react';

storiesOf('Table', module)
    .add(
    'Table', () => {
        return (
            <TableView player={[
                {
                    suit: 'H', value: 1
                },
                {
                    suit: 'H', value: 11
                }
            ]} dealer={[{
                suit: 'D', value: 2
            }]} />
        )
    }
)
