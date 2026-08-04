import { configureStore, createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movie',
  initialState: ['movie1', 'movie2', 'movie3'],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
    setMovies(state, action) {
      return action.payload;
    },
  },
});

const songsSlice = createSlice({
  name: 'song',
  initialState: ['song1', 'song2', 'song3'],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
    setSongs(state, action) {
      return action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer,
  },
});

console.log(store.getState());

export { store };
export const { addSong, removeSong, setSongs } = songsSlice.actions;
export const { addMovie, removeMovie, setMovies } = moviesSlice.actions;
