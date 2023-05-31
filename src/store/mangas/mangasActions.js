import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../../utils/api"
import { _retrieveData } from "../../utils/utils";

const get_mangas = createAsyncThunk("get_mangas", async ({page = 1}) => {
    try {
        let url = apiUrl + "mangas" + "?" + "page=" + page
        let token = await _retrieveData({key: "token"})
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }
        let response = await axios(url, headers);
        let pages = response.data.pages
        
        return {
            mangas: response.data.mangas,
            pages: pages,
            page: page
        }
    } catch (error) {
        return{
            categories: []
        }
    }

})

const actions = {get_mangas}
export default actions;