import { createSlice } from "@reduxjs/toolkit";

const initalState= {
    mode: "light",
    user: null,
    token: null,
    posts: [],
};

export const authSlice = createSlice({
    name: "auth",
    initalState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        },
        setFollowers: (state, action) => {
            if (state.user) {
                state.user.followers = action.payload.followers;
            } else {
                console.error("No Followers Found")
            }
        },
        setPosts: (state, action) => {
            state.posts = action.payload.posts;
        },
        setPost: (state, action) => {
            const updatedPosts = state.posts.map((post)=>{
                if (post._id === action.payload.post_id) return action.payload.post;
                return post;
            });
            state.posts = updatedPosts;
       }
    }
})

export const { setMode, setLogin, setLogout, setFollowers, setPosts, setPost } = authSlice.actions;
export default authSlice.reducer;