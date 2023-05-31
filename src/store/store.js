import { configureStore } from "@reduxjs/toolkit";

import user from "./user/userReducer"
import mangas from "./mangas/mangasReducer"
import categories from "./categories/categoriesActions"

export const store = configureStore({
    reducer: {
        user,
        mangas,
        categories
    }
})