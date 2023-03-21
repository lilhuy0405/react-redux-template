import { createSlice } from "@reduxjs/toolkit";

export type UserStateType = {
    name: string;
    address: string;
    role: string;
}
const initialState: UserStateType = {
    address: '',
    name: '',
    role: '',
}


const userSlice = createSlice({
    initialState,
    name: "user",
    reducers: {
        setUser: (state, action) => {
            return action.payload
        },
    }
})

const { actions, reducer } = userSlice;
export const {
    setUser
} = actions
export default reducer;
