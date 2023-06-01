import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { apiUrl } from "../../utils/api";
import axios from "axios";
import { _retrieveData } from "../../utils/utils";

const get_pages = createAsyncThunk("get_pages", async ({ chapter_id }) => {
    try {
        let url = apiUrl + "chapters/" + chapter_id;
        let token = await _retrieveData({key: "token"})
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }
        let response = await axios.get(url, headers);
        return {
            chapter_id: chapter_id,
            manga_id: response.data.chapter.manga_id,
            pages: response.data.chapter.pages,
            next_chapter: response.data.nextChapter,
            title: response.data.chapter.title,
            order: response.data.chapter.order
        }
    } catch (error) {
        console.log(error)
    }

})
const set_page = createAction(({ page, chapter_id }) => {
    console.log("entre",page, chapter_id)
    return {
        payload: {
            page,
            chapter_id
        }
    }
})
const actions = { get_pages, set_page }
export default actions;