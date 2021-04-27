import React from "react";
import { render, screen } from "@testing-library/react";
import HeaderMenu from "./HeaderMenu";
import { BrowserRouter } from "react-router-dom";

describe('<HeaderMenu />', () => {
    test('should home be disabled if url is empty', async () => {
        const {queryByText} = render(<BrowserRouter><HeaderMenu /></BrowserRouter>)
        const home = await queryByText('Home');
        const characters = await queryByText('Characters');
        expect(home).toHaveClass('disabled');
        expect(characters).not.toHaveClass('disabled');
    });

    test('should characters be disabled if url is characters', async () => {
        const {queryByText} = render(<BrowserRouter><HeaderMenu activePage="characters"/></BrowserRouter>)
        const home = await queryByText('Home');
        const characters = await queryByText('Characters');
        expect(home).not.toHaveClass('disabled');
        expect(characters).toHaveClass('disabled');
    });

    test('should characters link dest to be "/characters" if lastCharactersPage is not defined', async () => {
        const {queryByText} = render(<BrowserRouter><HeaderMenu activePage="characters"/></BrowserRouter>);
        const characters = await queryByText('Characters');
        const to = characters?.getAttribute('href');
        expect(to).toEqual("/characters");
    });
})