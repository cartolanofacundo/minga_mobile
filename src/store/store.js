import { configureStore } from "@reduxjs/toolkit";

import user from "./user/userReducer"
import mangas from "./mangas/mangasReducer"
import categories from "./categories/categoriesActions"
import chapters from "./chapters/chaptersReducer"
import read from "./read/readReducer"
export const store = configureStore({
    reducer: {
        user,
        mangas,
        categories,
        chapters,
        read
    }
})