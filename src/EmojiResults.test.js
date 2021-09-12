import React from 'react';
import App from "./App";
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Clipboard from "clipboard";

describe('Emoji test', () => {
    test('Emoji list rendered', () => {
        render(<App/>)
        const emojiList=document.querySelector(".component-emoji-results")
        expect(emojiList).toBeInTheDocument();
    })
    
})
