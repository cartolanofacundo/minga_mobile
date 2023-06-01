import { createReducer } from "@reduxjs/toolkit";
import actions from "./mangasActions";

const {get_mangas} = actions

let initial_state = {
    page: 1,
    pages: [],
    mangas: [],
    loading: false
}

const reducer = createReducer(
    initial_state,
    (builder) => builder
    .addCase(
        get_mangas.fulfilled,
        (state, action) => {
            const new_state = {
                ...state,
                mangas: [...state.mangas,...action.payload.mangas],
                pages: action.payload.pages,
                page: action.payload.page,
                loading: false
            }
            return new_state
        }
    )
    .addCase(
        get_mangas.pending,
        //eslint-disable-next-line
        (state, action) => {
            const new_state = {
                ...state,
                loading: true
            }
            return new_state
        }
    )
    .addCase(
        get_mangas.rejected,
        //eslint-disable-next-line
        (state, action) => {
            const new_state = {
                ...state,
                mangas: [],
                page: 1,
                loading: false
            }
            return new_state
        }
    )
)

export default reducer;