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

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
  },
});

export { store };
export const { addSong, removeSong, setSongs } = songsSlice.actions;

/*
// console.log(songsSlice.actions); // Log the action creators
const startingState = store.getState();
console.log(JSON.stringify(startingState)); // Log the initial state

// store.dispatch({
//   type: 'song/addSong',
//   payload: 'New song'
// });
store.dispatch(addSong('New song')); // Dispatch the addSong action
store.dispatch(songsSlice.actions.addSong('Another new song')); // Dispatch the addSong action using the action creator

const finalState = store.getState();
console.log(JSON.stringify(finalState)); // Log the state after adding a song

// export default store;

*/
