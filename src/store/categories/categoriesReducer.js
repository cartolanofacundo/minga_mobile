import { createReducer } from "@reduxjs/toolkit";
import actions from "./categoriesActions";

const {get_categories} = actions

let initial_state = {
    categories: []
}

const reducer = createReducer(
    initial_state,
    (builder) => builder
    .addCase(
        get_categories.fulfilled,
        (state, action) => {
            const new_state = {
                ...state,
                categories: action.payload.categories
            }
            return new_state
        }
    )
    .addCase(
        get_categories.rejected,
        //eslint-disable-next-line
        (state, action) => {
            const new_state = {
                ...state,
                categories: []
            }
            return new_state
        }
    )
)

export default reducer;