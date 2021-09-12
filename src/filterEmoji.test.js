import React from 'react';
import App from "./App";
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';

describe('Emoji list test', () => {
    test('Emoji list rerendered after filter',async () => {
        await render(<App/>)
        const emojiList=document.querySelector(".component-emoji-results")
        const filterText=document.querySelector(".component-search-input").querySelector("div").querySelector("input")
        userEvent.type(filterText,"100")
        expect(emojiList.childElementCount).toEqual(1);
    })
})