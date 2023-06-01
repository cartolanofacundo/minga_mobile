import { createReducer } from "@reduxjs/toolkit";
import actions from "./readActions";

const { get_pages, set_page } = actions;
const initial_state = {
    chapter_id: null,
    manga_id: null,
    next_chapter: null,
    pages: null,
    page: 1,
    title: null,
    order: null,
    loading: false
}

const reducer = createReducer(
    initial_state,
    (builder) => builder
        .addCase(
            get_pages.fulfilled,
            (state, action) => {
                const new_state = {
                    ...state,
                    chapter_id: action.payload.chapter_id,
                    manga_id: action.payload.manga_id,
                    next_chapter: action.payload.next_chapter,
                    pages: action.payload.pages,
                    title: action.payload.title,
                    order: action.payload.order,
                    loading: false
                }
                return new_state
            }
        )
        .addCase(
            get_pages.pending,
            (state, action) => {
                const new_state = {
                    ...state,
                    loading: false
                }
                return new_state
            }
        )
        .addCase(
            get_pages.rejected,
            (state, action) => {
                const new_state = {
                    ...state,
                    chapter_id: null,
                    manga_id: null,
                    next_chapter: null,
                    title: null,
                    order: null,
                    loading: false
                }
                return new_state
            }
        )
        .addCase(
            set_page,
            (state, action) => {
                console.log("entre")
                const new_state = {
                    ...state,
                    page: action.payload.page,
                    chapter_id: action.payload.chapter_id,
                }
                return new_state
            }
        )
)

export default reducer;