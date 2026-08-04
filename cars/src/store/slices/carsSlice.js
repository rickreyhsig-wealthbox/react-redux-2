import { createSlice, nanoid } from '@reduxjs/toolkit';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    searchTerm: '',
    cars: [], 
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      // Assumption: 
      // action.payload == { name: 'Car Name', cost: 10000 }
      state.cars.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid()
      });
    },
    removeCar(state, action) {
      // Assumption: 
      // action.payload == { id: 'Car ID' }
      const updated = state.cars.filter((car) => {
        return car.id !== action.payload.id
      });
      state.cars = updated;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;

export const carsReducer = carsSlice.reducer; 
