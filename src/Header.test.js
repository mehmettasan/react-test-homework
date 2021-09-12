import React from 'react';
import Header from "./Header";
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';

describe('header rendered test', () => {
    test('header rendered', () => {
        render(<Header/>)
        const header=document.querySelector("header")
        expect(header).toBeInTheDocument();
    })
})

