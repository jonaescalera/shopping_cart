import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
}

const movieSlice = createSlice({
    name: 'movie',
    initialState: null,
    reducers:{
        getMovies(state){
            return state;
        }
    }
});


export default movieSlice.reducer;