import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../../utils/api"


const get_categories = createAsyncThunk("get_categories", async () => {
    try {
        let url = apiUrl + "categories"
        let response = await axios(url);
        return {
            categories: response.data.categories
        }
    } catch (error) {
        return{
            categories: []
        }
    }

})

const actions = {get_categories}
export default actions;