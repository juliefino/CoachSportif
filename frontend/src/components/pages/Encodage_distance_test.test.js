import ReactDOM from "react-dom";
import {MemoryRouter} from "react-router-dom";
import SignUp from "./Connexion/SignUp";
import SignIn from "./Connexion/SignIn";
import React from "react";
import {render, fireEvent} from '@testing-library/react';
import { act } from 'react-dom/test-utils';

describe("Form encodage", () => {
    describe("with valid inputs", () => {
        it('calls the onSubmit function', async () => {
            const mockOnSubmit = jest.fn()
            const {getByLabelText, getByRole} = render(<form onSubmit={mockOnSubmit}/>)

            await act(async () => {
                fireEvent.change(getByLabelText("Date"), {target: {value : '2021-02-22'}})
                fireEvent.change(getByLabelText("Heure"), {target: {value : '20:03'}})
            })

            await act(async () => {
                fireEvent.click(getByRole("button"))
            })

            expect(mockOnSubmit).toHaveBeenCalled()
        })
    })
})
