import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./user"

const rootReducer = {
    //add more reducer late
    user: userReducer,
}

const store = configureStore({
    reducer: rootReducer,
    devTools: true,
})
export default store
export type AppState = ReturnType<typeof store.getState>