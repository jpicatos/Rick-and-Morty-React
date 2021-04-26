import React from "react";
import { render, screen } from "@testing-library/react";
import HeaderMenu from "./HeaderMenu";
import { BrowserRouter } from "react-router-dom";

describe('<HeaderMenu />', () => {
    test('should home be active if url is empty', async () => {
        const {queryByText} = render(<BrowserRouter><HeaderMenu /></BrowserRouter>)
        const home = await queryByText('Home');
        const characters = await queryByText('Characters');
        expect(home).toHaveClass('active');
        expect(characters).not.toHaveClass('active');
    });

    test('should characters be active if url is characters', async () => {
        const {queryByText} = render(<BrowserRouter><HeaderMenu activePage="characters"/></BrowserRouter>)
        const home = await queryByText('Home');
        const characters = await queryByText('Characters');
        expect(home).not.toHaveClass('active');
        expect(characters).toHaveClass('active');
    });

    test('should characters link dest to be "/characters" if lastCharactersPage is not defined', async () => {
        const {queryByText} = render(<BrowserRouter><HeaderMenu activePage="characters"/></BrowserRouter>);
        const characters = await queryByText('Characters');
        const to = characters?.getAttribute('href');
        expect(to).toEqual("/characters");
    });

    test('should characters link dest to be "/characters" if lastCharactersPage is 0', async () => {
        const {queryByText} = render(<BrowserRouter><HeaderMenu activePage="characters" lastCharactersPage={0}/></BrowserRouter>);
        const characters = await queryByText('Characters');
        const to = characters?.getAttribute('href');
        expect(to).toEqual("/characters");
    });

    test('should characters link dest to be "/characters" if lastCharactersPage is 1', async () => {
        const {queryByText} = render(<BrowserRouter><HeaderMenu activePage="characters" lastCharactersPage={1}/></BrowserRouter>);
        const characters = await queryByText('Characters');
        const to = characters?.getAttribute('href');
        expect(to).toEqual("/characters");
    });

    test('should characters link dest to be "/characters?page=" if lastCharactersPage is higher than 1', async () => {
        const {queryByText} = render(<BrowserRouter><HeaderMenu activePage="characters" lastCharactersPage={3}/></BrowserRouter>);
        const characters = await queryByText('Characters');
        const to = characters?.getAttribute('href');
        expect(to).toEqual("/characters?page=3");
    });
})