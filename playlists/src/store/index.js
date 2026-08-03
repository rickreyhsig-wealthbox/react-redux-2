import { configureStore, createSlice } from '@reduxjs/toolkit';

const songsSlice = createSlice({
  name: 'song',
  initialState: ['song1', 'song2', 'song3'],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      return state.filter((song) => song !== action.payload);
    },
    setSongs(state, action) {
      return action.payload;
    },
  },
});

export const { addSong, removeSong, setSongs } = songsSlice.actions;

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
  },
});

const startingState = store.getState();
console.log(JSON.stringify(startingState)); // Log the initial state

store.dispatch({
  type: 'song/addSong',
  payload: 'New song'
});
const finalState = store.getState();
console.log(JSON.stringify(finalState)); // Log the state after adding a song


/*
const initialState = {
  playlists: [],
};

const playlistsSlice = createSlice({
  name: 'playlists',
  initialState,
  reducers: {
    setPlaylists(state, action) {
      state.playlists = action.payload;
    },
  },
});

export const { setPlaylists } = playlistsSlice.actions;

const store = configureStore({
  reducer: {
    playlists: playlistsSlice.reducer,
  },
});*/

export default store;
