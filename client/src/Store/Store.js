import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        username: "",
        email: ""
    },
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload
        }
    }
});

const store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
});

export function useAuthStore() {
    return store;
}

export const { setUsername, setEmail } = userSlice.actions;
export default useAuthStore;
