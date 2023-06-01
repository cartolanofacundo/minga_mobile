import { createReducer } from "@reduxjs/toolkit";
import actions from "./chaptersActions";

const { get_all_from_manga, get_manga, send_reaction } = actions


const initial_state = {
    manga: null,
    manga_id: null,
    chapters_manga_id: null,
    chapters: [],
    loadingChapters: false,
    loadingManga: false,
    page: 1,
    pages: null,
}


const reducer = createReducer(
    initial_state,
    (builder) => builder
        .addCase(
            get_all_from_manga.fulfilled,
            (state, action) => {
                const new_state = {
                    ...state,
                    chapters: state.chapters_manga_id === action.payload.manga_id ? [...state.chapters,...action.payload.chapters] : action.payload.chapters,
                    page: action.payload.page,
                    pages: action.payload.pages,
                    chapters_manga_id: action.payload.manga_id,
                    loadingChapters: false
                }
                return new_state
            }
        )
        .addCase(
            get_all_from_manga.pending,
            (state, action) => {
                const new_state = {
                    ...state,
                    loadingChapters: true
                }
                return new_state
            }
        )
        .addCase(
            get_all_from_manga.rejected,
            (state, action) => {
                const new_state = {
                    ...state,
                    chapters_manga_id: null,
                    chapters: null,
                    loadingChapters: false,
                    page: 1,
                    pages: null


                }
                return new_state
            }
        )
        .addCase(
            get_manga.fulfilled,
            (state, action) => {
                const new_state = {
                    ...state,
                    loadingManga: false,
                    manga_id: action.payload.manga_id,
                    manga: action.payload.manga,
                    ranking: action.payload.ranking,
                    totalChapters: action.payload.numberChapter,
                }
                return new_state
            }
        )
        .addCase(
            get_manga.pending,
            (state, action) => {
                const new_state = {
                    ...state,
                    loadingManga: true
                }
                return new_state
            }
        )
        .addCase(
            get_manga.rejected,
            (state, action) => {
                const new_state = {
                    ...state,
                    loadingManga: false,
                    manga_id: null,
                    manga: null
                }
                return new_state
            }
        )
)

export default reducer