import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiUrl } from "../../utils/api";
import axios from "axios";
import { parsePagesArray } from "../../utils/utils";
import { _retrieveData } from "../../utils/utils";

const get_manga = createAsyncThunk("get_manga", async ({ manga_id, path }) => {
    try {
        let token = await _retrieveData({key: "token"})
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }
        let url = apiUrl + "mangas/" + manga_id;
        let response = await axios.get(url, headers);
        return {

            manga: response.data.manga,
            ranking: response.data.ranking,
            numberChapter: response.data.numberChapter,
            userReactions: response.data.userReactions
        }
    } catch (error) {
        console.log(error)
    }
})

const send_reaction = createAsyncThunk("send_reaction", async ({ manga_id, name }) => {
    try {
        let token = await _retrieveData({key: "token"})
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }
        let response = await axios.post(apiUrl + 'reactions', { name: name, manga_id: manga_id }, headers)
        console.log(name)
        console.log(response.data.destroy)
        return {
            name: name,
            destroy: response.data.destroy,

        }
    } catch (error) {
        console.log(error)
    }
})

const get_all_from_manga = createAsyncThunk("get_all_from_manga", async ({ manga_id, page, path }) => {
    try {
        let token = await _retrieveData({key: "token"})
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }
        let url = apiUrl + "chapters?" + "manga_id=" + manga_id + "&" + "page=" + page;
        let response = await axios.get(url, headers);
        let pages = parsePagesArray(response.data.pages)
        return {
            chapters: response.data.chapters,
            page: page,
            pages: pages,
            manga_id: manga_id,
            path: path,
            loading: false
        }
    } catch (error) {
        return {
            loading: false
        }
    }


})

const actions = { get_all_from_manga, get_manga, send_reaction }
export default actions;